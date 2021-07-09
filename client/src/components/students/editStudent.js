import React, { Component } from 'react';
import '../homeDesign.css'
import axios from 'axios'
import { Link } from 'react-router-dom';

class EditStudent extends Component {
    constructor() {
        super();
        this.state = {
            name: '1',
            email: '',
            phone: '',
            dateOfBirth: ''
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/api/students/'+this.props.match.params.id)
            .then(result => {
                this.setState({
                    name: result.data.name,
                    email: result.data.email,
                    phone: result.data.phone,
                    dateOfBirth: result.data.dateOfBirth
                })
            })
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
        axios.post('http://localhost:5000/api/stdupdate/'+this.props.match.params.id, stdInfo)
            .then( () => alert('Update Info'))
            .catch( (err) => alert('Please try again'))

    }

    render() {
        return (
            <div>               
                <form onSubmit={this.stdsubmitHandler} className="form-design">
                    <h3>Update student info</h3>
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
                        
                        <button type="submit" className="btn btn-info my-3 ">Update</button>

                        <Link to="/allstudent">
                            <button className="btn btn-success mx-3">Show a list of students</button>
                        </Link>                
                    </div>  
                </form>
                
            </div>
        );
    }
}

export default EditStudent;