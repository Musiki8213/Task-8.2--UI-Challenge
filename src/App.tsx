import './App.css'
import {Navbar} from "./assets/Components/Navbar/Navbar";
import {SecondSection} from "./assets/Components/SecondSection/SecondSection";
import { ThirdSection } from './assets/Components/ThirdSection/ThirdSection';       
import {FourthSection} from "./assets/Components/FourthSection/FourthSection";  
import {Footer} from "./assets/Components/Footer/Footer";
import Sidebar from './assets/Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
  < Navbar/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <Footer/> 
      <Sidebar isOpen={false} onClose={() => {}} />
    </div>
  )
}

export default App