import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/auth/Login';
import NewAccount from './components/auth/NewAccount';
import Projects from './components/projects/Projects';
import ProjecState from './context/projects/projectState'
import TaskState from './context/task/taskState';



function App() {
  return (
    <ProjecState>
      <TaskState>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/new-account" component={NewAccount} />
            <Route exact path="/projects" component={Projects} />
          </Switch>
        </Router>
        </TaskState>
    </ProjecState>
  );
}

export default App;
