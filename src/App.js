import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import MainPage from './page';
import NewForm from './new';
import CommentsPage from './comments-page';

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
      comments: [],
      id: items.length ? items[items.length-1].id + 1 : 0,
    };
    const newItems = [...items, item];
    this.setState({items: newItems});
    this.save(newItems);
  };

  saveComments = (itemId, text) => {
    const {items} = this.state;
    const item = items.filter(i => i.id === itemId)[0];
    const { comments } = item;
    const comment = {
      text,
      id: comments.length ? comments[comments.length-1].id + 1 : 0,
    };
    const itemWithComment = {...item, comments: [...item.comments, comment]};
    const newItems = items.map( i => i.id === itemId ? itemWithComment : i);
    this.setState({items: newItems});
    this.save(newItems);
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (<MainPage items={this.state.items} handleDelete={this.handleDelete} />)}
          />
          <Route
            exact
            path="/new"
            render={() => (<NewForm save={this.saveNew} />)}
          />
          <Route
            exact
            path="/:itemId"
            render={() => (<CommentsPage items={this.state.items} save={this.saveComments} />)}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
