import './App.css';
import Home from './component/Home';
import Details from './component/Details'
import Form from './component/Form'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Update from './component/Update';
function App() {
  return (<>
    <BrowserRouter>
      <Home/>
      <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/details/updateRecord/:id' element={<Update />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
