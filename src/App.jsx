import { useEffect } from "react";
import { gsap } from "gsap";
import "./App.css";
import "leaflet/dist/leaflet.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Slider from "./Components/Slider";
import Card from "./Components/Card";
import Menu from "./Components/Menu";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
import MapComponent from "./Components/Map/MapComponent";
import DonationComponent from "./Components/DonationComponent/DonationComponent";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const tips = [
    {
      title: "Recicle Eletrônicos",
      content:
        "Não descarte seus aparelhos eletrônicos no lixo comum. Procure pontos de coleta para reciclagem de componentes eletrônicos.",
    },
    {
      title: "Reutilize Componentes",
      content:
        "Antes de jogar um eletrônico fora, considere reutilizar suas peças em novos projetos. Pode ser mais sustentável e útil.",
    },
    {
      title: "Reduza o Lixo Eletrônico",
      content:
        "Evite acumular aparelhos eletrônicos que não são mais necessários. Venda, doe ou recicle para reduzir o desperdício.",
    },
  ];

  useEffect(() => {
    console.clear();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
        markers: false,
      },
    });

    timeline
      .to("img", {
        scale: 2,
        z: 350,
        transformOrigin: "center center",
        ease: "power1.inOut",
      })
      .to(
        ".section.hero",
        {
          scale: 1.1,
          transformOrigin: "center center",
          ease: "power1.inOut",
        },
        "<"
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="wrapper">
      <Menu />
      <div className="content">
        <section className="section hero"></section>
        <Slider className="section"></Slider>
        <MapComponent />
        <section className="section section2 gradient-purple">
          <div className="cards-container">
            {tips.map((tip, index) => (
              <Card key={index} title={tip.title} content={tip.content} />
            ))}
          </div>
        </section>
      </div>
      <div className="image-container">
        <img
          src="https://assets-global.website-files.com/63ec206c5542613e2e5aa784/643312a6bc4ac122fc4e3afa_main%20home.webp"
          alt="image"
        />
      </div>
      <DonationComponent />
      
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
