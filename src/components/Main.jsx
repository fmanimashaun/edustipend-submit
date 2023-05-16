import React from 'react';
import Style from 'assets/scss/main.module.scss';
import { Container } from 'react-bootstrap';
import Hero from './Hero';
import TrendCard from './TrendCard';

const Main = () => {
  const songlist = [
    {
      title: 'Unavailable',
      artist: 'Davido',
      id: 1,
    },
    {
      title: 'Unavailable',
      artist: 'Davido',
      id: 1,
    },
    {
      title: 'Unavailable',
      artist: 'Davido',
      id: 1,
    },
    {
      title: 'Unavailable',
      artist: 'Davido',
      id: 1,
    },
    {
      title: 'Unavailable',
      artist: 'Davido',
      id: 1,
    },
  ];
  return (
    <Container as="main" className={Style.main}>
      <Hero />
      <TrendCard songlist={songlist} />
    </Container>
  );
};

export default Main;
