import { Fragment } from "react";

import { Header } from "../../components/Header";
import { Description } from "../../components/Description";
import { Hero } from "../../components/Hero";
import { WayToBuy } from "../../components/WayToBuy";

import "./styles.scss";

export function Home() {
  return (
    <Fragment>
      <Header />

      <main>
        <Hero />
        <Description />
      </main>
      
      <WayToBuy />
    </Fragment>
  );
}