import React, {Component} from 'react';
import {TodoList} from "./TodoList";
import moment from "moment";
import './TodoApp.css';
import PersistentDrawerLeft from './Menu.js';
import FormDialog from './FormDialog';

export default class TodoApp extends Component{

    constructor(props) {
        super(props);
        this.state = {
            items: []    
            };
        this.save = this.save
        .bind(this);
    }


    save(newItem){
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            description: '',
            status: '',
            dueDate: moment(),
            name:'',
            email:''
        }));
    }


    render(){
        return (
            <div className="App">
                <PersistentDrawerLeft validateLogin={this.props.validateLogin}/>
                <TodoList todoList={this.state.items}/>
                <FormDialog save={this.save}/>
            </div>
        );
    }
}