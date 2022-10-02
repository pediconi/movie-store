import React, { Fragment } from "react";
import { ItemListContainer } from "../components/ItemListContainer";

export const LandingPage = () => {
  return (
    <Fragment>
      <ItemListContainer greeting="MOVIE-STORE" />
    </Fragment>
  );
};
