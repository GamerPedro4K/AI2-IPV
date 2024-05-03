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
    const [msgLoad, setMsgLoad] = useState('Carregando dados...');

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
            setMsgLoad('Erro ao carregar dados');
            console.error('Error fetching data:', error);
        }
    };
    

    useEffect(() => {
        fetchData();
    }, []); 


    return (
        <>
       <NavbarC/>

        {loading ? (
            <div className='centered'>
                 <div className='d-flex justify-content-center flex-column align-items-center'>
                    {msgLoad === 'Carregando dados...' ? <img src="https://i.pinimg.com/originals/f9/41/ae/f941ae9d16fd7d2957eea6e5b1100d1e.gif" style={{maxWidth: "1000px"}} alt=""/> : <img src="https://i.gifer.com/origin/78/787899e9d4e4491f797aba5c61294dfc_w200.gif" style={{maxWidth: "1000px"}} alt=""/>}
                
                <h1>{msgLoad}</h1>
            </div>
            </div>
           
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