import React from 'react'
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Routing from './routes/routes';

function App() {
  return (
    <div className="App">
<Navbar/>
<Routing/>
    </div>
  );
}

export default App;
