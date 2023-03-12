import {FaCrown} from 'react-icons/fa'
import SectionHead from './SectionHead'
import { services } from './data'
import { Link } from "react-router-dom";
import Card from './UI/Card';
import {AiFillCaretRight} from 'react-icons/ai'

const ServicesMain = () => {
  return (
    <section className="services">
        <div className="container services_container">
            <div className="services__head">
            <SectionHead icon={<FaCrown />} title="Services" />
                    
            </div>
            <div className='services_wrapper'>
            {
            services.map(({id, icon, title, info, path}) =>{
              return (
                <Card className="services_service" key={id}>
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <p>{info}</p>
                  <Link to={path} className="btn_sm">Learn More <AiFillCaretRight /></Link>
                </Card>
              )
            })
          }
            </div>
        </div>
    </section>
  )
}

export default ServicesMain