import logo from './logo.svg';
import './App.css';
import Register from './components/SignUp/Register';
import LogIn from './components/SignUp/LogIn'
import { Route, BrowserRouter as Router, Routes, Switch } from 'react-router-dom';
import ListCompany from './components/Company/ListCompany';
import ListLand from './components/Land/ListLand';
import ListPartner from './components/Partner/ListPartner';
import AddCompany from './components/Company/AddCompany';
import UpdateCompany from './components/Company/UpdateCompany';
import AddLand from './components/Land/AddLand';
import AddPartner from './components/Partner/AddPartner';



function App() {
  return (
    <Router>
    <Routes> 
      <Route path='/' element={<LogIn />} />     
      <Route path='/signUp' element={<Register />} />
      <Route path='/company' element={<ListCompany />} />
      <Route path='/addcompany' element={<AddCompany/>} />
      <Route path='/updatecompany/id' element={<UpdateCompany />} />
      <Route path='/land' element={<ListLand />} />
      <Route path='/addland' element={<AddLand />} />
      <Route path='/partner' element={<ListPartner />} />
      <Route path='/addpartner' element={<AddPartner />} />

      </Routes>
   </Router>
  );                                                                                             
}

export default App;
