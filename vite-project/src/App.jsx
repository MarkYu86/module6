import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PropsDisplayer from "./PropsDisplayer";
import City from "./City";
import Pet from "./Pet";
import Greeting from "./Greeting";
import FullName from "./FullName";
import { ComplexComment } from "./ComplexComment";
import Callout from "./CallOut";
import MoviesList from "./MoviestList";
import Bigcats from "./BigCats";
import MoodChanger from "./MoodChanger";
import Smile from "./Emoji";
import { BirthdayTranslator } from "./BirthdayTranslator";
import  Weather  from "./Weather";
import LoginForm from "./LoginForm";
import ExplodingBomb from "./ExpladingBomb";
import Calculator from "./Calculator";

function App() {
  const [count, setCount] = useState(0);

  const comment = {
    author: { name: "John Doe" },
    text: "This is a complex comment!",
    date: new Date(),
  };
  const comment1 = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "https://placekitten.com/g/64/64",
    },
  };

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
      <Calculator/>
      <ExplodingBomb/>
      <LoginForm/>
      <Weather />
      <Smile />
      <MoodChanger />
      <Bigcats />
      <MoviesList />
      <Callout
        title="Nested React Component"
        message="Simple message with a fancy box applied via composition"
      >
        <FullName first="Elon" last="Musk" />
      </Callout>
      {/* Passing props to ComplexComment */}
      <ComplexComment
        author={comment.author}
        text={comment.text}
        date={comment.date}
      />
      <ComplexComment
        author={comment1.author}
        date={comment1.date}
        text={comment1.text}
      />
      <PropsDisplayer />
      <BirthdayTranslator />
      {/* Other components */}
      <Greeting name="Mark" />
      <Greeting />
      <FullName />
      <FullName first="Kendrick" last="Lamar" />
      <FullName first="Kendrick" middle="Middle" last="Lamar" />
      <City name="Melbourne" state="VIC" />
      <Pet name="HAHA" />
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
    </>
  );
}

export default App;
