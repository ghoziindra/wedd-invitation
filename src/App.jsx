import { useState } from 'react'
import Gambar from '../src/pict/FIKUNIMED.jpeg'
import Gambar1 from '../src/components/jajal'
import Gambar2 from '../src/components/jajal2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <img className='object-center' src={Gambar} />
      <div>
      <Gambar1 />
      <Gambar2 />
      </div>
      
    </div>
  )
}

export default App
