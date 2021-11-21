import './reset.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
