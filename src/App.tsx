import React from 'react';
// import logo from './logo.svg';
import './assets/css/style.css';
import Login from './pages/login';
import MasterDashboardTemplate from './pages/MasterDashboardTemplate';
import AdminTemplate from './pages/admin/template';
import Home from './pages/home';
import Students from './pages/admin/students';
import Subjects from './pages/admin/subjects';
import Quiz from './pages/admin/quiz';
import Assignments from './pages/admin/assignments';
import Announcemnts from './pages/admin/announcements';
import EditStudent from "./pages/admin/students/editStudent";



import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Teacher from './pages/admin/teachers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/dashboard">
            <MasterDashboardTemplate>
                <Route path="/dashboard/admin">
                  <AdminTemplate>
                    <Route path="/dashboard/admin/announcements" element={Announcemnts} />
                      <Route path="/dashboard/admin/assignments" element={Assignments} />
                      <Route path="/dashboard/admin/quiz" element={Quiz}/>
                      <Route path="/dashboard/admin/subjects" element={Subjects} />
                      <Route path="/dashboard/admin/students/edit" element={EditStudent} />
                      <Route path="/dashboard/admin/students" element={Students} />
                      <Route path="/dashboard/admin/teachers" element={Teacher} />
                  </AdminTemplate>
                  </Route>
                <Route path="/dashboard" element={Home}/>
            </MasterDashboardTemplate>
        </Route>   
        <Route path={"/login"} element={Login} />
        </Routes>
      </BrowserRouter>
  );
}
export default App;
