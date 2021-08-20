import React, { Component } from "react";
import add from "./assets/add.svg";
import remove from "./assets/remove.svg";

import "./index.css";

class App extends Component {
  state = {
    caradd: [],
    carro: [
      {
        id: 0,
        nome: "Jetta",
        montadora: "Volkswagen",
        preço: 144000,
        tipo: "sedan"
      },
      {
        id: 1,
        nome: "Polo",
        montadora: "Volkswagen",
        preço: 70000,
        tipo: "Hatch"
      },
      {
        id: 2,
        nome: "T-Cross",
        montadora: "Volkswagen",
        preço: 123000,
        tipo: "SUV"
      },
      {
        id: 3,
        nome: "Tiguan R-line",
        montadora: "Volkswagen",
        preço: 146000,
        tipo: "SUV"
      },
      {
        id: 4,
        nome: "Civic",
        montadora: "Honda",
        preço: 115000,
        tipo: "Sedan"
      },
      {
        id: 5,
        nome: "Corolla",
        montadora: "Toyota",
        preço: 184000,
        tipo: "Sedan"
      },
      {
        id: 6,
        nome: "Corolla Cross",
        montadora: "Toyota",
        preço: 123000,
        tipo: "SUV"
      },
      {
        id: 7,
        nome: "Compass",
        montadora: "Jeep",
        preço: 132000,
        tipo: "SUV"
      },
      {
        id: 8,
        nome: "Golf G TI",
        montadora: "Volkswagen",
        preço: 138000,
        tipo: "Hatch"
      }
    ]
  };

  Add = (id) => {
    const adc = this.state.carro.find((item) => item.id === id);
    this.setState({
      caradd: this.state.caradd.concat(adc)
    });
  };

  Delete = (id) => {
    this.setState({
      caradd: this.state.caradd.filter((item) => item.id !== id)
    });
  };

  DeleteAll = () => {
    this.setState({
      caradd: []
    });
  };

  render() {
    return (
      <div>
        <div className="box-title">
          <h1 className="Title">Loja de carros!</h1>
        </div>
        <section className="container">
          <div className="card">
            {this.state.carro.map((item, index) => (
              <div key={index}>
                <div className="box-top">
                  <h2>Carro:{item.nome}</h2>
                  <button
                    onClick={() => {
                      this.Add(item.id);
                    }}
                  >
                    <img src={add} alt="botão de adicionar" />
                  </button>
                </div>
                <div className="box-bottom">
                  <h2>Montadora:{item.montadora}</h2>
                  <h2>Preço:{item.preço}</h2>
                  <h2>Tipo:{item.tipo}</h2>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="list">
              {this.state.caradd.map((item) => (
                <div className="card-list">
                  <div className="card-list-top">
                    {item.nome}
                    <button
                      onClick={() => {
                        this.Delete(item.id);
                      }}
                    >
                      <img src={remove} alt="botão de adicionar" />
                    </button>
                  </div>
                  <div className="card-list-bottom">
                    <p>Tipo:{item.tipo}</p>
                    <p>Preço:{item.preço}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div>
          <div className="pricefinal">
            <h2>Total</h2>
            <button onClick={this.DeleteAll}>Limpar tudo</button>
            <h2>
              {this.state.caradd
                .reduce((a, b) => a + b.preço, 0)
                .toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL"
                })}
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
