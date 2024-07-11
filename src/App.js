import socketIO from 'socket.io-client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Chat from './components/Chat'
import './App.css'



const socket = socketIO.connect('http://localhost:3001');

function App() {
  return (
    <BrowserRouter>
    <div >
      <Routes>
        <Route path="/" element={<Home socket={socket}/>}/>
        <Route path='/chat' element= {<Chat socket={socket}/>}/> 
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;




