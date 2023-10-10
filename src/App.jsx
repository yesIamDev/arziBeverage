
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Brand from './components/brand/Brand'
import Values from './components/values/Values'
import Arzi from './components/arzi/Arzi'
import Team from './components/Team/Team'

function App() {
  return (
    <div>
        <Navbar/>
        <Brand/>
        <Values/>
        <Arzi/>
        <Team/>
        <Footer/>
    </div>
  )
}

export default App
