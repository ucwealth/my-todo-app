import React from 'react';

export default class Form extends React.Component {
    constructor(){
        super();
        this.state = {
          value: 'I am the TO DO! ',
        }
      }

    handleChange = (e) => {
        console.log('Adding todo...')
    };
    
    addTodo = (todo) => {
        console.log('TODO:', todo)
    };
    
    removeTodo = () => {
        console.log('completed!')
    };
    
    
    render() {
        return(
            <div>
                <h1>MY REACT-TODO</h1>
                <input type="text" onChange={this.handleChange}/><br/><br/>
                <button onClick={() => this.addTodo(this.state.value)}>Submit</button>
                <button onClick={() => this.removeTodo()}>Clear Completed</button>
            </div>
            );
    }
}