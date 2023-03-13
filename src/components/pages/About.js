import Header from "../Header"
import house1 from "../../images/house1.jpg"
import image from "../../images/working_dan.jpg"
import '../about.css';

export default function About() {
  return (
    <>
    <Header title="About Us" image={house1}>
    Lorem ipsum dolor sit amet. Est libero quis nam odit laborum sit quia itaque sit veniam quibusdam aut dicta vitae et exercitationem esse.
    </Header>

    <section className="about_story">
      <div className="container about_story-container">
        <div className="about_section-image">
          <img src={image} alt="about pic"></img>

        </div>
        <div className="about_section-content">
          <h1>Our Story</h1>
          <p>Lorem ipsum dolor sit amet. Est libero quis nam odit laborum sit quia itaque sit veniam quibusdam aut dicta vitae et exercitationem esse.
          Lorem ipsum dolor sit amet. Est libero quis nam odit laborum sit quia itaque sit veniam quibusdam aut dicta vitae et exercitationem esse.
          Lorem ipsum dolor sit amet. Est libero quis nam odit laborum sit quia itaque sit veniam quibusdam aut dicta vitae et exercitationem esse.
          </p>
        </div>
      </div>
    </section>
    
    </>
  )
}

