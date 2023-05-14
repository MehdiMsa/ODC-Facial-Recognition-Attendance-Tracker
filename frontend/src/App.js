import './App.css';
import React, {useState} from 'react';
import Sidebar from './global/sidebar';
import Dashboard from './Page/Dashboard';
import Landing from './Page/Dashboard/Landing'; // Import your Landing component
import ToolBar from './global/ToolBar';
import Backdrop from './global/Backdrop';
import Attendance from './Page/Dashboard/Attendance'; // Import your Attendance component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Page/Dashboard/Login';





function App() {
  const [sidebar, setSidebar] = useState(false);
  const [cohorts, setCohorts] = useState([]);

  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState)
  }

  return (
    <Router>
      <div>
        <ToolBar openSidebar={toggleSidebar} />
        

        <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar}/>
        <Sidebar sidebar={sidebar}/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/attendance" element={<Attendance />} />
      </Routes>

      </div>
    </Router>
  );
}

export default App;
