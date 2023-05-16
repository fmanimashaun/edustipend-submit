import React from 'react';
import Style from 'assets/scss/header.module.scss';
import { Container, Button } from 'react-bootstrap';

const Header = () => (
  <Container as="header" className={Style.header}>
    <div className={`${Style.header__btns} ms-auto`}>
      <Button
        variant="outline-primary"
        className="px-5 py-1 border-0"
        size="lg"
      >
        Contact us
      </Button>
      <Button variant="warning" className="px-5 py-1" size="lg">
        Sign up
      </Button>
    </div>
  </Container>
);

export default Header;
