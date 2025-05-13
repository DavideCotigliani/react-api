import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  // creo lo useState
  const [actresses, setActresses] = useState([])

  // creo la funzione per la chiamata AJAX
  const fetchMyCall = () => {
    axios.get("https://lanciweb.github.io/demo/api/actresses/")
      .then((response) => { setActresses(response.data), console.log(response.data) })
  }
  // creo useEffect per richiamare la funzione contenente la chiamata AJAX
  useEffect(() => {
    fetchMyCall()
  }, []);

  return (
    <>
      <ul className='card-group'>
        {actresses.map((actress) => (
          <li key={actress.id} className='card-group-item'>
            <div className="card rounded-0 d-flex flex-row">
              <div className="col-5">
                <div className="character-image">
                  <img src={actress.image} alt={actress.name} className='img-fluid' />
                </div>
              </div>
              <div className="col-7">
                <div className="characters-infos d-flex flex-column justify-content-between p-3">
                  <h3 className="actress-name">{actress.name}</h3>
                  <p className='actress-birth'>{actress.birth_year}</p>
                  <p className='actress-nationality'>{actress.nationality}</p>
                  <p className='actress-biography'>{actress.biography}</p>
                  <p className='actress-awards'>{actress.awards}</p>
                  <p></p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App



{/* <div className="card rounded-0 d-flex flex-row">
                <div className="col-5">
                  <div className="character-image">
                    <img
                      src={character.image}
                      alt={character.name}
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-7">
                  <div className="character-infos d-flex flex-column justify-content-between p-3">
                    <h3 className="character-name">{character.name}</h3>
                    <p className="character-status">
                      <span
                        className={`status-icon is-${character.status.toLowerCase()}`}
                      ></span>
                      {character.status} */}