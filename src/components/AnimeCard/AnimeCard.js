import { faEye, faFilm, faTrophy, faStar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";

import { useDetailAnime } from "../../hooks/useDetailAnime";

export const AnimeCard = (anime) => {

    const { handleNameAndDate } = useDetailAnime();

    return (
        <div
        onClick={()=>handleNameAndDate(anime.title,anime.start_date,anime.mal_id)}
        className="card">
            <div>
                <div className="img1"
                style={{backgroundImage: `url(${anime.image_url})`}}
                ></div>
                <div className="img2"
                style={{backgroundImage: `url(${anime.image_url})`}}
                ></div>
                <div className="title">{anime.title}</div>
                <div className="text-card">
                    Start date: { anime.start_date }
                    <br/>
                    Start date: { anime.end_date ? anime.end_date : `Unknown date` }
                </div>
                <div className="score">{anime.score}
                    <FontAwesomeIcon style={{marginLeft:"6px"}} icon={faStar}/>
                </div>
                <div className="rank">{anime.rank}
                    <FontAwesomeIcon style={{marginLeft:"6px"}} icon={faTrophy}/>
                </div>
                <div className="catagory">{anime.type}
                    <FontAwesomeIcon style={{marginLeft:"6px"}} icon={faFilm}/>
                </div>
                <div className="views">{anime.members}
                    <FontAwesomeIcon style={{marginLeft:"6px"}} icon={faEye}/>
                </div>
            </div>
        </div>
    )
}
