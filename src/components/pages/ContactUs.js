import Header from "../Header"
import house2 from "../../images/house2.jpg"
import '../contact.css';

export default function ContactUs() {
  return (
    <>
    <Header title="Contact Us" image={house2}>
    Lorem ipsum dolor sit amet. Est libero quis nam odit laborum sit quia itaque sit veniam quibusdam aut dicta vitae et exercitationem esse.
    </Header>
    <section className="contact">
      <div className="container contact_container">
        <div className="contact_wrapper">
          Add form here :)
        </div>
      </div>

    </section>
    </>
  )
}

