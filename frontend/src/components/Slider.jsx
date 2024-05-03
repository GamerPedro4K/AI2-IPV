import Carousel from 'react-bootstrap/Carousel';


const Slider = (props) => {
    const { items } = props;
    return (
        <Carousel >
            {items.map((item, index) => (
                <Carousel.Item key={index} >
                    <img
                        className="d-block slider-img-home"
                        src={item.foto === 'https://source.unsplash.com/random/2000x1000?sig=1' ? 'https://images.unsplash.com/photo-1705301766257-c0f31029fcc5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxNDY5NjY0NQ&ixlib=rb-4.0.3&q=80&w=2000' : item.foto }
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


