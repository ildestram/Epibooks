/* import Carousel from 'react-bootstrap/Carousel';
import { carouselItems } from '../data/carouselData';

function Hero() {
    return (
        <Carousel>
            {
                carouselItems.map((item) => {
                    return (
                        <Carousel.Item key={item.id}>
                            <img
                                className="d-block w-100"
                                src= {item.image}
                                alt={item.title}
                            />
                            <Carousel.Caption>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })
            }

        </Carousel>
    );
}

export default Hero; */