import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Joke from "./components/Jokes";


function App() {
  return (
    <div>
      <Joke
        punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
        isPun={true}
      />
      <Joke
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
        isPun={false}
        upvotes={10}
        downvotes={2}
        comments={[{author: "", body: "", title: ""}]}
      />
      <Joke
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
        isPun={true}
      />
      <Joke
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy."
        isPun={true}
      />
      <Joke
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm."
        isPun={true}
      />
      <Joke
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
        isPun={false}
      />
    </div>
  );
}

export default App;
