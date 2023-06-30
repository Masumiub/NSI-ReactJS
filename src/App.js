import logo from './logo.svg';
import './App.css';
import Home from "./Components/Home"
import Footer from "./Components/Footer"
import Data from './data.json'

function App() {
  console.log(Data[0].title);
  //send data to component functions using "props", to access recevied data, use props.title/ props.desc.
  //we can send / set data using for loop, for that we need a declare an array, then using for loop, we need to push them in that array, lastly, we need to call that array
  // we can also do it by using map
  //items = Data.map((item) => <Card titleText={item.title} descText={item.desc} >)
   
  return (
    <div className="App">
        <Home/>
        <Footer/>
    </div>
  );
}

export default App;
