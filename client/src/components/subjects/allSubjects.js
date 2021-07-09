import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class SubjectList extends Component {
    constructor() {
        super();
        this.state = {
            alldata: [],
            allstudent: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/subjects')
            .then(res => {
                this.setState({ alldata: res.data})
            })
            .catch(err => console.log(err))

        axios.get('http://localhost:5000/api/students')
            .then(res => {
                this.setState({ allstudent: res.data })
            })
            .catch(err => console.log(err))
    }

    deleteHander = (id) => {
 
        axios.delete('http://localhost:5000/api/subdelete/'+id)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))

        this.setState({
            alldata: this.state.alldata.filter(element => element._id !== id)
        });
 
    }

    render() { 
        return (
            <div className="userDesign">
                <table className="table table-striped table-dark m-3">

                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Students</th>
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
                                <td>
                                    {this.state.alldata.map(info => (
                                        (res.name === info.name) && <span key={info._id}>{info.student+" "}</span>
                                    ))}
                                    <Link to={"/editsubject/"+res._id}> Update</Link> | <a href="#" onClick={()=> this.deleteHander(res._id)}>Delete</a>
                                    
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

export default SubjectList;