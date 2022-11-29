
import './App.css';
import Main from './Components/Main';
import Details from './Components/Details';
import {Routes, Route} from 'react-router-dom';




function App() {
  return (
    <div >
      
      
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/details' element={<Details/>}/>
      </Routes>
    </div>
  );
}


export default App;
