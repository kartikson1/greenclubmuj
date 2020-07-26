import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1 className='x-large'>Rotaract Green Club, MUJ</h1>
          <p className='lead'>
            Welcome to the RGC website! Check out posts about club events from
            members, sign up on the club website, have discussions, and more.
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
            <Link to='/about' className='btn btn-primary'>
              About RGC
            </Link>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p>Developer: Kartik Soni</p>
          <p>kartiksoni2209@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
