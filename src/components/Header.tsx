import { HiOutlineSearch } from "react-icons/hi";

import "../styles/Component.Header.scss";

export function Header() {
  return (
    <div className="header">
      <nav>
        <ul>
          <li><a>iPhone</a></li>
          <li><a>Samsung</a></li>
          <li><a>Xiaomi</a></li>
          <li><a>Motorola</a></li>
          <li><a>LG</a></li>
          <li><a><HiOutlineSearch style={{ marginTop: "5px" }} size={15} /></a></li>
        </ul>
      </nav>
    </div>
  );
}