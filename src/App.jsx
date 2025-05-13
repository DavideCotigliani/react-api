import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  // creo lo useState
  const [actresses, setActresses] = useState([])
  // altro State
  const [actors, setActors] = useState([])

  // creo la funzione per la chiamata AJAX
  const fetchMyCall = () => {
    axios.get("https://lanciweb.github.io/demo/api/actresses/")
      .then((response) => { setActresses(response.data), console.log(response.data) })
  }
  // creo useEffect per richiamare la funzione contenente la chiamata AJAX
  useEffect(() => {
    fetchMyCall()
  }, []);

  // seconda chiamata AJAX
  const fetchMySecondCall = () => {
    axios.get("https://lanciweb.github.io/demo/api/actors/")
      .then((response) => { setActors(response.data) })
  }
  // secondo useEffect per lista di attori
  useEffect(() => {
    fetchMySecondCall()
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
      <hr />
      <ul className='card-group'>
        {actors.map((actor) => (
          <li key={actor.id} className='card-group-item'>
            <div className="card rounded-0 d-flex flex-row">
              <div className="col-5">
                <div className="character-image">
                  <img src={actor.image} alt={actor.name} className='img-fluid' />
                </div>
              </div>
              <div className="col-7">
                <div className="characters-infos d-flex flex-column justify-content-between p-3">
                  <h3 className="actor-name">{actor.name}</h3>
                  <p className='actor-birth'>{actor.birth_year}</p>
                  <p className='actor-nationality'>{actor.nationality}</p>
                  <p className='actor-biography'>{actor.biography}</p>
                  <p className='actor-awards'>{actor.awards}</p>
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