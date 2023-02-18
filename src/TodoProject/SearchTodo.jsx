import React, { Component } from 'react';

class SearchTodo extends Component {
    state={
        query:"",
    };
    onQueryChange=e=>{
        this.setState({
            query:e.target.value,
        },
        ()=>{
            this.props.onQueryTodo(this.state.query);
        });
        // this.props.onQueryTodo(this.state.query); cách này sai nha
        // this.props.onQueryTodo(e.target.value); cách này cũng dùng dc
    };

    btnClearQuery=(e)=>{
        this.setState({
            query:"",
        });
        this.props.onQueryTodo("");
    };
    render() {
        return (
            <div>
                <label style={{
                    fontWeight:"bold",
                }}>
                    <span>Filter task (by name)</span>
                    <div className="fg">
                        {/* {/* <input type="text" onChange={(e)=>this.setState({query:e.taget.value})} />  (dùng cách này vẫn dc ) */} 
                        <input type="text" value ={this.state.query} onChange={this.onQueryChange}/>
                        <button onClick={this.btnClearQuery}>Clear</button>
                    </div>
                </label>
        
            </div>
        );
    }
}

export default SearchTodo;