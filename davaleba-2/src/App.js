import "./App.css";
import Counter from "./coomponents/Counter";

function App() {
  return <div className="App">
    <Counter stratValue={100} increase={15}/>
    <Counter stratValue={0} increase={5}/>
    <Counter stratValue={500} increase={-10}/>
    <Counter stratValue={0} increase={0}/>
  </div>;
}

export default App;
