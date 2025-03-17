import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PropsDisplayer from "./PropsDisplayer";
import City from "./City";
import Pet from "./Pet";
import Greeting from "./Greeting";
function ExampleComponent() {
  return (
    <div className="ExampleComponent componentBox">
      <h1>My Example Component</h1>
      <p>My first React component!</p>
    </div>
  );
}
function App() {
  const [count, setCount] = useState(0);
  const spiderman = {
    name: "Spiderman",
    alterEgo: "Peter Parker",
    catchPhrase: "With great power comes great responsibility",
  };
  function Welcome(props) {
    // custom Welcome component
    return (
      <div className="Welcome">
        {/* if the 'name' prop exists, render it on the screen */}
        <h3>Welcome {props.name}!</h3>
        {/* if this component has children, render them here */}
        {props.children}
      </div>
    );
  }

  const spideyJSX = (
    <div>
      <h3>{spiderman.name}</h3>
      <blockquote>{spiderman.catchPhrase}</blockquote>
      <cite>{spiderman.alterEgo}</cite>
    </div>
  );
  const invalidJSX = (
    <>
      <p>paragraph 1</p>
      <p>paragraph 2</p>;
    </>
  );
  // JSX expressions must have one parent element
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Welcome name="Mark">
        <p>Children of Welcome</p>
        <PropsDisplayer />
        <PropsDisplayer myProp="first prop" />

        {/* Renders the component with multiple props - add your own! */}
        <PropsDisplayer prop1="first" prop2="second" prop3={3} />
      </Welcome>
      <ExampleComponent />
      <City name="Sydney" />
      <Pet name="HAHA" />
      {/* LAB EXERCISE 1 */}
      <Greeting name="Mark"></Greeting>
      <Greeting></Greeting>

      {/* country is not specified, will use default */}
      <City name="Melbourne" state="VIC" />

      {/* all values are specified, won't use defaults */}
      <City name="Chicago" state="Illinois" country="USA" />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="spiderman">{spideyJSX}</div>
      <div className="invalid-jsx">{invalidJSX}</div>
    </>
  );
}

export default App;
