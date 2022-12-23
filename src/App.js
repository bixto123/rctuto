import React, { useState } from "react";
/*
import {Clock} from "./components/Clock";
import {Toggle} from "./components/Toggle";
import {LoginControl} from "./components/LoginControl";
import {Page} from "./components/Page";
import {Mailbox} from "./components/Mailbox";
import {List} from "./components/List";
import {Blog} from "./components/Blog";
import {NameForm} from "./components/NameForm";
import {EssayForm} from "./components/EssayForm";
import {FlavorForm} from "./components/FlavorForm";
import {Reservation} from "./components/Reservation";
import {Calculator} from "./components/Calculator";
import {SplitPane} from "./components/SplitPane";
import "./css/SplitPane.css";
import {SignUpDialog} from "./components/SignUpDialog";
import "./css/components/SignUpDialog.css";
*/
import {ExampleHook} from "./components/ExampleHook";

/*
function Contacts() {
  return <div className="Contacts" />;
}

function Chat() {
  return <div className="Chat" />;
}
*/

/*
const messages = [
  'React',
  'Re: React',
  'Re:Re: React'
];
const strings = [
  'Pomme',
  'Poire',
  'Bannane',
  'Orange',
  'Pamplemousse'
];
const numbers = [1, 2, 3, 4, 5];
const posts = [
  {id: 1, title: 'Bonjour, monde', content: 'Bienvenue sur la doc de React !'},
  {id: 2, title: 'Installation', content: 'Vous pouvez installer React depuis npm.'}
];
*/

/*
  <Clock />
  <Toggle />
  <LoginControl />
  <Page />
  <Mailbox unreadMessages={messages} />
  <List items={strings} />
  <List items={numbers} />
  <Blog posts={posts} />
  <NameForm />
  <EssayForm />
  <FlavorForm />
  <Reservation />
  <Calculator />
  <SplitPane left={<Contacts />} right={<Chat />} />
  <SignUpDialog />  
*/

import {useEffect, useRef} from 'react';
import "./css/Square.css";

function Square(props) {
  return <div className="Square" style={{backgroundColor: props.color}} onClick={props.handleClick} />;
}

function Row(props) {
  let width = 20;
  const elements = [];
  let square_key = 0;

  while(width--)
    elements.push(<Square key={square_key++} color={props.color[square_key]} handleClick={props.handleClick} />);

  return (
    <div className="Row">
      {elements}
    </div>
  );
}

function Board() {
  const [color, setColor] = useState([].concat(Array(180).fill("skyblue"), Array(20).fill("orange")));

  const ref = useRef(null);
  
  useEffect(() => {
    ref.current.focus();
  }, []);

  let position = 0;

  function handleKeyDown(event) {
    const board = document.querySelector(".Board");

    //console.log('User pressed: ', event.key);

    if(event.key === "ArrowLeft") {
      if(position < 0)
        position++;
      board.style.left = position.toString() + "px";
    }

    if(event.key === "ArrowRight") {
      if(position > -160)
        position--;
      board.style.left = position.toString() + "px";
    }
  }

  function handleClick(event) {
    const element = event.target;

    if(element.style.backgroundColor == "skyblue")
      element.style.backgroundColor = "orange";
    else
      element.style.backgroundColor = "skyblue";
  }
  
  let height = 10;
  const elements = [];
  let row_key = 0;
  
  while(height--) {
    elements.push(<Row key={row_key} color={color.slice(row_key * 20, row_key * 20 + 20)} handleClick={handleClick} />);
    row_key++;
  }
  
  return (
    <div className="Board" ref={ref} tabIndex={-1} onKeyDown={handleKeyDown}>
      {elements}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Board />
      </div>
      <ExampleHook />
    </div>
  );
}

export default App;
