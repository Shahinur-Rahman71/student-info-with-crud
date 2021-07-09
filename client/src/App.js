import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import StudentList from './components/students/allStudents';
import EditStudent from './components/students/editStudent';
import SubjectList from './components/subjects/allSubjects';
import EditSubject from './components/subjects/editSubjects';

function App() {
  return (
    <div className="App">
      <Router>       
          <div>
            {/* routing part */}
            <Switch>
               <Route path="/" exact component={Home}/>
               <Route path="/allstudent" component={StudentList}/>
               <Route path="/editstudent/:id" component={EditStudent}/>
               <Route path="/allsubject" component={SubjectList}/> 
              <Route path="/editsubject/:id" component={EditSubject}/>
            </Switch>
          </div>
      </Router>
    </div>
  );
}

export default App;
