import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import Events from './Frontend/Components/Admin/Events';
import Users from './Frontend/Components/Admin/Users';
import ProjectAllocation from './Frontend/Components/Admin/ProjectAllocation';
import 'font-awesome/css/font-awesome.min.css';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Sidebar/Navigation */}
        <div className="sidebar">
          <nav>
            <ul>
              <li>
                <Link to="/admin/events">Events</Link>
              </li>
              <li>
                <Link to="/admin/users">Users</Link>
              </li>
              <li>
                <Link to="/admin/project-allocation">Project Allocation</Link>
              </li>
              <li>
                <Link to="/logout">
                  <i className="fa fa-sign-out"></i> Logout
                </Link> 
              </li>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <Routes>
            <Route path="/admin/events" element={<Events />} />
            <Route path="/admin/users" element={<Users />} />
            {/* <Route path="/admin/projects" element={<Projects />} /> */}
            <Route path="/admin/project-allocation" element={<ProjectAllocation />} />
            <Route path="/" element={<Navigate to="/admin/events" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;



