import React from 'react';

// Layouts
import AppNavbar from './AppNavbar';
import AppBanner from './AppBanner';

import styles from '../../styles/header/header.module.css'

const AppHeader = () => (
  <div className={StyleSheet.app__header}>
    <AppNavbar />
    <AppBanner />
  </div>;
)



export default AppHeader;
