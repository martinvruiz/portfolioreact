import {Home} from './pages/Home.jsx'
import {NavBar} from './components/NavBar.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Projects } from './pages/Projects.jsx';
import { Contact } from './pages/Contact.jsx';

function App() {
  return <div className=' min-h-screen bg-black text-white'>
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
