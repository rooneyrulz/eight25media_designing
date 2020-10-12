import React from 'react';
import AppHeader from './AppHeader';

import styles from './css/layout.module.css';

const AppBanner = () => {
  return (
    <div className={styles.app_banner}>
      <AppHeader />
    </div>
  );
};

export default AppBanner;
