import Carousel from 'react-bootstrap/Carousel';
import acrilicos from '../../assets/acrilicos.jpg';
import formitas from '../../assets/formitas.jpg';
import vintage from '../../assets/vintage.jpg';
import './CarouselIntro.css';

function CarouselIntro() {
  return (
    <div className='contenedorCarousel'>
      <Carousel fade className='carousel' indicators={false} controls={false}>
        <Carousel.Item >
          <img
            className="d-block w-100"
            src={acrilicos}
            alt="Acrilicos"
          />
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100"
            src={vintage}
            alt="vintage"
          />

        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100"
            src={formitas}
            alt="formitas"
          />

        </Carousel.Item>
      </Carousel>

      <Carousel fade className='carousel' indicators={false} controls={false}>
        <Carousel.Item >
          <img
            className="d-block w-100"
            src={formitas}
            alt="formitas"
          />
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100"
            src={acrilicos}
            alt="acrilicos"
          />

        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100"
            src={vintage}
            alt="vintage"
          />

        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselIntro;