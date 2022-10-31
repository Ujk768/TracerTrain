
import './App.css';
import Graphs from './pages/Graphs';
import Items from './pages/Items';
import Needs from './pages/Needs';
import Home from './pages/Home';
import NavBar from './components/NavBar';
function App() {
  let compo
  switch(window.location.pathname){
    
    case "/":
      compo=<Home/>
      break
    case "/items":
      compo= <Items/>
      break
    case "/table":
      compo=<Graphs/>
      break
    case "/needs":
      compo=<Needs/>
      break      
  }
  return (
    <div className="App">
   
    <NavBar/> 
    {compo}
    </div>
  );
}

export default App;
