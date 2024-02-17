import './App.css'
import { Outlet } from "react-router-dom";
import NavBar from './components/NavBar';
import MyFoter from './components/MyFoter';

function App() {

  return (
    <>
      <NavBar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <MyFoter />
    </>
  )
}

export default App
