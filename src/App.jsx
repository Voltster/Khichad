import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ResultSection from './components/ResultSection'
import Team from './components/Team'
import StorySection from './components/StorySection'
import WhyKhichad from './components/WhyKhichad'

function App() {

  return (
    <div className='w-[100vw] h-screen overflow-x-hidden'>
    <Navbar/>
    <Home/>
    <ResultSection/>
    <Team/>
    <StorySection/>
    <WhyKhichad/>
    </div>
  )
}

export default App
