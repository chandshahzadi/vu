import { Route, Routes, BrowserRouter } from 'react-router-dom';
import React from 'react';

// import logo from './logo.svg';
import './assets/css/style.css';
import Login from './pages/login';
import MasterDashboardTemplate from './pages/MasterDashboardTemplate';
import Students from './pages/admin/students';
import Subjects from './pages/admin/subjects';
import EditStudent from "./pages/admin/students/editStudent";


import Teacher from './pages/admin/teachers';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="dashboard/*" element={<MasterDashboardTemplate>
               <Routes>
                  <Route path="subjects" element={<Subjects />} />
                  <Route path="editStudent" element={<EditStudent />} />
                  <Route path="students" element={<Students />} />
                  <Route path="teachers" element={<Teacher />} />
                </Routes>
              </MasterDashboardTemplate>
            }>
              
          </Route>   
          <Route path={"login"} element={<Login />} />
        </Routes>
    </BrowserRouter>
  );
}
export default App;
