import React from 'react';
import './dashboard.css';
import ReactDOM from 'react-dom';
import Tta from './tta';
import Anim from './anim';

class Dashboard extends React.Component {
  redirect_tta = (event) => {
    ReactDOM.render(
      <React.StrictMode>
        <Tta />
      </React.StrictMode>,
      document.getElementById('root')
    );
  };

  redirect_anim = (event) => {
    ReactDOM.render(
      <React.StrictMode>
        <Anim />
      </React.StrictMode>,
      document.getElementById('root')
    );
  };

  render() {
    return (
      <div>
        <header>
          <div className="container text-center">
            <h2>Welcome to</h2> <h1><b>Story Scape</b></h1>
          </div>
        </header>
        <div className="dashboard-container">
          <section className="timeline">
            <div className="button-container">
              <button className='button' onClick={this.redirect_tta}>Create Audio with a story</button>
              <button className='button' onClick={this.redirect_anim}>Animate</button>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Dashboard;
