import React from 'react';
import Card from 'react-bootstrap/Card';
import TruncateText from '../pipes/TruncateText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CardC = (props) => {
  const deleteCard = () =>{
    Swal.fire({
      title: "Tens a certeza?",
      text: "Não vais conseguir reverter isto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, apagar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        
        props.deleteCard(card.id);
      }
    });
  };

  
    const card = props.data;
    return (
      <Card className='w-100 h-100'>
        <div className='d-flex justify-content-end'>
          <div className='rounded-circle m-2' style={{backgroundColor: '#bd0000', zIndex: 10}} onClick={deleteCard}>
            <div style={{width: '30px', height: '30px'}} className='d-flex justify-content-center align-items-center'>
              <FontAwesomeIcon icon="fa-solid fa-xmark" size='xl' color='white'/>
            </div>
          </div>
        </div>
       
        <img src={card.foto} style={{ marginTop: '-46px', height: 180, width: 'auto' }} className="card-img-top" alt="..."></img>
        <Card.Body>
          <Card.Title>{card.titulo}</Card.Title>
          <Card.Text>
            <TruncateText texto={card.descricao} comprimentoMaximo={250} />
          </Card.Text>
          <div className='row mb-3 position-absolute w-100' style={{bottom: 0}}>
            <div className='col-6 m-auto'>
              <h5>{card.GeneroDescricao}</h5>
            </div>
            <div className='col-6 d-flex justify-content-end' style={{paddingRight: '18px'}} >
              <Link to={"/edit"} state={{card}} style={{ textDecoration: 'none' }}>
                <button className='btn btn-secondary d-auto' style={{borderRadius: '25px', height:'40px', width: '40px'}}>
                  <FontAwesomeIcon icon="fa-solid fa-pen" color='white' />
                </button>
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    )
}
   
export default CardC;