import React from 'react';
import Card from 'react-bootstrap/Card';
import TruncateText from '../pipes/TruncateText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const CardC = (props) => {
    const card = props.data;
    return (
      <Card className='w-100 h-100'>
        <Card.Img variant="top" src={card.foto} style={{ height: 180, width: 'auto' }} />
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
              <Link to={'/edit'} style={{ textDecoration: 'none' }}>
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