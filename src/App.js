import {Home} from './pages/Home.jsx'
import {NavBar} from './components/NavBar.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Proyects } from './pages/Proyects.jsx';
import { Contact } from './pages/Contact.jsx';

function App() {
  return <div className=' min-h-screen bg-gradient-to-r from-blue-800 to-orange-400'>
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/proyects' element={<Proyects/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
