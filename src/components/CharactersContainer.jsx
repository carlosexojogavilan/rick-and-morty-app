import { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import { ErrorIcon } from "../assets/icons/icons";
import Loader from "./Loader";

const CharacterContainer = ({ search }) => {
  const [characters, setCharacters] = useState([]); //Array to store the characters
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const endpoint = `https://rickandmortyapi.com/api/character/?name=${search}`;

  // The function below is used when I need to add more characters (button add more)
  const getMoreCharacters = async () => {
    try {
      const response = await fetch(endpoint + `&page=${page + 1}`);
      const data = await response.json();
      if (data.info.pages === page + 1) setLastPage(true);
      setCharacters((prevCharacters) => [...prevCharacters, ...data.results]);
    } catch (error) {
      console.error("Error fetching characters: ", error);
    } finally {
      setPage(page + 1);
    }
  };

  // The function below is used when I need to substitute the characters displayed (real time search)
  const getCharacters = async () => {
    setLoading(true);
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      if (data.results) {
        setCharacters(data.results);
        setPage(1);
        data.info.pages === page ? setLastPage(true) : setLastPage(false);
        setError(false);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getCharacters();
  }, [endpoint]);

  return (
    <section className="mt-20">
      <div className="flex items-center mb-10">
        <h2 className="min-w-fit text-3xl md:text-4xl text-white">
          List of characters
        </h2>
        <span className="w-full h-1 ml-4 bg-primary"></span>
      </div>
      {error ? (
        <div className="flex justify-center items-center gap-4 text-md md:text-2xl font-bold py-4 px-4 border-2 border-[#9C3F2C] bg-[#C9553E] rounded-xl">
          <img src={ErrorIcon}></img>
          There is no character with that name
        </div>
      ) : (
        <>
          {loading ? (
            <Loader />
          ) : (
            <>
              <ul className="flex justify-center flex-wrap gap-4">
                {characters.map((character) => (
                  <CharacterCard
                    key={character.id}
                    image={character.image}
                    status={character.status}
                    name={character.name}
                    specie={character.species}
                    gender={character.gender}
                    location={character.location.name}
                    origin={character.origin.name}
                  />
                ))}
              </ul>
              <button
                onClick={getMoreCharacters}
                className={`block mx-auto text-xl font-medium px-6 py-2 mt-10 border-2 border-[#829C1C] rounded-xl bg-primary hover:bg-[#9FBF22] disabled:opacity-50 disabled:cursor-not-allowed`}
                disabled={lastPage}
              >
                Load more
              </button>
            </>
          )}
        </>
      )}
    </section>
  );
};

export default CharacterContainer;
