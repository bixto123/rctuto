import React from "react";

function List(props) {
  const listItems = props.items.map((item, index) =>
    <ListItem key={index.toString()} value={item} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

function ListItem(props) {
  return (
    <li>
      {props.value}
    </li>
  );
}

export {List};