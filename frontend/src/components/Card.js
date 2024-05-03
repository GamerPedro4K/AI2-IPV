import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const CardC = (props) => {
    const card = props.data;
    return (
        <>
        <Card style={{ maxWidth: '300px'}}>
          <Card.Img variant="top" src={card.foto} />
          <Card.Body>
            <Card.Title>{card.titulo}</Card.Title>
            <Card.Text>
              {card.descricao}
            </Card.Text>
            <Button variant="primary">Ver mais</Button>
          </Card.Body>
        </Card>
        </>
    )
}
   
export default CardC;