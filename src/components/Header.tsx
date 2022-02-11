import "../styles/Component.Header.scss";

export function Header() {
  return (
    <div className="header">
      <ul>
        <li><a>Início</a></li>
        <li><a>Produtos</a></li>
        <li><a>Clientes</a></li>
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