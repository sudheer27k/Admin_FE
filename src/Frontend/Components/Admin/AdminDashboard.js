import React from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

const AdminDashboard = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <nav>
        <ul>
          <li>
            <Link to="/admin/events">Events</Link>
          </li>
          <li>
            <Link to="/admin/users">Users</Link>
          </li>
          <li>
            <Link to="/admin/projects">Projects</Link>
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
  );
};

export default AdminDashboard;

