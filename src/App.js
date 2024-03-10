import data from "./helper/data"
import "./scss/App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Main data={data} />
    </div>
  );
}

export default App;
