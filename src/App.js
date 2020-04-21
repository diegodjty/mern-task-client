import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/auth/Login';
import NewAccount from './components/auth/NewAccount';
import Projects from './components/projects/Projects';
import ProjecState from './context/projects/projectState'
import TaskState from './context/task/taskState';
import AlertState from './context/alerts/alertState'
import AuthState from './context/auth/authState';
import tokenAuth from './components/config/token';
import PrivateRoute from './components/routes/privateRoute';


// Check if there is a token
const token = localStorage.getItem('token')
if(token){
  tokenAuth(token);
}
function App() {

  return (
    <ProjecState>
      <TaskState>
        <AlertState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/new-account" component={NewAccount} />
                <PrivateRoute exact path="/projects" component={Projects} />
              </Switch>
            </Router>
          </AuthState>
        </AlertState>
      </TaskState>
    </ProjecState>
  );
}

export default App;
