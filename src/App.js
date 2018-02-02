import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
// import Header from './header';
import ItemsList from './list';
import NewForm from './new';

const lsKey = 'SayerItems';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: JSON.parse(localStorage.getItem(lsKey)) || [],
    };
  }

  handleDelete = (id) => {
    let newState = {
      items: this.state.items.filter(item => item.id !== id),
    };
    this.setState(newState);
    this.save(newState.items);
  };

  save = items => localStorage.setItem(lsKey, JSON.stringify(items));

  saveNew = (text) => {
    const {items} = this.state;
    let item = {
      text: text,
      comments: 0,
      id: items[items.length-1].id + 1,
    };
    const newItems = [...items, item];
    this.setState({items: newItems});
    this.save(newItems);
  };

  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={() => (<ItemsList items={this.state.items} handleDelete={this.handleDelete} />)}
          />
          <Route
            exact
            path="/new"
            render={() => (<NewForm save={this.saveNew} />)}
          />
        </div>
      </Router>
    );
  }
}

export default App;
