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

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );  
}

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Bienvenue
      </h1>
      <p className="Dialog-message">
        Merci de visiter notre vaisseau spatial !
      </p>
    </FancyBorder>
  );
}

function App() {
  return (
    <div>
      {/*
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
      */}
      <WelcomeDialog />
    </div>
  );
}

export default App;
