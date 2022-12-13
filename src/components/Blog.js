import React from "react";

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <Post key={post.id} id={post.id} title={post.title} content={post.content} />
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

function Post(props) {
  return (
    <div id={props.id}>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}

export {Blog};