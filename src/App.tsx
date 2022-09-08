import { Route, Routes, BrowserRouter } from 'react-router-dom';
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


import Teacher from './pages/admin/teachers';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="dashboard/*" element={<MasterDashboardTemplate>
               <Routes>
                  <Route path="*" element={<p>not found</p>} />
                  <Route path="announcements" element={<Announcemnts />} />
                  <Route path="assignments" element={<Assignments />} />
                  <Route path="quiz" element={<Quiz />}/>
                  <Route path="subjects" element={<Subjects />} />
                  <Route path="students/edit" element={<EditStudent />} />
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
