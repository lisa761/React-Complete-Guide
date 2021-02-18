import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    // otherState: 'some other value'
  });
  // useState return two elements, first is the current state and second is a function that allows us to changes the state

  const [otherState, setOtherState] = useState('some other value');
  // we can have multiple useState calls unlike class components where we have only one state property and setState merges new changes with the old obe

  const switchNameHandler = () => {
    setPersonsState({
      persons : [
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 }
      ],
      // otherState: personsState.otherState
    })
    // in React Hooks, second element in the array does not merge the new state with the old one, therefore we have to manually make sure that everything else remains same
  }

  return (
    <div className="App">
      <h1>Hi, I'm React App!!!</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Reading</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
}

export default App;
