import Image from "../images/dan_working.jpg";
import SectionHead from "./SectionHead";
import { GiCutDiamond } from "react-icons/gi";
import Card from "./UI/Card";
import { values } from "./data";

const Values = () => {
  return (
    <section className="values">
      <div className="container values__container">
        <div className="values_left">
          <div className="values_image">
            <img src={Image} alt="Values Image" />
          </div>
        </div>
        <div className="values_right">
          <SectionHead icon={<GiCutDiamond />} title="Why Choose Us?" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet,
            lectus id lacinia ornare, massa lorem condimentum enim, eu
            fringilla.
          </p>
          <div className="values__wrapper">
            {
                values.map(({id,icon, title, description}) => {
                    return <Card className="values_value" key={id}>
                        <span>{icon}</span>
                        <h4>{title}</h4>
                        <small>{description}</small>
                    </Card>
                })
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
