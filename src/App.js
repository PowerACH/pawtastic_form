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
        <div className = "left">
          <img className = "pawPrint" alt = "paw" src="https://www.freelogodesign.org/file/app/client/thumb/51e412a5-bae1-4456-a849-d83e4fa54f14_200x200.png?1594855221596"></img>
          <img className = "puppies" alt = "dogs" src="https://www.ronismobilegrooming.com/wp-content/uploads/2015/09/Dog-Row-2-1024x414.png"></img>
        </div>
        <div className = "right">
          <h1> PUP DETAILS </h1>
          <h3>Tell us about your furry friend. </h3>
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

            <label> Birthday: </label>
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