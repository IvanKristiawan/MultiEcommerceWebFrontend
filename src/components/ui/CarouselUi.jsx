import Carousel from "react-bootstrap/Carousel";
import CarouselIcon from "../../icons/uiIcon/CarouselIcon.svg";

function CarouselUi() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={CarouselIcon} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={CarouselIcon} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={CarouselIcon} alt="First slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselUi;
