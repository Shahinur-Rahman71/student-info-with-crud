import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class StudentList extends Component {
    constructor() {
        super();
        this.state = {
            alldata: [],
            allsubject: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/students')
            .then(res => {
                this.setState({ alldata: res.data })
            })
            .catch(err => console.log(err))

        axios.get('http://localhost:5000/api/subjects')
            .then(res => {
                this.setState({ allsubject: res.data })
            })
            .catch(err => console.log(err))
    }

    deleteHander = (id) => {
 
        axios.delete('http://localhost:5000/api/stddelete/'+id)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))

        this.setState({
            alldata: this.state.alldata.filter(element => element._id !== id)
        });
        console.log(this.state.alldata)
 
    }

    render() { console.log(this.state.allsubject)
        return (
            <div className="userDesign">
                <table className="table table-striped table-dark m-3">

                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Date of Birth</th>
                            <th>Subjects</th>
                            <th>
                                <Link to="/">
                                    <button className="btn btn-dark"><span style={{color: "green", fontWeight: "bold"}}>create info</span></button>
                                </Link>
                            </th>
                            
                        </tr>
                    </thead>
                        
                    <tbody >
                        {this.state.alldata.map(res => (
                            <tr key={res._id}>
                                <td>{res.name}</td>
                                <td>{res.email}</td>
                                <td>{res.phone}</td>
                                <td>{res.dateOfBirth}</td>
                                <td> 
                                    {this.state.allsubject.map(info => (
                                        (res.name === info.student) && <span key={info._id}>{info.name+" "}</span>
                                    ))}
                                    <Link to={"/editstudent/"+res._id}> Update</Link> | <a href="#" onClick={()=> this.deleteHander(res._id)}>Delete</a>
                                </td>
                                <td></td>
                            </tr>
                        ))}
                    </tbody>

                </table>
                
            </div>
        );
    }
}

export default StudentList;