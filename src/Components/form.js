import React from 'react';
import {Form, Text, TextArea, RadioGroup, Radio, Checkbox, Select, Option, Scope} from 'informed';
import { render } from '@testing-library/react';



// export default class Form extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {value: ''};

    //     this.handleChange = 
    //     this.handleChange.bind(this);
    //     this.handleSubmit = 
    //     this.handleSubmit.bind(this);
    // }

    //     handleChange(event) {
    //         this.setState({value:
    //         event.target.value});
    //     }

    //     handleSubmit(event) {
    //         alert('A name was submitted: ' + this.state.value);
    //         event.preventDefault();
    //     }

    // render() {
    //     return (
    //         <form onSubmit={this.handleSubmit}>
    //             <label for="name">Name: </label>
    //             <input type="text" id="name" value={this.state.value} onChange={this.handleSubmit} />
                
    //             <label>Upload Photo:</label>
    //             <input type="file"></input>
                
    //             <label>Breed:</label>
    //             <input type="text" value={this.state.value} onChange={this.handleSubmit} /> 
                
    //             <label>Birthday: </label>
    //             <input type="text" value={this.state.value} onChange={this.handleSubmit} /> 
               
    //             <label>Gender: </label>
    //             <label for="female">Female</label>
    //             <input type="radio" id="female" name="gender" value={this.state.value}></input><br />
    //             <label for="male">Male</label>
    //             <input type="radio" id ="male" name="gender" value={this.state.value}></input>                
                
    //         </form>    
    //     )
    // }
// }