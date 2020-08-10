import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

import { select } from "nf-ecomm-logic";

const Select = ({ character, select }) => (
  <Button onClick={() => select(character)} style={{ width: "100%" }}>
    Select
  </Button>
);

const postSelect = (character) => (dispatch) =>
  select(character).then((payload) =>
    dispatch({
      type: "SET_ITEMS",
      payload,
    })
  );

export default connect(
  () => ({}),
  (dispatch) => ({
    select: (character) => dispatch(postSelect(character)),
  })
)(Select);
