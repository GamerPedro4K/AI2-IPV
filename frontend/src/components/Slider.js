import Carousel from 'react-bootstrap/Carousel';


const Slider = (props) => {
    const { items } = props;
    return (
        <Carousel >
            {items.map((item, index) => (
                <Carousel.Item key={index} >
                    <img
                        className="d-block slider-img-home"
                        src={item.foto}
                        alt={item.titulo}
                    />
                    <Carousel.Caption>
                        <h3>{item.titulo}</h3>
                        <p>{item.descricao}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default Slider;
