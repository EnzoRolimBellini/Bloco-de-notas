import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import ArrayNotas from "./dados/Notas.js";
import Categorias from "./dados/categorias.js";
import "./assets/App.css";
import "./assets/index.css";
class App extends Component {
  
  
  constructor() {
    super();
     this.notas = new ArrayNotas();
     this.categorias = new Categorias();   
  }

  

  

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.categorias.categorias}
          criarNota={this.notas.adicionarNota}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            adicionarCategoria={this.categorias.adicionarCategoria}
            categorias={this.categorias.categorias}
          />
          <ListaDeNotas
            apagarNota={this.notas.apagarNota}
            notas = {this.notas.notas}
            
          />
        </main>
      </section>
    );
  }
}

//new ListaDeNotas({notas:this.notas})
export default App;
