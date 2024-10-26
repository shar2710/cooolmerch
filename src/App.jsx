import canvas from './canvas'
import customizer from './pages/customizer'
import home from './pages/home'
function App() {
  return (
    <main classname="app transition-all ease-in">
      <home/>
      <canvas/> 
      <customizer/>
    </main>
    
  )
}

export default App
