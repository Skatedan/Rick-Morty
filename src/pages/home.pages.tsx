import { useCallback, useEffect, useState } from "react";
import axios from "axios";

import Character from "../components/Character/Character";
import Modal from "../components/Modal/Modal";

import "../../src/style/global.scss";
import "../App.css";
import { ICharacter } from "../components/Character/Character.interface";
import Search from "../components/Search/Search";

import { Link, useParams } from "react-router-dom";

const initialCharacterValues: ICharacter = {
  id: 0,
  name: "",
  status: "",
  species: "",
  type: "",
  gender: "",
  origin: {
    name: "",
    url: "",
  },
  location: {
    name: "",
    url: "",
  },
  image: "",
  episode: [],
  url: "",
  created: "",
  openModal: (data: number) => null,
  closeModal: () => null,
};

interface infoData {
  count: number;
  next: string | null;
  pages: number;
  prev: string | null;
}

const Home = () => {
  const { page = 1 } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [store, setStore] = useState<ICharacter[]>([]);
  const [info, setInfo] = useState<infoData>();

  const [arrayCharacter, setArrayCharacter] = useState<ICharacter[]>([]);
  const [singleCharacter, setSingleCharacter] = useState<ICharacter>(
    initialCharacterValues
  );

  const [ModalOpen, setModalOpen] = useState<boolean>(false);

  const api = `https://rickandmortyapi.com/api/character/?page=${page}`;
  useEffect(() => {
    try {
      axios.get(api).then((res) => {
        setStore(res.data.results);
        setInfo(res.data.info);
        console.log(res.data);
      });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log("Unexpected error", error);
      }
    }
  }, [api]);

  useEffect(() => {
    setLoading(true);
    setArrayCharacter(store);
    setLoading(false);
  }, [store]);

  const openaModal = useCallback(
    (id: number) => {
      const singleCharacterId = id;

      const singleCharacterFiltered = store.filter(
        (character) => character.id === singleCharacterId
      );

      setSingleCharacter(singleCharacterFiltered[0]);
      setModalOpen(true);

      document.body.classList.add("--isOpen");
    },
    [store, ModalOpen, setModalOpen, singleCharacter, setSingleCharacter]
  );

  const closeModal = () => {
    document.body.classList.remove("--isOpen");
    setModalOpen(false);
  };

  const restartSearch = useCallback(
    (keyword: string) => {
      setLoading(true);
      const newSearch = store.filter((character) =>
        character.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
      );

      if (newSearch.length > 0) {
        setArrayCharacter(newSearch);
      } else {
        setArrayCharacter(store);
      }
      setLoading(false);
    },
    [setArrayCharacter, store]
  );

  return (
    <section>
      {arrayCharacter && loading && <div>Loading</div>}
      <h1>Rick & Morty Wiki</h1>
      {!loading && (
        <>
          <Search handleSearch={restartSearch} />
          <Link to={"/favorites"}>Favorites</Link>

          {info?.prev != null ? (
            <Link to={`/pages/${Number(page) - 1}`}>Previous page</Link>
          ) : null}

          {info?.next != null ? (
            <Link to={`/pages/${Number(page) + 1}`}>Next page</Link>
          ) : null}

          <div className="character-list">
            {arrayCharacter.map((CharacterData) => (
              <Character
                key={CharacterData.id}
                {...CharacterData}
                openModal={openaModal}
              />
            ))}
            {ModalOpen && (
              <Modal {...singleCharacter} closeModal={closeModal} />
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default Home;
