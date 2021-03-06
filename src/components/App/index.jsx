import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Sample from '../Sample';
import Header from '../Header';
import Footer from '../Footer';
import './styles.css';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.setState({ loading: false }); // simulates an async action, and hides the spinner
  }

  render() {
    const loading = this.state.loading;

    if (loading) {
      return null;
    }

    return (
      <Router>
        <div className="outerContainer">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/sample" component={Sample} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
