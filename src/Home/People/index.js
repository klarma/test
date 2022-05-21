import { useState } from "react";
import { Redirect } from "react-router-dom";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import CharactersPage from "../../ApiData/CharactersPage";
import CharacterPage from "../../CharacterPage";
import SeeMore from "../../SeeMore";
// import usePostCodes from "./usePostCodes";

function People() {
  const [title, setTitle] = useState("Hello Word");
  // const randomPostCode = usePostCodes();
  // console.log(randomPostCode);
  const calculateResult = (numberOfThoughts) => {
    console.log(numberOfThoughts * 100);
  };

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <button>
              <Link to="/title">Title</Link>
            </button>
          </li>
          <li>
            <Link to="/characters">Api data</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/characters/:id">
          <CharacterPage></CharacterPage>
        </Route>
        <Route path="/seemore">
          <SeeMore></SeeMore>
        </Route>
        <Route path="/characters">
          <CharactersPage
            setTitle={setTitle}
            calculateResult={calculateResult}
          ></CharactersPage>
        </Route>
        <Route path="/title">
          <div className="App">{title}</div>
        </Route>
        <Route path="/">
          <Redirect to="/title"></Redirect>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default People;
