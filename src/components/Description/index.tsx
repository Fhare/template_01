import { IoPhonePortraitOutline } from "react-icons/io5";
import { CgSmartphoneChip } from "react-icons/cg";
import { MdSdStorage } from "react-icons/md";
import { BsBatteryFull, BsCameraVideo } from "react-icons/bs";

import iphone from "../../assets/iphone.png";
import samsung from "../../assets/samsung.png";
import xiaomi from "../../assets/xiaomi.png";

import "./styles.scss";

export function Description() {
  return (
    <section className="description">
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
              <CgSmartphoneChip size={30} />
              <span>Chip A15 Bionic</span>
            </div>

            <div>
              <BsBatteryFull size={30} />
              <span>4352 mAh</span>
            </div>

            <div>
              <IoPhonePortraitOutline size={30} />
              <span>
                6,7 pol. <br />
                Tela Super Retina XDR com ProMotion
              </span>
            </div>

            <div>
              <BsCameraVideo size={30} />
              <span>
                Telephoto, Wide, <br />
                e Ultra Wide cameras
              </span>
            </div>

            <div>
              <MdSdStorage size={30} />
              <span>128gb</span>
            </div>
          </td>
          <td>
            <h2>Samsung galaxy S21 ultra</h2>

            <div>
              <CgSmartphoneChip size={30} />
              <span>Snapdragon 888</span>
            </div>

            <div>
              <BsBatteryFull size={30} />
              <span>4000 mAh</span>
            </div>

            <div>
              <IoPhonePortraitOutline size={30} />
              <span>
                158.4mm (6.2" retângulo cheio) <br />
                154.6mm (6.1" cantos arredondados)
              </span>
            </div>

            <div>
              <BsCameraVideo size={30} />
              <span>
                Telephoto, Wide, <br />
                e Ultra Wide cameras
              </span>
            </div>

            <div>
              <MdSdStorage size={30} />
              <span>128gb</span>
            </div>
          </td>
          <td>
            <h2>Xiaomi MI 11</h2>

            <div>
              <CgSmartphoneChip size={30} />
              <span>Qualcomm Kryo 680</span>
            </div>

            <div>
              <BsBatteryFull size={30} />
              <span>4600 mAh</span>
            </div>

            <div>
              <IoPhonePortraitOutline size={30} />
              <span>
                WQHD+ 6.81" AMOLED DotDisplay <br />
                3200x1440, 515 ppi <br />
                Aspect ratio: 20:9
              </span>
            </div>

            <div>
              <BsCameraVideo size={30} />
              <span>
                Telephoto, Wide, <br />
                e Ultra Wide cameras
              </span>
            </div>

            <div>
              <MdSdStorage size={30} />
              <span>128gb</span>
            </div>
          </td>
        </tr>
      </tbody>

    </section>
  );
}