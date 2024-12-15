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
        <Route path='/CRUD-operations-on-React-App' element={<Form/>}/>
        <Route path='/CRUD-operations-on-React-App/details' element={<Details/>}/>
        <Route path='/CRUD-operations-on-React-App/details/updateRecord/:id' element={<Update />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
