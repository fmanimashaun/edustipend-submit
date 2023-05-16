import React from 'react';
import Style from 'assets/scss/trendcard.module.scss';
import { PropTypes } from 'prop-types';
import { Stack, Button } from 'react-bootstrap';
import { BsPlus } from 'react-icons/bs';

const TrendCard = ({ songlist }) => (
  <Stack gap={3} className={Style.card}>
    <h2 className={Style.card__title}>Trending songs</h2>
    <Stack gap={3} className={Style.card__songlist}>
      {songlist.map((song) => (
        <Button key={song.id} variant="warning" className={Style.card__song}>
          <span>{`${song.title} by ${song.artist}`}</span>
          <BsPlus />
        </Button>
      ))}
    </Stack>
    <Button variant="warning" className={Style.card__btn}>
      View more
    </Button>
  </Stack>
);

TrendCard.propTypes = {
  songlist: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default TrendCard;
