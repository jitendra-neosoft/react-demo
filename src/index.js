import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const Card = (props) => {
    return(
        <div style={{ margin: '1em' }}>
            <a href={props.html_url} target="_blank"><img width="100" src={props.avatar_url} alt="missing" /></a>
            <div style={{ display: 'inline-block', marginLeft: 10 }}>
                <div style={{ fontSize: '1.2em', fontWeight: 'bold' }}>{props.name}</div>
                <div>{props.company}</div>
            </div>
        </div>
    )
}

const CardList = (props) => {
    return (
        <div>
            {props.cards.map(card => <Card key={card.id} {...card} />)}
        </div>
    )
}

class Form extends React.Component {
    state = { userName: '' }
    handleSubmit = (event) => {
        event.preventDefault();
        axios.get(`https://api.github.com/users/${this.state.userName}`)
        .then(resp => {
            this.props.onSubmit(resp.data);
            this.setState({ userName: '' });
        })
        .catch(err => {
            this.setState({ userName: '' });
        })
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
               <input type="text" value={this.state.userName} onChange={(event) => this.setState({userName: event.target.value })} placeholder="Github Username" />
               <button type="Submit">Add Card</button>
            </form> 
        )
    }
}

class App extends React.Component {
    state = {
        cards: []
    };

    addNewCard = (cardInfo) => {
        this.setState(prevState => ({
            cards: prevState.cards.concat(cardInfo)
        }))
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.addNewCard} />
                <CardList cards={this.state.cards} />
            </div>
        );
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
)