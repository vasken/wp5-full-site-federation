import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

import { addToCart } from "nf-ecomm-logic";

const AddToCart = ({ character, addToCart }) => (
  <Button onClick={() => addToCart(character)} style={{ width: "100%" }}>
    Select
  </Button>
);

const postAddToCart = (character) => (dispatch) =>
  addToCart(character).then((payload) =>
    dispatch({
      type: "SET_ITEMS",
      payload,
    })
  );

export default connect(
  () => ({}),
  (dispatch) => ({
    addToCart: (character) => dispatch(postAddToCart(character)),
  })
)(AddToCart);
