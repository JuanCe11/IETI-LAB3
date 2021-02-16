import React, {Component} from 'react';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';
import Login from './components/Login';
import TodoApp from './components/TodoApp';
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
    }

    validateLogin = ()=>{
        this.setState({isLoggedIn: localStorage.getItem('user') !== null})
    }

    render() {
        const LoginView = () => (
            (!this.state.isLoggedIn)?<Login validateLogin={this.validateLogin}/>:<TodoApp validateLogin={this.validateLogin}/>
        );
        const TodoAppView = () => (
            (this.state.isLoggedIn)?<TodoApp validateLogin={this.validateLogin}/>:<Login validateLogin={this.validateLogin}/>
        );
        
        return (
            <div>
                <Router>
                    <div className="App">
                        <div>
                            <Route exact path="/" component={LoginView}/>
                            <Route path="/todo" component={TodoAppView}/>
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
