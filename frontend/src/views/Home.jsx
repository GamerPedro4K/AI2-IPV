import {React, useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from '../components/Slider';
import { getFilmes, deleteFilme } from '../services/filmesService';
import Swal from 'sweetalert2';
import Container from'react-bootstrap/Container';
import CardC from '../components/Card';
import { Link } from 'react-router-dom';

const Home = (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [msgLoad, setMsgLoad] = useState('Carregando dados...');

    const deleteCard = (id) => {
        deleteFilme(id).then(() => {
            Swal.fire({
                title: "Apagado!",
                text: "Filme foi apagado!",
                icon: "success"
            });
            loadFilmes();
        }).catch((err) => {
            Swal.fire({
                title: "Erro!",
                text: err.message,
                icon: "error"
            });
        });
    };

    const loadFilmes = () => {
        getFilmes().then((data) => {
            setData(data);
            setLoading(false);
        }).catch((err) => {
            setMsgLoad(err.message);
        });
    };

    useEffect(() => {
        loadFilmes();
    }, []); 


    return (
        <>
        {loading ? (
            <div className='centered'>
                 <div className='d-flex justify-content-center flex-column align-items-center'>
                    {msgLoad === 'Carregando dados...' ? <img src="https://i.pinimg.com/originals/f9/41/ae/f941ae9d16fd7d2957eea6e5b1100d1e.gif" style={{maxWidth: "1000px"}} alt=""/> : <img src="https://i.gifer.com/origin/78/787899e9d4e4491f797aba5c61294dfc_w200.gif" style={{maxWidth: "1000px"}} alt=""/>}
                <h1>{msgLoad}</h1>
            </div>
            </div>
      ) : (
        <div style={{marginTop: '56px'}}>
            {<Slider items={data.slice(0, 5)}/>}
            <div id='filmes'></div>
            <Container className='mt-5'>
                <div className='row' >
                    <h1 className='col-6' >Veja todos os filmes:</h1>
                    <div className='col-6 d-flex justify-content-end'>
                        <Link to={'/add'} style={{ textDecoration: 'none' }}>
                            <button className='btn btn-primary d-auto rounded-circle' style={{ height:'50px', width: '50px'}}>
                                <FontAwesomeIcon icon="fa-solid fa-plus" size="xl" />
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='row'>
                {data.map((item) => (
                    <div key={item.id} className='col-12 col-md-6 col-lg-4 col-xl-3 mt-4' style={{ height: '510px' }}>
                        <CardC data={item} deleteCard={deleteCard}/>
                    </div>
                ))}
                </div>
            </Container>
        </div>
      )}
    </>
    )
}



export default Home;