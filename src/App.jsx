import { useState } from 'react'
import './App.css'
import Tarjeta from './components/Tarjeta';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen bg-gray-100 grid justify-center items-center p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-blue-800 mb-8">Usuario</h1>

        <div className="grid grid-cols-1 gap-8">
          <Tarjeta 
            nombre="Gabriel Muñoz"
            profesion="Desarrollador Frontend"
            imagen="Richard prime.jpg"      
          />
        </div>
        
      </div>
    </div>
  );
}

export default App;
