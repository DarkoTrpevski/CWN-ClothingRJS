import React from 'react';
import './HomePage.scss';
import Directory from '../../components/directory/Directory';

const HomePage = ({props}) => {
  return (
    <div className = "Homepage">
      <Directory />
    </div>
  )
}

export default HomePage;