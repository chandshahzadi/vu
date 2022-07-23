import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import MasterDashboardTemplate from './pages/MasterDashboardTemplate';
import AdminTemplate from './pages/admin/template';
import Home from './pages/home';
import Students from './pages/admin/students';
import Subjects from './pages/admin/subjects';
import Quiz from './pages/admin/quiz';
import Assignments from './pages/admin/assignments';
import Announcemnts from './pages/admin/announcements';
import  EditStudent from "./pages/admin/students/editStudent";


import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Teacher from './pages/admin/teachers';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <MasterDashboardTemplate>
              <Switch>
                <Route path="/dashboard/admin">
                  <AdminTemplate>
                    <Switch>
                      <Route path="/dashboard/admin/announcements" component={Announcemnts }/>
                      <Route path="/dashboard/admin/assignments" component={Assignments} />
                      <Route path="/dashboard/admin/quiz" component={Quiz}/>
                      <Route path="/dashboard/admin/subjects" component={Subjects} />
                      <Route path="/dashboard/admin/students/edit/:id" component={EditStudent} />
                      <Route path="/dashboard/admin/students" component={Students} />
                      <Route path="/dashboard/admin/teachers" component={Teacher} />
                    </Switch>
                  </AdminTemplate>
                  </Route>
                <Route path="/dashboard" component={Home}/>
              </Switch>
            </MasterDashboardTemplate>
          </Route>          
          <Route path={"/login"} component={Login} />
        </Switch>
      </BrowserRouter>
  );
}
export default App;
