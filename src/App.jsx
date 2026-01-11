import './App.css'
import Controlled from './Components/Controlled/Controlled';
import FormData from './Components/FormData/FormData';
import Uncontroll from './Components/UnControlled/Uncontroll';

function App() {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.name.value);
  //   console.log(e.target.email.value);
  // }
  return (
    <>
      <h1>Vite + React</h1>
      {/* <form onSubmit={handleSubmit}>
        <input type="text" name='name' placeholder='enter name' />
        <br />
        <br />
        <input type="email" name='email' placeholder='enter email' />
        <br />
        <br />
        <input type="submit" value="submit" />
      </form> */}

        {/* <FormData></FormData> */}

        {/* <Controlled></Controlled> */}
        <Uncontroll></Uncontroll>

    </>
  )
}

export default App
