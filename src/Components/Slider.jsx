import React, { useState, useEffect } from "react";
import "./Slider.css"; 

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      title: '"Reciclando o Futuro"',
      description:
        "A reciclagem de resíduos eletrônicos é uma das formas mais eficazes de reduzir a poluição e o desperdício de recursos naturais. Com o aumento do consumo de tecnologia, os aparelhos eletrônicos antigos acabam se acumulando e muitas vezes são descartados de forma inadequada. Reciclar esses materiais não apenas evita que metais pesados e substâncias tóxicas contaminem o solo e a água, mas também permite que matérias-primas valiosas sejam reutilizadas, economizando energia e recursos.",
      image:
        "https://www.eusemfronteiras.com.br/wp-content/uploads/2022/07/Valiphotos-de-Pixabay.jpg", // Imagem representando reciclagem
    },
    {
      title: '"Guardião da Floresta"',
      description:
        "As florestas, especialmente as tropicais, desempenham um papel crucial na regulação do clima global, no armazenamento de carbono e na preservação da biodiversidade. O desmatamento, seja por atividades ilegais ou pela expansão urbana, ameaça a vida de inúmeras espécies e contribui significativamente para o aquecimento global. Proteger as florestas é essencial para combater as mudanças climáticas e garantir um futuro sustentável para as próximas gerações. Ao apoiar iniciativas de preservação e replantio, podemos reverter o impacto do desmatamento.",
      image:
        "https://blog.cresol.com.br/wp-content/uploads/2024/09/floresta-amazonica.png", // Imagem da floresta amazônica
    },
    {
      title: '"Tecnologia e Meio Ambiente"',
      description:
        "O avanço da tecnologia tem sido fundamental para o nosso progresso, mas também tem gerado impactos negativos no meio ambiente. O lixo eletrônico é um dos maiores vilões nesse sentido, representando uma ameaça crescente à saúde humana e ao meio ambiente. Além de liberar substâncias tóxicas no solo e na água, o descarte inadequado de dispositivos tecnológicos contribui para a exploração de recursos naturais de forma descontrolada. Adotar práticas sustentáveis, como a reciclagem de aparelhos e a compra de produtos com menor impacto ambiental, é essencial para minimizar os danos ao nosso planeta.",
      image:
        "https://c.wallhere.com/photos/e6/7c/trees_holland_netherlands_bomen_ngc_nederland_september_npc-768470.jpg!d", // Imagem de árvores em uma área preservada
    },
    {
      title: '"Últimos Suspiros"',
      description:
        "O lixo radioativo é um dos maiores desafios ambientais do nosso tempo. Embora as tecnologias nucleares possam oferecer benefícios significativos, como na geração de energia, o descarte de resíduos radioativos é um problema complexo e perigoso. Esses resíduos podem permanecer tóxicos por milhares de anos, representando uma ameaça constante à vida humana e ao meio ambiente. O desenvolvimento de soluções seguras e eficazes para o armazenamento e tratamento desses resíduos é urgente. Devemos continuar a investigar novas tecnologias e práticas para garantir que o legado do lixo radioativo não prejudique as gerações futuras.",
      image:
        "https://cdn.shopify.com/s/files/1/0657/3100/2634/files/PapierpeintforetBrumemysterieuseparmidesconiferesennuancesdegris_170e540e-021c-4ef5-a223-b696b8751ed2.jpg?v=1714978505", // Imagem de uma floresta misteriosa
    },
    {
      title: '"Desafios Urbanos"',
      description:
        "Nas cidades, o lixo eletrônico se acumula a uma taxa alarmante. O rápido avanço da tecnologia resulta em um ciclo constante de obsolescência, fazendo com que dispositivos como celulares, computadores e televisores sejam descartados em grande quantidade. Esses aparelhos, se não reciclados corretamente, liberam substâncias químicas perigosas, como mercúrio e chumbo, que podem contaminar o meio ambiente. O combate a esse problema exige a criação de políticas públicas eficazes, incentivos à reciclagem e uma maior conscientização da população sobre os riscos do descarte inadequado.",
      image:
        "https://wallpapers.com/images/hd/mysterious-forest-trail-j0e81e8vdbl90vl0.jpg", // Imagem de um caminho misterioso, representando os desafios urbanos
    },
    {
      title: '"Rumo a um Mundo Verde"',
      description:
        "A migração para soluções mais verdes e sustentáveis é um passo essencial para garantir a sobrevivência do nosso planeta. O futuro está diretamente ligado à nossa capacidade de adotar práticas que respeitem os limites ecológicos e preservem os recursos naturais. Desde o incentivo ao uso de energias renováveis até a redução do consumo de produtos descartáveis, cada ação conta. O desenvolvimento de tecnologias mais limpas, a promoção de estilos de vida sustentáveis e a proteção de ecossistemas essenciais, como as florestas e oceanos, são fundamentais para o caminho que temos que trilhar em direção a um futuro mais verde e saudável.",
      image:
        "https://wallpapers.com/images/hd/aesthetic-green-background-husnw0sz5xcs4rpg.jpg", // Imagem representando um ambiente verde
    },
  ];

  // Função para avançar a imagem
  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  // Função para voltar a imagem
  const goPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(goNext, 3000); 

    return () => clearInterval(intervalId); // Limpeza do intervalo ao desmontar o componente
  }, []);

  return (
    <main>
      <ul className="slider">
        {items.map((item, index) => (
          <li
            key={index}
            className={`item ${index === currentIndex ? "active" : ""}`}
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          >
            <div className="container">
              <h2 className="title">{item.title}</h2>
              <p className="description">{item.description}</p>
              
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Slider;
