// react 'ın çalışmaya başladığı dosya
// iki tane modül ekliyoruz.

import React from "react";
import myDom from "react-dom";

// jSX javascript extention

const arr1 = ["teknology", "books"];
const arr2 = ["C#", "javascript", "angular"];
const arr3 = ["chess", "javascript", "angular"];
const arr4 = [
  "istanbul",
  "ankara",
  "bartın",
  "çanakkale",
  "zonguldak",
  "tokat",
];

function App1() {
  return (
    <div>
      <ul>
        {
        arr1.map((i) => (
          <li>
            <h1>
              <a href=""> {i}</a>
            </h1>
          </li>
        ))
        }
      </ul>
    </div>
  );
}

function App2() {
  return (
    <div>
      {arr2.map((i) => (
        <h1>{i}</h1>
      ))}
    </div>
  );
}

function App3() {
  return (
    <div>
      <select className="form-select">
        {arr3.map((i) => (
          <option>{i}</option>
        ))}
      </select>
    </div>
  );
}
function App4() {
  return (
    <div>
      <ul>
        {arr4.map((i) => (
          <li>
            <a href="">{i}</a>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
myDom.render(
  <App1 />,

  document.getElementById("root1")
  //document.querySelector('#root2')
);
myDom.render(
  <App2 />,

  document.getElementById("root2")
  //document.querySelector('#root2')
);
myDom.render(
  <App3 />,

  document.getElementById("root3")
  //document.querySelector('#root2')
);

myDom.render(
  <App4 />,

  document.getElementById("root4")
  //document.querySelector('#root2')
);
