import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TruncateText from '../pipes/TruncateText';

const CardC = (props) => {
    const card = props.data;
    return (
        <>
        <Card className='w-100 h-100'>
          <Card.Img variant="top" src={card.foto} height={180}  />
          <Card.Body>
            <Card.Title>{card.titulo}</Card.Title>
            <Card.Text>
              <TruncateText texto={card.descricao} comprimentoMaximo={250} />
            </Card.Text>
            <Button variant="primary">Ver mais</Button> 
          </Card.Body>
        </Card>
        </>
    )
}
   
export default CardC;