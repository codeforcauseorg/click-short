import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import Hero from '../../components/Hero';
import LinkSection from './LinkSection';
import UrlList from './UrlList';
import { UserContext } from '../../context/userContext'
import { CircularProgress } from '@material-ui/core'
import ButtonComponent from '../../components/ButtonComponent';
import { logout } from '../../services/authService';
import { useHistory } from 'react-router-dom';

function HomeView() {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();

  const handleLogout = () => {
    logout();
    setUser(null);
  }

  if (user === null) {
    history.push("/login")
  }

  return (
    <div style={{ textAlign: "center" }}>
      <Hero
        title="URLS Shortener"
        subtitle="Powered By Code For Cause"
        backgroundImage="url(/images/hero.png)"
      />
      {
        user ?
          (<>
            <LinkSection />
            <UrlList />
            <ButtonComponent title="Log Out" onClick={handleLogout} />
          </>) :
          <CircularProgress />
      }

    </div>
  );
}

HomeView.propTypes = {
  className: PropTypes.string
};

export default HomeView;
