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
      height: ''
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
      <div>
        <h1> Yay, we love dogs! Give us the basics about your pup. </h1>
        <form className="petBasic">
          <label> Name: </label>
          <input 
            type="text" 
            placeholder="Pet's Name"
            value={this.state.petName}
          />
          <label> Breed: </label>
          <input 
            type="text" 
            placeholder="Pet's Breed"
            value={this.state.breed}
          />
          <label> Birthday</label>
          <input
            type="date"
            value={this.state.birthday}
          />
          <form>
            <label>Gender: </label>
            <label for="female">Female</label>
              <input
                type="radio" 
                id="female"
                value={this.state.gender}></input>
                <label for="male">Male</label>
              <input
                type="radio" 
                id="male"
                value={this.state.gender}></input>
          </form>
          <form>
          <label>Spayed or Neutered? : </label>
            <label for="spayed">Spayed</label>
              <input
                type="radio" 
                id="spayed"
                value={this.state.spayedOrNeutered}></input>
                <label for="neutered">Neutered</label>
              <input
                type="radio" 
                id="neutered"
                value={this.state.spayedOrNeutered}></input>
          </form>
            <form> //onSubmit="/action_page.php"//>
                <label for="weight">Weight: </label>
                <select id="weight" name="">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="fiat">Fiat</option>
                  <option value="audi">Audi</option>
              </form>
          <button
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}
export default App;