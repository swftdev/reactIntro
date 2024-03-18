import { useEffect, useState } from 'react';
import { API_URL } from "../constants"
import { FilmRow } from './FilmRow';
export const FilmTable = () => {
    const [films, setFilms] = useState([])
  
    const getFilms = async () => {
      let res = await fetch(API_URL + "/films")
      if (res.ok) {
        let json = await res.json()
        console.log(json)
        setFilms(json)
      }
    }
  
    useEffect(() => {
      getFilms()
    }, [])

    let rows = films.map(f => <FilmRow film={f}/>)
  
    return (
      <table>
        <tr>
          <th>Title</th>
          <th>Release Date</th>
          <th>RT Score</th>
        </tr>
        { rows }
      </table>
    )
  }