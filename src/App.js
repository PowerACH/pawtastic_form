import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      petName: '',
      photo: '',
      breed: '',
      birthday: '',
      gender: '',
      spayedOrNeutered: '',
      weight: ''
    }
  }
  // emailChange() {
  //   console.log("hi i am es5")
  // }
  // onEmailChange = (event) => {
  //   console.log("hi, i email")
  // }
  render() {
    return(
      
      <div className = "container">
        <div className = "left"></div>
        <div className = "right">
          <h1> Pup Basics </h1>
          <h3>Tell us about your pup. </h3>
          <form className="petBasic">
            <label for="name"> Name: </label>
            <input 
              type="text"
              name="name" 
              placeholder="Pet's Name"
              value={this.state.petName}
            />

            <br /><br />

            <label for="photo">Upload a Photo: </label>
            <input type="file" id="photo" name="photo" value={this.state.photo}></input>

            <br /><br />

            <label> Breed: </label>
            <input 
              type="text" 
              placeholder="Pet's Breed"
              value={this.state.breed}
            />

            <br /><br />

            <label> Birthday</label>
            <input
              type="date"
              value={this.state.birthday}
            />

            <br /><br />

            {/* <form> */}
              <label>Gender : </label>
              <label for="female">Female</label>
                <input
                  type="radio"
                  name="gender" 
                  id="female"
                  value={this.state.gender}></input>
                  <label for="male">Male</label>
                <input
                  type="radio"
                  name="gender" 
                  id="male"
                  value={this.state.gender}></input>
            {/* </form> */}
            {/* <form> */}

            <br /><br />

            <label>Spayed or Neutered? : </label>
              <label for="yes">Yes </label>
                <input
                  type="radio" 
                  id="yes"
                  name="spayed"
                  value={this.state.spayedOrNeutered}></input>
                  <label for="no">No </label>
                <input
                  type="radio" 
                  id="no"
                  name="spayed"
                  value={this.state.spayedOrNeutered}></input>
                  <br /><br />
            {/* </form> */}
            {/* <form onSubmit={this.handleSubmit}> */}
            <label>
              Weight: 
              <select value={this.state.height} onChange={this.handleChange}>
                <option value="xsmall">X-Small (under 10lbs)</option>
                <option value="small">Small (10 - 25lbs)</option>
                <option value="medium">Medium (20 - 50lbs)</option>
                <option value="large">Large (50 - 75lbs)</option>
                <option value="xlarge">XLarge (75 - 90lbs)</option>
                <option value="xxlarge">XXLarge (90+ lbs)</option>
              </select>
            </label>
            {/* </form> */}
            <br /><br />
            <button type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
      
    )
  }
}
export default App;