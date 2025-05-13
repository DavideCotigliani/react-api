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
          <li key={actress.id} className='card-group-item'>{actress.name} {actress.birth_year}
            {actress.nationality} {actress.biography} {actress.image} {actress.awards}</li>
        ))}
      </ul>
    </>
  )
}

export default App
