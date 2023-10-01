import './App.css';
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Clinical from './pages/clinical/Clinical';
import Patients from "./pages/patients/Patients";
import HumanResources from "./pages/hr/HumanResources";
import Compliance from "./pages/compliance/Compliance";
import Billing from "./pages/billing/Billing";
import Reports from "./pages/reports/Reports";
import Appointments from './pages/clinical/Appointments';
import Tasks from './pages/clinical/Tasks';


function App() {
  return (
    <Router>
    <div className="App">
     <Header/>
    
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/patients" element={<Patients/>}/>
        <Route path="/hr" element={<HumanResources/>}/>
        <Route path="/clinical" element={<Clinical/>}>
          <Route path="appointments" element={<Appointments/>} />
          <Route path="" element={<Tasks/>} />
        </Route>
        <Route path="/compliance" element={<Compliance/>}/>
        <Route path="/billing" element={<Billing/>}/>
        <Route path="/reports" element={<Reports/>}/>
      </Routes>
    
    </div>
    </Router>
  );
}

export default App;
