import { RiArrowDropRightLine } from "react-icons/ri";

import heroIMG from "../../assets/heroIMG.png";

import "./styles.scss";

export function Hero() {
  return (
    <section className="hero">
      <span>Nome do negócio</span>

      <h1>
        Só aqui você encontra os <br />
        melhores celulares.
      </h1>

      <div>
        <button>Comprar</button>
        <a>
          Ler mais
          <RiArrowDropRightLine size={18} />
        </a>
      </div>

      <img src={heroIMG} alt="hero phone image" />
    </section>
  );
}