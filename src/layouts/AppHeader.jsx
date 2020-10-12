import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

import styles from './css/layout.module.css';

const AppHeader = () => {
  return (
    <Navbar className={styles.app_navbar}>
      <Container>
        <Navbar.Brand className={styles.nav_brand} href='#home'>
          EIGHT25MEDIA
        </Navbar.Brand>
        <Nav className='mx-auto'>
          <Nav.Link className={styles.nav_link} href='#home'>
            CUSTOMERS
          </Nav.Link>
          <Nav.Link className={styles.nav_link} href='#features'>
            SOLUTIONS
          </Nav.Link>
          <Nav.Link className={styles.nav_link} href='#pricing'>
            ABOUT
          </Nav.Link>
          <Nav.Link className={styles.nav_link} href='#pricing'>
            RESOURCES
          </Nav.Link>
        </Nav>
        {/* <Button className={styles.navbar_btn}>REQUEST A QUOTE</Button> */}
      </Container>
    </Navbar>
  );
};

export default AppHeader;
