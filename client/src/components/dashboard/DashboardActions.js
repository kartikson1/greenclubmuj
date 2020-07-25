import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn btn-light'>
        <i className='fas fa-user-circle text-primary' /> Edit Profile
      </Link>
      <Link to='/about' className='btn btn-primary'>
        <i className='fas fa-users text-primary' /> About RGC
      </Link>
    </div>
  );
};

export default DashboardActions;
