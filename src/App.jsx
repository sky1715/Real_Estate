import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import "./App.css"
import Companies from "./components/Companies/Companies.jsx";
import Residencies from "./components/Residencies/Residencies.jsx";
import Value from "./components/Value/Value.jsx";
import Contact from "./components/Contact/Contact.jsx";
import GetStarted from "./components/GetStarted/GetStarted.jsx";
import Footer from "./components/Footer/Footer.jsx";
function App(){
  return(
   <div className="App">
    <div >
      <div className="white-gradient"/>
    <Header></Header>
    <Hero></Hero>
    </div>
    <Companies></Companies>
     <Residencies></Residencies>
     <Value></Value>
     <Contact></Contact>
     <GetStarted></GetStarted>
     <Footer></Footer>
   </div>
  );
}

export default App;