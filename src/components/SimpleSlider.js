import React, {useRef} from 'react'
import Slider from "react-slick";
import "./slick.css"; 
import "./slick-theme.css";
import fence from "../images/fence1.jpg"
import fence2 from "../images/fence2.jpg"
import fence3 from "../images/fence3.jpg"
import fence4 from "../images/fence4.jpg"
import house from "../images/house.jpg"
import house1 from "../images/house1.jpg"
import house2 from "../images/house2.jpg"
import interior1 from "../images/interior_edmonds.jpg"
import interior2 from "../images/interior_kenmore.jpg"
import interior3 from "../images/interior_ls.jpg"
import interior4 from "../images/Interior_seattle.jpg"
import "./slider.css"

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: ".slick-next", background: "red" }}
      onClick={onClick}
    />
  );
}
// display: "block"


const SimpleSlider = () => {


    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow className=".slick-next"/>,
        autoplay: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true, 
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
      

  return (
    <div>
         <button className=''> View Project Gallery</button>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
            <img src={fence} className='slider-image'></img>
          </div>
          <div>
            <h3>2</h3>
            <img src={house} className='slider-image'></img>
          </div>
          <div>
            <h3>3</h3>
            <img src={fence3} className='slider-image'></img>
          </div>
          <div>
            <h3>4</h3>
            <img src={fence4} className='slider-image'></img>
          </div>
          <div>
            <h3>5</h3>
            <img src={house1} className='slider-image'></img>
          </div>
          <div>
            <h3>6</h3>
            <img src={fence2} className='slider-image'></img>
          </div>
          <div>
            <h3>7</h3>
            <img src={house2} className='slider-image'></img>
          </div>
          <div>
            <h3>8</h3> 
            <img src={interior1} className='slider-image'></img>
          </div>
          <div>
            <h3>9</h3>
            <img src={interior2} className='slider-image'></img>
          </div>
          <div>
            <h3>10</h3>
            <img src={interior3} className='slider-image'></img>
          </div>
          <div>
            <h3>11</h3>
            <img src={interior4} className='slider-image'></img>
          </div>
        
        </Slider>
    </div>
  )
}

export default SimpleSlider