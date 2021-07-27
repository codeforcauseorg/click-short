import PropTypes from "prop-types";
import React, { useContext, useMemo, useState } from "react";
import Hero from "../../components/Hero";
import LinkSection from "./LinkSection";
import UrlList from "./UrlList";
import { UserContext, LinkContext } from "../../context";
import { CircularProgress } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function HomeView() {
  const { user } = useContext(UserContext);
  const [rows, setRows] = useState(null);
  const history = useHistory();
  const value = useMemo(() => ({ rows, setRows }), [rows, setRows]);

  if (user === null) {
    history.push("/login");
  }

  return (
    <div style={{ textAlign: "center" }}>
      <LinkContext.Provider value={value}>
        <Hero
          title="URLS Shortener"
          subtitle="Powered By Code For Cause"
          backgroundImage="url(/images/hero.png)"
        />
        {user ? (
          <>
            <LinkSection />
            <UrlList />
          </>
        ) : (
          <CircularProgress />
        )}
      </LinkContext.Provider>
    </div>
  );
}

HomeView.propTypes = {
  className: PropTypes.string,
};

export default HomeView;
