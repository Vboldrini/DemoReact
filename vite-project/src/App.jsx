import './App.css'
import DemoProps from './components/demoProps'
import Todo from './components/todo';

const App = () => {
  const firstname = 'John';
  const lastname = 'Doe';
  const age = 45;
  
  return (
    <>
      <Todo/>

      <DemoProps firstname={firstname} lastname={lastname} age={age} />
    </>
  )
}

export default App
