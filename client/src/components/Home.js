import React, { Component } from 'react';
import './homeDesign.css'
import axios from 'axios'
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            phone: '',
            dateOfBirth: '',
            subjectName: '',
            student: ''
        }
    }

    changeHandler = (event)=> {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    stdsubmitHandler = (e)=> {
        e.preventDefault();

        const stdInfo = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            dateOfBirth: this.state.dateOfBirth
        }
        console.log(stdInfo)
        axios.post('http://localhost:5000/api/students', stdInfo)
            .then( () => alert('Info added'))
            .catch( (err) => alert('Please try again'))

        
    }

    subsubmitHandler = (e)=> {
        e.preventDefault();

        const subInfo = {
            name: this.state.subjectName,
            student: this.state.student
        }
console.log(subInfo)
        axios.post('http://localhost:5000/api/subjects', subInfo)
            .then( () => alert('Info added'))
            .catch( (err) => alert('Please try again'))

    }

    render() {
        return (
            <div>               
                <form onSubmit={this.stdsubmitHandler} className="form-design">
                    <h3>Add student info</h3>
                    <div className="form-group">
                        <input
                            onChange={this.changeHandler}
                            type="text"
                            className="form-control my-1 shadow-none"
                            placeholder="Enter your name"
                            value={this.state.name}
                            name="name"
                            required
                        />
                        <input type="email"
                            value={this.state.email}
                            onChange={this.changeHandler}
                            name="email"
                            className="form-control my-1 shadow-none"
                            placeholder="Enter your email"
                            required
                        />
                        <input type="text"
                            value={this.state.phone}
                            onChange={this.changeHandler}
                            name="phone"
                            className="form-control my-1 shadow-none"
                            placeholder="Enter your phone no."
                            required
                        />
                        <input type="text"
                            value={this.state.dateOfBirth}
                            onChange={this.changeHandler}
                            name="dateOfBirth"
                            className="form-control my-1 shadow-none"
                            placeholder="Enter your birth date."
                            required
                        />
                        
                        <button type="submit" className="btn btn-info my-3 ">Add</button>

                        <Link to="/allstudent">
                            <button className="btn btn-success mx-3">Show a list of students</button>
                        </Link>                
                    </div>  
                </form>

                <form onSubmit={this.subsubmitHandler} className="form-design">
                    <h3>Add subject info</h3>
                    <div className="form-group">
                        <input
                            onChange={this.changeHandler}
                            type="text"
                            className="form-control my-1 shadow-none"
                            placeholder="Enter your subject name"
                            value={this.state.subjectName}
                            name="subjectName"
                            required
                        />
                        <input type="text"
                            value={this.state.student}
                            onChange={this.changeHandler}
                            name="student"
                            className="form-control my-1 shadow-none"
                            placeholder="Enter your name"
                            required
                        />
                        
                        <button type="submit" className="btn btn-info my-3">Add</button>
                        <Link to="/allsubject">
                            <button className="btn btn-success mx-3">Show a list of subjects</button>
                        </Link>
                    </div>                    
                </form>
                
            </div>
        );
    }
}

export default Home;