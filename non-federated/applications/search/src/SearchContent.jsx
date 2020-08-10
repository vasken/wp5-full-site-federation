import React from "react";
import { FormControl, Row, Col, Card } from "react-bootstrap";
import { useQuery } from "react-query";

import { Select } from "nf-ecomm-components";
import { getImage, searchCharacters } from "nf-ecomm-logic";

const SearchContent = () => {
  const [search, searchSet] = React.useState("");
  const { data } = useQuery(["searchCharacters", { q: search }], searchCharacters);

  return (
    <>
      <Row style={{ paddingTop: "1em" }}>
        <FormControl
          type="text"
          placeholder="Search"
          value={search}
          onChange={(evt) => searchSet(evt.target.value)}
        />
      </Row>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 33%)",
          gridGap: "1em",
          paddingTop: "1em",
        }}
      >
        {data &&
          data.map((character) => (
            <Card style={{ width: "18rem" }} key={character.name}>
              <Card.Img
                variant="top"
                src={getImage(character)}
                style={{
                  maxHeight: 200,
                  objectFit: "contain",
                  width: "auto",
                  height: "auto",
                }}
              />
              <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <Card.Text>{Object.keys(character.powerstats).reduce((a, c) => `${a} ${c}: ${character.powerstats[c]}`, '')}</Card.Text>
                <Row>
                  <Col xs={4}>${character.power}</Col>
                  <Col xs={8}>
                    <Select character={character}>Select</Select>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
      </div>
    </>
  );
};

export default SearchContent;
