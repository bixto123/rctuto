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
import {ExampleHook} from "./components/ExampleHook";
*/

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
  <ExampleHook />
*/

import React from "react";
import {useState, useEffect, useRef} from 'react';
import "./css/Square.css";

function Square(props) {
  return (
    <div
     index={props.index}
     className="Square"
     style={{backgroundColor: props.color}}
     onClick={props.handleClick}
    />
  );
}

function Row(props) {
  let width = props.boardWidth;
  const elements = [];
  let square_key = 0;

  while(width--) {
    elements.push(
      <Square 
        key={square_key}
        index={props.index + square_key}
        color={props.color[square_key]}
        handleClick={props.handleClick}
      />
    );
    square_key++;
  }

  return (
    <div className="Row">
      {elements}
    </div>
  );
}

function Board(props) {
  const [color, setColor] = useState(
    [].concat(
      Array(props.boardWidth * (props.boardHeight - 1)).fill("skyblue"),
      Array(props.boardWidth).fill("orange")
    )
  );
  const [position, setPosition] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    ref.current.style.width = (props.boardWidth * 16).toString() + "px";
    ref.current.style.height = (props.boardHeight * 16).toString() + "px";
  }, [props.boardWidth], [props.boardHeight]);

  useEffect(() => {
    ref.current.focus();
  }, []);

  useEffect(() => {
    ref.current.style.left = position.toString() + "px";
  }, [position]);

  function handleKeyDown(event) {
    //console.log('User pressed: ', event.key);

    if(event.key === "ArrowLeft") {
      if(position < 0)
        setPosition(position + 1);
    }

    if(event.key === "ArrowRight") {
      if(position > -16 * (props.boardWidth - props.screenWidth))
        setPosition(position - 1);
    }
  }

  function handleClick(event) {
    const element = event.target;
    const colorIndex = parseInt(element.attributes.index.value);
    const colorCopy = color.slice(0);

    if(element.style.backgroundColor === "skyblue") {
      colorCopy[colorIndex] = "orange";
      setColor(colorCopy);
    }
    else {
      colorCopy[colorIndex] = "skyblue";
      setColor(colorCopy);
    }
  }
  
  let height = props.screenHeight;
  const elements = [];
  let row_key = 0;
  
  while(height--) {
    elements.push(
      <Row
        key={row_key}
        index={row_key * props.boardWidth}
        color={color.slice(row_key * props.boardWidth, row_key * props.boardWidth + props.boardWidth)}
        boardWidth={props.boardWidth}
        handleClick={handleClick}
      />
    );
    row_key++;
  }
  
  return (
    <div className="Board" ref={ref} tabIndex={0} onKeyDown={handleKeyDown}>
      {elements}
    </div>
  );
}

function Game() {
  return (
    <div className="Container">
      <Board
        screenWidth={10}
        screenHeight={10}
        boardWidth={100}
        boardHeight={10}
      />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;
