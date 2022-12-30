import React, {useState} from 'react';
import CharacterFetch from './CharacterFetch';

const Characterstorage = () => {
  const [cleared, setCleared] = useState('Delete all');
  const storedCharObject = localStorage.getItem('characters') ?? '{}';
  const [array, setArray] = useState(Object.keys(JSON.parse(storedCharObject)));
  const [currentChar, setCurrentChar] = useState('');
  const [isFetched, setIsFetched] = useState(false);

  function fetchCharacter(event: any) {
    setIsFetched(false);
    setTimeout(() => {
      setIsFetched(true);
    }, 1);
    setCurrentChar(event.target.id);
    // $('#clear-storage').hide();

    // $('.stored-chars').css({background: 'white', color: 'black'});
    // $(event.target).css({background: 'black', color: 'white'});
  }

  async function deleteCharacter() {
    const charsObj = JSON.parse(storedCharObject);
    delete charsObj[currentChar];
    console.log(charsObj);
    setIsFetched(false);
    localStorage.setItem('characters', JSON.stringify(charsObj));
    setArray(Object.keys(charsObj));
    if (localStorage.getItem('characters') === '{}') {
      localStorage.removeItem('characters');
    }
  }

  return (
    <div id="stored-characters">
      <div id="stored-characters-list">
        {array.map(storedchar => (
          <button
            id={storedchar}
            key={storedchar}
            onClick={fetchCharacter}
            className="stored-chars"
          >
            {storedchar.replace(/-/g, ' ')}
          </button>
        ))}
      </div>

      <div id="storage-display">
        {isFetched ? <CharacterFetch deleteCharacter={deleteCharacter} charID={currentChar} /> : ''}
      </div>
    </div>
  );
};

export default Characterstorage;
