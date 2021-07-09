import React, { Component } from 'react';
import '../homeDesign.css'
import axios from 'axios'
import { Link } from 'react-router-dom';

class EditSubject extends Component {
    constructor() {
        super();
        this.state = {
            name: '1',
            student: ''
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/api/subjects/'+this.props.match.params.id)
            .then(result => {
                this.setState({
                    name: result.data.name,
                    student: result.data.student
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
            student: this.state.student
        }
        axios.post('http://localhost:5000/api/subupdate/'+this.props.match.params.id, stdInfo)
            .then( () => alert('Updated Info'))
            .catch( (err) => alert('Please try again'))

    }

    render() {
        return (
            <div>               
                <form onSubmit={this.stdsubmitHandler} className="form-design">
                    <h3>Update subject info</h3>
                    <div className="form-group">
                        <input
                            onChange={this.changeHandler}
                            type="text"
                            className="form-control my-1 shadow-none"
                            placeholder="Enter your subject name"
                            value={this.state.name}
                            name="name"
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
                        
                        <button type="submit" className="btn btn-info my-3 ">Update</button>

                        <Link to="/allsubject">
                            <button className="btn btn-success mx-3">Show a list of Subjects</button>
                        </Link>                
                    </div>  
                </form>
                
            </div>
        );
    }
}

export default EditSubject;