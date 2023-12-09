import React from 'react'
import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/Header';
import FooterComponent from './components/Footer';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

	function App() {
  	return (

  <div>

  <HeaderComponent/>



  <Router>

<div className="container">
  <Routes>
      <Route exact path="/" Component={ListEmployeeComponent}></Route>
      <Route path="/employees" Component={ListEmployeeComponent}></Route>
      <Route path="/add-employee" element={<CreateEmployeeComponent/>}></Route>
      <Route path="/update-employee/:id" element={<UpdateEmployeeComponent/>}></Route>
  </Routes>	
</div>

</Router>

<FooterComponent/>



</div>
);
}
	export default App;