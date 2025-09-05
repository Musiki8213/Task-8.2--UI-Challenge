import './App.css'
import {Navbar} from "./assets/Components/Navbar/Navbar";
import {SecondSection} from "./assets/Components/SecondSection/SecondSection";
import { ThirdSection } from './assets/Components/ThirdSection/ThirdSection';       
import {FourthSection} from "./assets/Components/FourthSection/FourthSection";  
import {Footer} from "./assets/Components/Footer/Footer";

function App() {
  return (
    <div className="App">
  < Navbar/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <Footer/> 
    </div>
  )
}

export default App