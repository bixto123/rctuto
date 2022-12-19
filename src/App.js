import React from "react";
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

import {useState} from 'react';
import "./css/Square.css";

function Square(props) {
  return <div className="Square" style={{backgroundColor: props.color}} />;
}

function Row(props) {
  let number = 20;
  const elements = [];
  while(number--)
    elements.push(<Square color={props.color} />);
  return (
    <div className="Row">
      {elements}
    </div>
  );
}

function Board() {
  let number = 9;
  const elements = [];
  while(number--)
    elements.push(<Row color="skyblue" />);
  return (
    <div className="Board">
      {elements}
      <Row color="brown" />
    </div>
  );
}

function Example() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>
        Cliquez ici
      </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <div className="Container">
        <Board />
      </div>
      <Example />
    </div>
  );
}

export default App;
