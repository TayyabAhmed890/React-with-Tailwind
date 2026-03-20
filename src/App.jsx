import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import tailwindLogo from './assets/tailwind.png'
import copyIcon from './assets/copy.png'
import Button from './components/Button'

function App() {

  const textRef = useRef(null);
  const [copy,setCopy] = useState(false)

  const handleCopy = ()=>{
    const text = textRef.current.innerText;
    navigator.clipboard.writeText(text);

    setCopy(true);
    setTimeout(() => {
      setCopy(false)
    }, 2000);
  }

  return (
    <>
    <div className='flex justify-center items-center flex-col h-screen text-2xl gap-5 bg-gray-900 text-white relative'>
    <h1 className='font-bold text-5xl text-indigo-300 text-center mb-5'>Rtail</h1>
      <div className='flex justify-center items-center gap-4'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo h-16" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react h-16" alt="React logo" />
        </a>
        <a href="https://tailwindcss.com" target="_blank">
          <img src={tailwindLogo} className="logo tailwind h-12 " alt="Tailwind logo"/>
        </a>
      </div>
      <h1>Vite + React + Tailwind</h1>
      <div className='border px-3 py-4 rounded-md flex justify-center items-center gap-4'>
      <h1 ref={textRef} className='text-xl'>npx create-rtail-app</h1>
      <img onClick={handleCopy} className='h-6 invert cursor-pointer active:scale-75' src={copyIcon} alt="copy" />
      </div>
      {copy && <h1 className="text-sm rounded-md text-black font-medium absolute bottom-1 p-3 bg-indigo-300">Copied!</h1>}
        <h1 className='text-sm'>./components/Button.jsx</h1>
      <div className='flex gap-2 flex-wrap items-center justify-center'>
      <Button name='Button 1' bg="bg-indigo-700"/>
      <Button name='Button 2' bg="bg-cyan-700"/>
      <Button name='Button 3' bg="bg-amber-700"/>
      </div>
      </div>
    </>
  )
}

export default App
