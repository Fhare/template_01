import { Fragment } from "react";

import { Header } from "../components/Header";

import heroIMG from "../assets/heroIMG.png";

import "../styles/Page.Home.scss";

export function Home() {
  return (
    <Fragment>
      <Header />

      <main>
        <section>
          <span>Template</span>

          <h1>
            Só aqui você encontra <br />
            o melhor do celular.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id venenatis eros,
            sit amet molestie lacus. Vivamus dictum condimentum augue in pellentesque. Proin massa mauris,
            ultricies id interdum id, iaculis tincidunt magna. Duis pretium eget sapien in lobortis. Morbi
          </p>

          <button>Comprar</button>
        </section>

        <img src={heroIMG} alt="hero phone image" />
      </main>
    </Fragment>
  );
}