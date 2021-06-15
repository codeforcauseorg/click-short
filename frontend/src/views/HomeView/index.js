import PropTypes from 'prop-types';
import React from 'react';
import HeroWithOneButton from '../../components/Hero';
import LinkSection from './LinkSection';
import UrlList from './UrlList';

function Hero() {
  return (
    <div style={{ textAlign: "center" }}>
      <HeroWithOneButton
        title="URLS Shortener"
        subtitle="Powered By Code For Cause"
        backgroundImage="url(/images/hero.png)"
      />
      <LinkSection />
      <UrlList />
    </div>
  );
}

Hero.propTypes = {
  className: PropTypes.string
};

export default Hero;
