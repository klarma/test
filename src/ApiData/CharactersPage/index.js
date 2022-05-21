import { useState } from "react";
import { Link } from "react-router-dom";
// import { useRatesData } from "../../useRatesData";
import "./style.css";

const CharactersPage = ({ setTitle, calculateResult }) => {
  const [hidePerson, setHidePerson] = useState(false);
  const [number, setNumber] = useState(0);

  // const ratesData = useRatesData();
  const handleClick = () => {
    calculateResult(number);
  };

  const characters = [
    {
      id: 0,
      name: "Luke Skywalker",
      height: "172",
      mass: 77,
      eye_color: "blue",
      gender: "male",
    },
    {
      id: 1,
      name: "Darth Vader",
      height: "202",
      mass: 136,
      eye_color: "yellow",
      gender: "male",
    },
    {
      id: 2,
      name: "Leia Organa",
      height: "150",
      mass: 49,
      eye_color: "brown",
      gender: "female",
    },
    {
      id: 3,
      name: "Anakin Skywalker",
      height: "188",
      mass: 84,
      eye_color: "blue",
      gender: "male",
    },
  ];

  return (
    <>
      <ul>
        {characters.map(({ name, id }) => (
          <li
            key={name}
            className={`character${hidePerson ? " hideCharacter" : ""}`}
          >
            <Link to={`/characters/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <button className="button" onClick={() => setTitle("Coś")}>
        Change title
      </button>
      <button className="button" onClick={() => setHidePerson(!hidePerson)}>
        {hidePerson ? "Pokaż" : "Ukryj"} postacie
      </button>
      <input
        type="number"
        value={number}
        onChange={({ target }) => setNumber(target.value)}
      ></input>
      <button onClick={handleClick}>Call parent's function</button>
      <button>
        <Link to="/seemore">Zobacz więcej</Link>
      </button>
    </>
  );
};

export default CharactersPage;
