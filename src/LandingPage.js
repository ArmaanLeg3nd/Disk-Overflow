import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import './LandingPage.css';
import user from './user.svg';
import mstory from './main-stories.png';
import Dashboard from './dashboard';


class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.state = {
      showLoginForm: false,
      showSignUpForm: false,
      login: '',
      password: '',
      repeatPassword: '',
      username: '',
      email: '',
      isLoggedIn: false,
    };
  }

  handleCloseForm = () => {
    this.setState({ showLoginForm: false, showSignUpForm: false });
  };

  handleButtonClick = () => {
    this.setState({ showLoginForm: true, showSignUpForm: false });
  };

  handleSignUpButtonClick = () => {
    this.setState({ showSignUpForm: true, showLoginForm: false });
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLoginSubmit = (event) => {
    event.preventDefault();
    // Simulate server-side validation (replace with actual server-side logic)
    const { login, password } = this.state;
    if (login === 'admin' && password === 'password') {
      this.setState({ isLoggedIn: true });
      ReactDOM.render(
        <React.StrictMode>
          <Dashboard />
        </React.StrictMode>,
        document.getElementById('root')
      );
      
    } else {
      alert('Invalid login credentials');
    }
  };

  handleSignUpSubmit = (event) => {
    event.preventDefault();
    // Simulate server-side validation (replace with actual server-side logic)
    const { username, email, password, repeatPassword } = this.state;
    if (password !== repeatPassword) {
      alert('Passwords do not match');
    } else {
      // Save user data or perform sign-up logic here
      alert('Sign-up successful');
      this.setState({ isLoggedIn: true });
      ReactDOM.render(
        <React.StrictMode>
          <Dashboard />
        </React.StrictMode>,
        document.getElementById('root')
      );
      

    }
  };

  render() {
    const { showLoginForm, showSignUpForm, isLoggedIn } = this.state;

    if (isLoggedIn) {
      return (
        <React.StrictMode>
          <Dashboard />
        </React.StrictMode>
      );
    }

      return (
        <div>
          <div className="landing-page">
            <header>
              <div className="container">
                <a href="#" className="logo">
                  Story <b>Scape</b>
                </a>
                <ul className="links">
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Get Started</li>
                </ul>
              </div>
            </header>
            <div className="content">
              <div className="container">
                <div className="info">
                  <h1>Once upon a Time...</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus odit nihil ullam nesciunt quidem iste, Repellendus
                    odit nihil
                  </p>
                  <button id="b2" onClick={this.handleButtonClick}>
                    Get started
                  </button>
                </div>
                <div className="image">
                  <img
                    src={mstory}
                    alt="Landing Page"
                  />
                </div>
              </div>
            </div>
          </div>
  
          {showLoginForm && (
            <div className="wrapper fadeInDown">
              <div id="formContent">
              <span className="close-button" onClick={this.handleCloseForm}>
              &times;
            </span>
                <h2 className="active">
                  <button id="b1" onClick={this.handleButtonClick}>
                    Sign In
                  </button>
                </h2>
                <h2 className="inactive underlineHover">
                  <button id="b1" onClick={this.handleSignUpButtonClick}>
                    Sign Up
                  </button>
                </h2>
  
                <div className="fadeIn first">
                  <img
                    src={user}
                    id="icon"
                    alt="User Icon"
                  />
                </div>
  
                <form onSubmit={this.handleLoginSubmit}>
                  <input
                    type="text"
                    id="login"
                    className="fadeIn second"
                    name="login"
                    placeholder="Login"
                    onChange={this.handleInputChange}
                  />
                  <input
                    type="text"
                    id="password"
                    className="fadeIn third"
                    name="password"
                    placeholder="Password"
                    onChange={this.handleInputChange}
                  />
                  <input type="submit" className="fadeIn fourth" value="Log In" />
                </form>
  
                <div id="formFooter">
                  <a className="underlineHover" href="#">
                    Forgot Password?
                  </a>
                </div>
              </div>
            </div>
          )}
  
          {showSignUpForm && (
            <div className="wrapper fadeInDown">
            <div id="formContent">
            <span className="close-button" onClick={this.handleCloseForm}>
              &times;
            </span>
              <h2 className="inactive underlineHover">
                <button id="b1" onClick={this.handleButtonClick}>
                  Sign In
                </button>
              </h2>
              <h2 className="active">
                <button id="b1" onClick={this.handleSignUpButtonClick}>
                  Sign Up
                </button>
              </h2>
  
              <div className="fadeIn first">
                <img src={user} id="icon" alt="User Icon" />
              </div>
              
                <form onSubmit={this.handleSignUpSubmit}>
                  <input
                    type="text"
                    id="username"
                    className="fadeIn second"
                    name="username"
                    placeholder="Username"
                    onChange={this.handleInputChange}
                  />
                  <input
                    type="text"
                    id="email"
                    className="fadeIn second"
                    name="email"
                    placeholder="Email"
                    onChange={this.handleInputChange}
                  />
                  <input
                    type="text"
                    id="password"
                    className="fadeIn third"
                    name="password"
                    placeholder="Password"
                    onChange={this.handleInputChange}
                  />
                  <input
                    type="text"
                    id="repeatPassword"
                    className="fadeIn third"
                    name="repeatPassword"
                    placeholder="Repeat Password"
                    onChange={this.handleInputChange}
                  />
                  <input type="submit" className="fadeIn fourth" value="Sign Up" />
                </form>
              </div>
            </div>
          )}
        </div>
      );
    }
  }
  
  export default LandingPage;
  