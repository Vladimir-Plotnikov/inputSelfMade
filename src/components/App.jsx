import React, {Component} from "react";

export class App extends Component{
   state = {
    name: ''
  };
  handleNameChange = event => {
    console.dir(event.currentTarget);
    this.setState({name: event.currentTarget.value})
  }

    render(){
      return (
      <form>
        <label htmlFor="">
         Имя <input type="text" value={this.state.name} onChange={this.handleNameChange} />
        </label>
      </form>
)
    }
  ;}
