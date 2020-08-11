import React from "react";
import { Button, Row, Col, Table } from "react-bootstrap";

import { connect } from "react-redux";
import { getImage } from "search/products";
import { checkout } from "checkout/team";

const Cart = ({ items }) => (
  <Table striped>
    <thead>
      <tr>
        <th colSpan="2">Heroes</th>
        <th>Lives</th>
        <th>Power</th>
      </tr>
    </thead>
    <tbody>
      {items.map(({ character, count }) => (
        <tr key={character.name}>
          <td width="5%">
            <img src={getImage(character)} style={{ maxHeight: 50 }} />
          </td>
          <td width="50%">{character.name}</td>
          <td width="15%">{count}</td>
          <td width="15%">{character.power}</td>
        </tr>
      ))}
      <tr>
        <td colSpan="3">Total Power</td>
        <td>
          {items.reduce(
            (a, { count, character: { power } }) => a + count * power,
            0
          )}
        </td>
      </tr>
    </tbody>
  </Table>
);

const ConnectedCart = connect((state) => state)(Cart);

const CheckoutButton = ({ onReset }) => (
  <Button onClick={onReset} style={{ width: "100%" }}>
    Engage
  </Button>
);

const runCheckout = () => (dispatch) =>
  checkout().then((payload) =>
    dispatch({
      type: "SET_ITEMS",
      payload,
    })
  );

const ConnectedCheckoutButton = connect(
  () => ({}),
  (dispatch) => ({
    onReset: () => dispatch(runCheckout()),
  })
)(CheckoutButton);

const CheckoutContent = () => {
  return (
    <>
      <h1>Heroes selected</h1>
      <Row style={{ marginTop: "1em" }}>
        <Col xs={8}>
          <ConnectedCart />
        </Col>
        <Col xs={4}>
          <ConnectedCheckoutButton />
        </Col>
      </Row>
    </>
  );
};

export default CheckoutContent;
