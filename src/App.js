
import './App.css';
import {React, useState} from 'react'
import Progress from './components/Progess';

function App() {
  const [settings, setSettings] = useState({
    'c1': 1,
    'c2':0,
    'c3':0,
    'h1':0,
    'h2':0,
  });

  const [state, setState] = useState(0);

  const handleNext = (e)=>{
    if(state === 0){
      setState(state + 1)
      setSettings({...settings, 'c2':1, 'h1':1 });
    }

    if(state === 1){
      setState(state + 1)
      setSettings({...settings, 'c3':1, 'h2':1 });
    }
  }


  const handlePrev = (e)=>{
    if(state === 2){
      setState(state - 1)
      setSettings({...settings, 'c3':0, 'h2':0 });
    }

    if(state === 1){
      setState(state - 1)
      setSettings({...settings, 'c2':0, 'h1':0 });
    }
  }

  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
        <Progress setting={settings}/>
        <div className='flex flex-row gap-2 items-center w-full justify-center mt-10'>
          <button className='p-4 text-white rounded-lg bg-blue-500 flex items-center justify-center' onClick={handlePrev}>Prev</button>
          <button className='p-4 text-white rounded-lg bg-blue-500 flex items-center justify-center' onClick={handleNext}>Next</button>
        </div>
    </div>
  );
}

export default App;
