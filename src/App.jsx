import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Navigation from './pages/navigation/Navigation'
import SignIn from './pages/sign-in/SignIn'

function App() {

  const Shop = () => {
    return (
      <div>
        I am a Shop
      </div>
    )
  }

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/sign-in' element={<SignIn/>} />
      </Route>
    </Routes>
  )
}

export default App
