import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Categoria from "./pages/Categoria";
import Produto from "./pages/Produto";

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>Menu do Site</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/categoria/esportes/4564">Esportes</Link>
            </li>
            <li>
              <Link to="/categoria/noticias/99885">Notícias</Link>
            </li>
            <li>
              <Link to="/categoria/viagem/123">viagem</Link>
            </li>
            <li>
              <Link to="/Produto?p=9988585">Produto</Link>
            </li>
            <li>
              <Link to="/kljçlkj">Vai dar erro/PT se clicar aqui</Link>
            </li>

            <li>
              <Link to="/quem-somos">Quem Somos - [redirecionamento]</Link>
            </li>
          </ul>
        </nav>
      </header>
      <hr />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/sobre">
          <Sobre />
        </Route>

        <Route path="/quem-somos">
          <Redirect to="/sobre"></Redirect>
        </Route>

        <Route path="/categoria/:cat/:id">
          <Categoria />
        </Route>

        <Route path="/produto">
          <Produto />
        </Route>

        <Route path="*">
          <h1>404 - Page not Found!!!</h1>
        </Route>
      </Switch>

      <hr />
      <footer>Todos os Direitos Reservados</footer>
    </BrowserRouter>
  );
}

export default App;
