import React from "react";

class WhoAmI extends React.Component {
  render() {
    return (
      <div>
        <h1>Felipe Mendes</h1>
        <p>Eu sou apenas um rapaz latino-americano, sem dinheiro no bolso, sem parentes importantes e vindo do interior.</p>
        <div className="aboutCntainer">
        <h2>Minhas Habilidades</h2>
        <ul className="aboutList">
          <li>Habilidade 01</li>
          <li>Habilidade 02</li>
          <li>Habilidade 03</li>
          <li>Habilidade 04</li>
          <li>Habilidade 05</li>
        </ul>
      </div>
      </div>
    )
  }
}

export default WhoAmI;