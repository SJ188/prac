import './App.css'; //import Home from './components/Home'; 
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'; 
import Home from './Components/Home';
import About from './Components/About';
import Counter from './Components/Counter';
import Users from './Components/Users'; 

function App() {
  return( 
    <div>
    <Router> 
    <Routes>
<Route path="/" element ={<Home/>}/> 
<Route path="/about" element ={<About/>}/>
<Route path="Users" element ={<Users/>}/> 
<Route path="/Counter" element ={<Counter/>}/> 
</Routes> </Router> </div> );
} 
export default App;
