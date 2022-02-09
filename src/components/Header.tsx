import "../styles/Header.scss";

export function Header() {
  return (
    <div className="header">
      <ul>
        <li><a>Início</a></li>
        <li><a>Sobre</a></li>
        <li><a>Trabalhos</a></li>
        <li><a>Contato</a></li>
      </ul>

      <div>
        <h2>Logo</h2>
      </div>

      <div className="buttons">
        <button>Entrar</button>
        <button>Contratar serviços</button>
      </div>
    </div>
  );
}