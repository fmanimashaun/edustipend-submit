import React from 'react';
import Style from 'assets/scss/hero.module.scss';
import { Button } from 'react-bootstrap';

const Hero = () => (
  <section className={Style.hero}>
    <h1 className={Style.hero__title}>Make your party fun!</h1>
    <p className={Style.hero__subtext}>Create your own custom playlist today!</p>
    <Button variant="warning" className={Style.hero__btn}>Create playlist</Button>
  </section>
);

export default Hero;
