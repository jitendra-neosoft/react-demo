import React from 'react';
import ReactDOM from 'react-dom';

// 1. Example
/*
const Button = function(){
    return (
        <button>Go</button>
    );
}

ReactDOM.render(
    <Button />,
    document.getElementById('root')
) */

// Example 2
/* class Button extends React.Component {
    constructor(props){
        super(props);
        this.state = { counter: 0 };
    }
    render() {
        return (
            <button>{this.state.counter}</button>
        );
    }
}

ReactDOM.render(
    <Button />,
    document.getElementById('root')
) */

// Example 2, shorter syntax
/* class Button extends React.Component {

    state = { counter: 0 };
    render() {
        return (
            <button>
                {this.state.counter}
            </button>
        );
    }
}

ReactDOM.render(
    <Button />,
    document.getElementById('root')
) */

// example 3

/* class Button extends React.Component {

    state = { counter: 0 };

    handleClick = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    }
    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.counter}
            </button>
        );
    }
}

ReactDOM.render(
    <Button />,
    document.getElementById('root')
) */

// example 3, optimised

/* class Button extends React.Component {

    state = { counter: 0 };

    handleClick = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }));
    }
    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.counter}
            </button>
        );
    }
}

ReactDOM.render(
    <Button />,
    document.getElementById('root')
) */

// example 4, resulable component

/* class Button extends React.Component {

    render() {
        return (
            <button onClick={this.props.onClickFunction}>
                +1
            </button>
        );
    }
}

const Result = (props) => {
    return (
        <div>{props.anotherCounter}</div>
    )
}

class App extends React.Component {
    state = { counter: 0 };

    incrementCounter = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }));
    }
    render() {
        return (
            <div>
                <Button onClickFunction={this.incrementCounter} />
                <Result anotherCounter={this.state.counter} />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
) */

// example 4, resulable component, continue

class Button extends React.Component {

    // render() {
    //     return (
    //         <button onClick={() => this.props.onClickFunction(this.props.incrementValue)}>
    //             +{this.props.incrementValue}
    //         </button>
    //     );
    // }

    // optimise way
    handleClick = () => {
        this.props.onClickFunction(this.props.incrementValue);
    }
    render() {
        return (
            <button onClick={this.handleClick}>
                +{this.props.incrementValue}
            </button>
        );
    }
}

const Result = (props) => {
    return (
        <div>{props.anotherCounter}</div>
    )
}

class App extends React.Component {
    state = { counter: 0 };

    incrementCounter = (incrementValue) => {
        this.setState((prevState) => ({
            counter: prevState.counter + incrementValue
        }));
    }
    render() {
        return (
            <div>
                <Button incrementValue={1} onClickFunction={this.incrementCounter} />
                <Button incrementValue={5} onClickFunction={this.incrementCounter} />
                <Button incrementValue={10} onClickFunction={this.incrementCounter} />
                <Button incrementValue={100} onClickFunction={this.incrementCounter} />
                <Result anotherCounter={this.state.counter} />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)