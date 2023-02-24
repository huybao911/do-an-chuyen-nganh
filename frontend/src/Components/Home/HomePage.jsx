import * as React from 'react';
import AppBar from '@mui/material/AppBar';

import Headers from '../Home-Header/Home-Header';
import Navigations from '../Home-Nav/Home-Nav';
import Contents from '../Home-Content/Home-Content';

import './Homepage.css';

export default function Homepage() {
  return (
    <div className='pageHome'>
      <Headers/>
      <Navigations/>
      <Contents/>
    </div>
    
  )
  
}