import React from 'react';
import PropTypes from 'prop-types';
import HeroWithOneButton from '../../components/Hero';
import LinkSection from './LinkSection';

function Hero() {
  return (
    <div style={{textAlign: "center"}}>
      <HeroWithOneButton
        title="URLS Shortener"
        subtitle="Powered By Code For Cause"
        backgroundImage="url(/images/hero.png)"
      />
      <LinkSection />
    </div>
  );
}

Hero.propTypes = {
  className: PropTypes.string
};

export default Hero;
