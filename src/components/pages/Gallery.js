import Header from "../Header";
import fence1 from "../../images/fence1.jpg";
import "../gallery.css";

export default function Gallery() {
  const galleryLength = 4;
  const houseLength = 2;
  const images = [];

  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/fence${i}.jpg`));
  }

  for (let i = 1; i <= houseLength; i++) {
    images.push(require(`../../images/house${i}.jpg`));
  }


  return (
    <>
      <Header title="Gallery" image={fence1}>
        Lorem ipsum dolor sit amet. Est libero quis nam odit laborum sit quia
        itaque sit veniam quibusdam aut dicta vitae et exercitationem esse.
      </Header>

      <section className="gallery">
        <div className="container gallery_container">
          {
            images.map((image,index) => {
              return <article key={index}>
                <img src={image} alt={`Gallery Image ${index + 1}`} />
              </article>
            })
          }
        </div>
      </section>
    </>
  );
}
