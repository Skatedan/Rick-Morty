import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Character from '../components/Character/Character'
import { ICharacter } from '../components/Character/Character.interface'
import { RootState } from '../store'

const Favorites = () => {
  const characterListObj = useSelector((state: RootState) => state.favoritesCharacters)

  const {charactersList} = characterListObj;

  const [store, setStore] = useState<ICharacter[]>([]);
  console.log(charactersList)

  const api = `https://rickandmortyapi.com/api/character/[${charactersList}]`;
  console.log('api', api)
  useEffect(() => {
    try {
      axios.get(api).then((res) => {
        setStore(res.data);
      });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log("Unexpected error", error);
      }
    }
  },[api]);

  return (
    <section>
      <h1>Favorites Rick & Morty Wiki</h1>
      <Link to={'/'}>Home</Link>
          <div className="character-list">
            {store.map((CharacterData) => (
              <Character
                key={CharacterData.id}
                {...CharacterData}
              />
            ))}
            
          </div>
    </section>
  );
}

export default Favorites

