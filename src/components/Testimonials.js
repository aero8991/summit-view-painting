import { useState } from "react";
import Card from "./UI/Card";
import { ImQuotesLeft } from "react-icons/im";
import SectionHead from "./SectionHead";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { testimonials } from "./data";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const { name, quote, job, avatar } = testimonials[index];

  const prevTestomonialHandler = () => {
    setIndex(prev => prev - 1)
    if ( index <= 0){
        setIndex(testimonials.length - 1)
    }
  };

  const nextTestomonialHandler = () => {
    setIndex(prev => prev + 1)

    if (index >= testimonials.length - 1) {
        setIndex(0)
    }
  };
  return (
    <section className="testimonials">
      <div className="container testimonials__container">
        <SectionHead icon={<ImQuotesLeft />} title="Testimonals" className="testimonials__head" />
        <Card className="testimonial">
          <div className="testimonal_avatar">
            {/* <img src={avatar} alt={name} /> */}
          </div>
          <p className="testimonial_quotes">
            {`"${quote}"`}
            <h5>{name}</h5>
            <small className="testimonial_title">{job}</small>
          </p>
        </Card>
        <div className="testimonals_btn-container">
          <button className="testimonials_btn" onClick={prevTestomonialHandler}>
            <IoIosArrowDropleftCircle />
          </button>
          <button className="testimonials_btn" onClick={nextTestomonialHandler}>
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
