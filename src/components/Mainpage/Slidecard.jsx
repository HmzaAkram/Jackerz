import { useNavigate } from "react-router-dom";
import shoppingData from "./shoppingData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Slidecard = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Redirect the user to the collections page
    navigate("/collection"); // Replace '/collection' with the actual path if needed
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <Slider {...settings}>
        {shoppingData.map((value, index) => {
          return (
            <div className="box d_flex top" key={index}>
              <div className="left">
                <h1>{value.title}</h1>
                <p>{value.desc}</p>
                <button
                  onClick={handleButtonClick}
                  className="btn-primary"
                  aria-label={`Visit ${value.title} Collections`}
                >
                  Visit Collections
                </button>
              </div>
              <div className="right">
                <img
                  src={value.cover}
                  alt={`${value.title} slider`}
                  loading="lazy" /* Optimizing image loading */
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default Slidecard;
