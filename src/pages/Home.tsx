import { Fragment } from "react";

import { Header } from "../components/Header";

import { RiArrowDropRightLine } from "react-icons/ri";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CgSmartphoneChip } from "react-icons/cg";
import { MdSdStorage } from "react-icons/md";
import { BsBatteryFull, BsCameraVideo } from "react-icons/bs";

import heroIMG from "../assets/heroIMG.png";
import iphone from "../assets/iphone.png";
import samsung from "../assets/samsung.png";
import xiaomi from "../assets/xiaomi.png";

import "../styles/Page.Home.scss";

export function Home() {
  return (
    <Fragment>
      <Header />

      <main>
        <section className="hero-section">
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

        <section className="description-section">
          <h1>Qual o melhor celular para você?</h1>

          <thead>
            <tr>
              <td><img src={iphone} alt="phone image" /></td>
              <td><img src={samsung} alt="phone image" /></td>
              <td><img src={xiaomi} alt="phone image" /></td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <h2>iPhone 13 pro Max</h2>

                <div>
                  <CgSmartphoneChip size={40} />
                  <span>Chip A15 Bionic</span>
                </div>

                <div>
                  <BsBatteryFull size={40} />
                  <span>4352 mAh</span>
                </div>

                <div>
                  <IoPhonePortraitOutline size={40} />
                  <span>
                    6,7 pol. <br />
                    Tela Super Retina XDR com ProMotion
                  </span>
                </div>

                <div>
                  <BsCameraVideo size={40} />
                  <span>
                    Telephoto, Wide, <br />
                    e Ultra Wide cameras
                  </span>
                </div>

                <div>
                  <MdSdStorage size={40} />
                  <span>128gb</span>
                </div>
              </td>
              <td>
                <h2>Samsung galaxy S21 ultra</h2>

                <div>
                  <CgSmartphoneChip size={40} />
                  <span>Snapdragon 888</span>
                </div>

                <div>
                  <BsBatteryFull size={40} />
                  <span>4000 mAh</span>
                </div>

                <div>
                  <IoPhonePortraitOutline size={40} />
                  <span>
                    158.4mm (6.2" retângulo cheio) <br />
                    154.6mm (6.1" cantos arredondados)
                  </span>
                </div>

                <div>
                  <BsCameraVideo size={40} />
                  <span>
                    Telephoto, Wide, <br />
                    e Ultra Wide cameras
                  </span>
                </div>

                <div>
                  <MdSdStorage size={40} />
                  <span>128gb</span>
                </div>
              </td>
              <td>
                <h2>Xiaomi MI 11</h2>

                <div>
                  <CgSmartphoneChip size={40} />
                  <span>Qualcomm Kryo 680</span>
                </div>

                <div>
                  <BsBatteryFull size={40} />
                  <span>4600 mAh</span>
                </div>

                <div>
                  <IoPhonePortraitOutline size={40} />
                  <span>
                    WQHD+ 6.81" AMOLED DotDisplay <br />
                    3200x1440, 515 ppi <br />
                    Aspect ratio: 20:9
                  </span>
                </div>

                <div>
                  <BsCameraVideo size={40} />
                  <span>
                    Telephoto, Wide, <br />
                    e Ultra Wide cameras
                  </span>
                </div>

                <div>
                  <MdSdStorage size={40} />
                  <span>128gb</span>
                </div>
              </td>
            </tr>
          </tbody>
        </section>
      </main>
    </Fragment>
  );
}