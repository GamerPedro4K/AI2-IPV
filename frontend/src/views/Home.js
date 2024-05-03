/* eslint-disable no-useless-constructor */
import {React, useEffect, useState} from 'react';
import NavbarC from '../components/Navbar';
import Slider from '../components/Slider';
import config from '../data/config';


import Container from'react-bootstrap/Container';
import CardC from '../components/Card';

const Home = (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await fetch(config.apiUrl + '/filme/list');
            const json = await response.json();
            console.log('Fetched data:', json);
            if(json.status === 200){
                setData(json.success.msg);
                setLoading(false);
            }
            
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };
    

    useEffect(() => {
        fetchData();
    }, []); 




    return (
        <>
       <NavbarC/>

        {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
            {<Slider items={[data[0] || null, data[1] || null, data[2] || null, data[3] || null, data[4] || null]}/>}
            <Container className='mt-5'>
                <div className='d-flex justify-content-center flex-wrap align-items-stretch gap-4'>
                    {data.map((item, index) =>  
                    { if(index <= 500)
                        return <CardC data={item} key={index}/>
                    else
                return <></>}
                    )}
                </div>
            </Container>
        </div>
      )}
    </>
    )
}



export default Home;