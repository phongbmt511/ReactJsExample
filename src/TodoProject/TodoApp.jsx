import React, { Component } from 'react';
import TodoList from './TodoList';
import AddNewTodo from './AddNewTodo';
import './TodoApp.css';
import TodoItem from './TodoItem';
import SearchTodo from './SearchTodo';
class TodoApp extends Component {
    constructor(props){
        super(props);
        this.state={
            todos : [
                { id: 1, title: "Đi cafe với gấu", isCompleted: true },
                { id: 2, title: "Học ReactJS", isCompleted: false },
                { id: 3, title: "Học cách thổi nến", isCompleted: false },
                { id: 4, title: "Dắt gấu đi dạo", isCompleted: false },
                { id: 5, title: "Trade coin", isCompleted: false },
              ],
              query:"",
        }
    }
    // chức năng thêm công việc
    onAddTodo=newTodo=>{
        this.setState({
            todos:[...this.state.todos,newTodo],
        });
    };
    // chức năng xóa
    onDeleteTodo=id=>{
        const updatedTodos = this.state.todos.map((todoItem) => {
            return todoItem.id === id
              ? {
                  ...todoItem,
                  isCompleted: true,
                }
              : todoItem;
          });
      
          // Set state lại new todo
          this.setState({
            todos: updatedTodos,
          });
        };
    onQueryTodo=(query)=>{
        this.setState({
            // query:query, (cách này cũng dc)
            query,
        })
    }
    render() {
        const {todos, query}=this.state;// lấy dữ liệu todos
        return (
            <div className="container bg-success p-2 text-dark bg-opacity-50">
                <h1>Todo App Here</h1>
                <SearchTodo onQueryTodo={this.onQueryTodo}/>
                <TodoList todos={todos} onDeleteTodo={this.onDeleteTodo} query={query}/>
                <AddNewTodo onAddTodo={this.onAddTodo}/>
                
            </div>
        );
    }
}

export default TodoApp;