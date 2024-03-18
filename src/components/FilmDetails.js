// /films/:filmId
import { useEffect, useState } from "react"
import { API_URL } from "../constants"
import { Link, useParams } from "react-router-dom"


export const FilmDetails = () => {
    let {filmId} = useParams()
    const [film, setFilm] = useState()

    useEffect(() => {
        getFilm(filmId)
    }, [])

    const getFilm = async (filmId) => {
        let res = await fetch(`${API_URL}/films/${filmId}`)
        if (res.ok){
            let json = await res.json()
            console.log(json)
            setFilm(json)
        }
    }


    return (<>
        { film && <Film film={film}/>}
        <Link to={"/"}>Back to the film table</Link>
    </>)
}

const Film = ({film}) => {
    return (
        <h1>
            {film.title}
        </h1>
    )

}