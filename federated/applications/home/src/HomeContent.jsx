import React from "react";
import { Row, Col } from "react-bootstrap";
import { useQuery } from "react-query";

import Select from "checkout/Select";
import { getImage, getCharacterById } from "search/products";

const CharacterCard = ({ id, children, right }) => {
  const { data: character } = useQuery(
    ["getCharacterById", { id }],
    getCharacterById
  );

  return (
    <div
      style={{
        marginTop: "1em",
        padding: "1em",
        border: "1px solid #ccc",
        borderRadius: 5,
      }}
    >
      <Row>
        {character && (
          <>
            {!right && (
              <Col xs={3}>
                <img src={getImage(character)} style={{ width: "100%" }} />
              </Col>
            )}
            <Col xs={9}>
              <h1>{character.name}</h1>
              {children}
              <Row>
                <Col xs={{ span: 1, offset: 8 }} style={{ fontWeight: "bold" }}>
                  ${character.power}
                </Col>
                <Col xs={{ span: 3 }}>
                  <Select character={character} />
                </Col>
              </Row>
            </Col>
            {right && (
              <Col xs={3}>
                <img src={getImage(character)} style={{ width: "100%" }} />
              </Col>
            )}
          </>
        )}
      </Row>
    </div>
  );
};

const HomeContent = () => (
  <>
    <CharacterCard id={70}>
      <p>
		<strong>Batman</strong> originated from an incident in Bruce's childhood; after witnessing the murder of his parents 
		Dr. Thomas Wayne and Martha Wayne, he swore vengeance against criminals, an oath tempered by a sense of justice. 
		Bruce trains himself physically and intellectually and crafts a bat-inspired persona to fight crime.
      </p>
    </CharacterCard>
    <CharacterCard id={569} right>
      <p>
		Soon there will be war. Millions will burn. Millions will perish in sickness and misery. 
		Why does one death matter against so many? Because there is good and there is evil, and evil must be punished. 
		Even in the face of Armageddon I shall not compromise in this. 
		But there are so many deserving of retribution ... and there is so little time.
      </p>
    </CharacterCard>
    <CharacterCard id={69}>
      <p>
		<strong>Superman</strong> was born on the planet Krypton and was given the name Kal-El at birth. 
		As a baby, his parents sent him to Earth in a small spaceship moments before Krypton was destroyed in a natural cataclysm. ... 
		Clark Kent resides in the fictional American city of Metropolis, where he works as a journalist for the Daily Planet.
      </p>
    </CharacterCard>
  </>
);

export default HomeContent;
