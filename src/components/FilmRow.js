import { Link } from 'react-router-dom'
export const FilmRow = ({ film }) => {
    return (
        <tr>
            <td><Link to={`/films/${film.id}`}>{film.title}</Link></td>
            <td>{film.release_date}</td>
            <td>{film.rt_score}</td>
        </tr>
    )
}