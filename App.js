// import logo from './logo.svg';
import './App.css';
import ChildComp from './components/ChildComp';



function App() {
  const age = 30;
  const nums = [1,2,3,4]
  return (
    <div className="App">
    <ChildComp age={age} nums={nums}/>
    </div>
  );
}

export default App;
