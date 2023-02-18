import React, { Component } from 'react';
import { v4 as uuidv4 } from "uuid";
class AddNewTodo extends Component {
    state={
        todoTitle:"",

    };
    onTodoChange=(e)=>{
        this.setState({
            todoTitle :e.target.value,
        })
    }
    btnAddTodo=()=>{
        const newTodo={
            title:this.state.todoTitle,
            isCompleted:false,
            id: uuidv4(), //cộng 1 đơn vị
            // id : this.props.todos.length+1, (cách này cũng dc)
        }
        this.setState({ // clear 
            todoTitle:"",
        })
        this.props.onAddTodo(newTodo);

    };
    render() {
        return (
            <div>
                <h3>add new todo</h3>
                <div className="fg">
                    <input type="text" value={this.state.todoTitle} onChange={this.onTodoChange} />
                    <button onClick={this.btnAddTodo}>Add</button>
                </div>
            </div>
        );
    }
}

export default AddNewTodo;