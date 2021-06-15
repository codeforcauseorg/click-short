import PropTypes from 'prop-types';
import React from 'react';
import HeroWithOneButton from '../../components/Hero';
import LinkSection from './LinkSection';
import UrlList from './UrlList';

function Hero() {
  return (
    <div style={{ textAlign: "center", padding: "0px 10px" }}>
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
