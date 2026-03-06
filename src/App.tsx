import './App.css'
import {Navbar} from "./Components/Navbar/Navbar";
import {SecondSection} from "./Components/SecondSection/SecondSection";
import { ThirdSection } from './Components/ThirdSection/ThirdSection';       
import {FourthSection} from "./Components/FourthSection/FourthSection";  
import {Footer} from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <Footer/> 
    </div>
  )
}

export default App