import React, { Component } from 'react';
import api from './api';

class App extends Component {
  state = {
    cats: [],
  };

  componentDidMount() {
    api.getCats().then(cats => this.setState({ cats }));
  }

  handleSubmit = (cat) => {
    cat.preventDefault();

    const { name, img } = cat.target;

    api.addCat({
      name: name.value,
      img: img.value,
    })
      .then(cats => this.setState({ cats }));
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Contact Manager</h2>
        </div>
        {
          this.state.cats &&
          <ul>
            {this.state.cats.map(cat => (
              <li key={cat.id}>
                Name: {cat.name}
                Image: <img src={cat.img} alt="" />
              </li>
            ))}
          </ul>
        }
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Add a Cat</legend>
            <ul>
              <li>
                <label htmlFor="name">Name</label>
                <input name="name" id="name" />
              </li>
              <li>
                <label htmlFor="img">Url to Image</label>
                <input name="img" id="img" />
              </li>
              <li>
                <button>Add Cat</button>
              </li>
            </ul>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default App;
