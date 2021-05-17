import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
function Person(props){
  return(
    <div className="person">
  <h1>{props.name}</h1>
  <p>Your age :{props.age}</p>
</div>
  );
}

ReactDOM.render(<Person name="Ashish" age ="32"/> ,document.querySelector("#p1"))

ReactDOM.render(<Person name="Sai" age ="132"/> ,document.querySelector("#p2"))