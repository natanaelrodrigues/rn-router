import "./App.css";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Avatar from "./components/Avatar";
import AvatarComStyleSheet from "./components/AvatarComStyleSheet";
import BemVindo from "./components/BemVindo";
import SearchBox from "./components/SearchBox";
import Modal from "./components/Modal";

/*
class AppClass extends react.Component{
  render(){
    return <h1>Testando novo App</h1>
  }

}

function AppSimple(){
  return <h1>Testando App Sumple!!! aqui é Sax.</h1>
}


let AppVar = () => {
  return <h1>Testando Componente em Var</h1>
}
*/

//let AppSimpleVar = () => <h1>Simple Var!!!</h1>

const Input = styled.input`
  width: 400px;
  height: 30px;
  font-size: 16px;
  padding: 10px;
  border: 1px solid $000;
  margin-top: 20px;
`;

const Title = styled.h1`
  color: #ff0000;
  font-size: 18px;
`;

const Site = styled.div`
  width: 550px;
  height: 750px;
  background-color: #00ff00;
`;

const Botao = styled.button`
  font-size: 19px;
  margin-top: 20px;
  padding: 10px 15px;
  background-color: ${(props) => props.color || "#00FFE0"};
`;

const ButaoH = styled.button`
  font-size: 19px;
  padding: 10px;
  border: 3px solid #FF0000;
  color: #FF00000
  background-color: #FFF;
  margin:5px;
  border-radius: 5px;
`;

// Usando Herança de um componente
const BotaoPequeno = styled(ButaoH)`
  font-size: 16px;
  padding: 5px 10px;
`;

function App() {
  const [texto, setTexto] = useState("");
  const handleInput = (e) => {
    setTexto(e.target.value);
  };
  const [cont, setCont] = useState(0);

  const botaoAction = (e) => {
    setCont(cont + 1);
  };

  const [contador, setContador] = useState(0);
  const [searchText, setSearchText] = useState("");
  // armazenamento da lista de tarefas
  const [list, setList] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);

  const handleModalClick = () => {
    setModalVisible(!modalVisible);
  };

  //carga inicial
  useEffect(() => {
    setList([
      { id: 1, title: "Comprar Bolo", done: false },
      { id: 2, title: "Comprar Refrigerante", done: false },
      { id: 3, title: "Comprar Salgadinhos", done: false },
      { id: 4, title: "Lista de convidados", done: false },
      { id: 50, title: "Ler Receitas", done: true },
      { id: 6, title: "Ler Livros", done: false },
    ]);
  }, []);

  useEffect(() => {
    if (contador === 0) {
      document.title = "Começando a brincadeira";
    } else {
      document.title = `Contador para ${contador}`;
    }
  }, [contador]);

  const aumentarAction = () => {
    setContador(contador + 1);
  };

  function handleSearchInput(novoTexto) {
    setSearchText(novoTexto);
  }

  function addAction(newItem) {
    let maxId = Math.max.apply(
      Math,
      list.map(function (item) {
        return item.id;
      })
    );
    let newList = [...list, { id: maxId + 1, title: newItem, done: false }];

    setList(newList);
  }

  function handleToggleDone(id) {
    let newList = [...list];
    // se fosse pelo indice do array seria
    // newList[index].done = !newList[index].done;

    //localizo o indice do array pelo id do item selecionado
    let i = newList.indexOf(newList.filter((item) => item.id === id)[0], 0);
    newList[i].done = !newList[i].done;
    setList(newList);
  }

  return (
    <Site>
      <Title>Titulo do site </Title>
      <h1>Contagem do nosso contador: {contador}</h1>
      <button onClick={aumentarAction}>Aumentar número do contador</button>
      <hr />
      <BemVindo nome="Natanael" />
      <BemVindo nome="Jose" />
      <BemVindo nome="João" />
      <BemVindo nome="Jonas" />
      <hr />
      <Avatar url="https://www.google.com.br/google.jpg" name="Google Group" />
      <AvatarComStyleSheet
        url="https://www.google.com.br/google.jpg"
        name="Google Group"
      />
      <hr />
      <Botao color="#FF0000">Clique aqui</Botao>
      <Botao color="#0000FF">Clique aqui</Botao>
      <Botao>Clique aqui</Botao>
      <Input type="text" value={texto} onChange={handleInput} />
      {texto.length > 0 && (
        <p>
          {texto.length} caractere{texto.length !== 1 ? "s" : ""}...
        </p>
      )}
      <hr />
      <ButaoH> Vamos clicar aqui? </ButaoH>
      <hr />
      <div>{cont} vezes</div>
      <BotaoPequeno onClick={botaoAction}>Clique para aumentar</BotaoPequeno>
      <hr />
      <button onClick={handleModalClick}>Abrir um modal</button>
      <Modal visible={modalVisible} setVisible={setModalVisible}>
        <h1>Testando a abertura do Modal</h1>
      </Modal>
      <hr />
      <h1>Lista de Tarefas</h1>
      <SearchBox frasePadrao="Adicionar um item..." onEnter={addAction} />
      <br />
      <p>Recebendo o texto digitado no campo acima.</p>
      <SearchBox frasePadrao={searchText} />
      <hr />
      Texto procurado: {searchText}
      <br />
      <ul>
        {list.map((item, index) => (
          <li key={item.id} onClick={() => handleToggleDone(item.id)}>
            {item.done && <del>{item.title}</del>}
            {!item.done && item.title}
          </li>
        ))}
      </ul>
    </Site>
  );
}

export default App;
