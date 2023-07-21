import { useState, useEffect, useContext } from "react";
import axios from "axios";

import CurrentUserContext from "../contexts/CurrentsUsers";
import NotFound from "./NotFound";

export default function Kanji() {
  const [kanjis, setKanjis] = useState([]);
  const [filteredKanjis, setFilteredKanjis] = useState([]);
  const [selectedStroke, setSelectedStroke] = useState("");
  const [selectedKey, setSelectedKey] = useState("");
  const [selectedJlpt, setSelectedJlpt] = useState("");
  const { currentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/kanji`)
      .then((res) => {
        setKanjis(res.data);
        setFilteredKanjis(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    let filtered = kanjis;

    if (selectedStroke !== "") {
      filtered = filtered.filter((kanji) => kanji.stroke === selectedStroke);
    }
    if (selectedKey !== "") {
      filtered = filtered.filter((kanji) => kanji.key === selectedKey);
    }
    if (selectedJlpt !== "") {
      filtered = filtered.filter((kanji) => kanji.jlpt === selectedJlpt);
    }
    setFilteredKanjis(filtered);
  }, [kanjis, selectedStroke, selectedKey, selectedJlpt]);

  const handleDelete = (kanjiId) => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/kanji/${kanjiId}`)
      .then(() => {
        setKanjis((prevKanjis) =>
          prevKanjis.filter((kanji) => kanji.id !== kanjiId)
        );
      });
  };

  const handleStrokeFilter = (event) => {
    setSelectedStroke(event.target.value);
  };
  const handleKeyFilter = (event) => {
    setSelectedKey(event.target.value);
  };
  const handleJlptFilter = (event) => {
    setSelectedJlpt(event.target.value);
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {currentUser.isAdmin || currentUser.isUser ? (
        <div className="data_page">
          <div className="data-container">
            <span>KANJIS</span>
            <div className="filter-container">
              <label htmlFor="strokeFilter">Filtrer par : </label>
              <select
                id="strokeFilter"
                value={selectedStroke}
                onChange={handleStrokeFilter}
              >
                <option value="">Tous</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
              </select>
              <select
                id="keyFilter"
                value={selectedKey}
                onChange={handleKeyFilter}
              >
                <option value="">Toutes Clés</option>
                <option value="un">Un</option>
                <option value="personne">Personne</option>
                <option value="divination">Divination</option>
                <option value="bâton">Bâton</option>
                <option value="jour">Jour</option>
                <option value="arbre">Arbre</option>
                <option value="bambou">Bambou</option>
                <option value="toit">Toit</option>
                <option value="riz">Riz</option>
                <option value="eau">Eau</option>
                <option value="feu">Feu</option>
                <option value="fil">Fil</option>
                <option value="chemin">Chemin</option>
              </select>
              <select
                id="JlptFilter"
                value={selectedJlpt}
                onChange={handleJlptFilter}
              >
                <option value="">JLPT</option>
                <option value="1">Niveau 1</option>
                <option value="2">Niveau 2</option>
                <option value="3">Niveau 3</option>
                <option value="4">Niveau 4</option>
                <option value="5">Niveau 5</option>
              </select>
            </div>
            <table>
              <tr className="title-tr">
                <th scope="col">Kanji</th>
                <th scope="col">On 1</th>
                <th scope="col">On 2</th>
                <th scope="col">Kun 1</th>
                <th scope="col">Kun2</th>
                <th scope="col">Traits</th>
                <th scope="col">Clé</th>
                <th scope="col">Signification</th>
                <th scope="col">JLPT</th>
              </tr>
              {filteredKanjis.length &&
                filteredKanjis.map((kanji) => (
                  <tr key={kanji.id} className="desc-tr">
                    <th scope="row">{kanji.brand}</th>
                    <td>{kanji.model}</td>
                    <td>{kanji.ram} Go</td>
                    <td>{kanji.storage} Go</td>
                    <td>{kanji.screen} "</td>
                    <td>{kanji.network}</td>
                    <td>{kanji.loader === 1 ? "Oui" : "Non"}</td>
                    <td>
                      {0.2 * kanji.storage + 2 * kanji.ram + 2 * kanji.screen}
                    </td>
                    {currentUser.isAdmin && (
                      <td>
                        <button
                          type="button"
                          onClick={() => handleDelete(kanji.id)}
                        >
                          Supprimer
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
            </table>
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
}
