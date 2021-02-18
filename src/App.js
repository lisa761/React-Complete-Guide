import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons : [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    // bad practice because the splice line is then adding changes to the original value and updating it would mean mutating the original value which can lead to unpredictible behaviour. using splice instead would make sure that this persons is a copy and the not the original value. making changes to it and then setting new state would set the value of persons to a completely new array.
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; // ES 6 version of above
    persons.splice(personIndex, 1);
    // here we aren't changing the value of persons which is a const: since persons is an array and arrays are reference types that merely store a pointer to the location where the value is stored, we are technically only changing the value and not the stored pointer.
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm React App!!!</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
