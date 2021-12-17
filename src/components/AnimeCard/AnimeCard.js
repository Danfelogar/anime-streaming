import { faEye, faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const AnimeCard = () => {
    return (
        <div className="card">
            <Link to="/id">
                <div className="img1"
                style={{backgroundImage: "url(http://cima4u.tv/wp-content/uploads/1-71.jpg)"}}
                ></div>
                <div className="img2"
                style={{backgroundImage: "url(http://cima4u.tv/wp-content/uploads/1-71.jpg)"}}
                ></div>
                <div className="title">VIKINGS series Season 1 || Epsoide 1</div>
                <div className="text-card">Now You can watch the first epsoide of the action series Vikings , wish you interesting watch</div>
                <div className="catagory">Series
                    <FontAwesomeIcon style={{marginLeft:"6px"}} icon={faFilm}/>
                </div>
                <div className="views">20211
                    <FontAwesomeIcon style={{marginLeft:"6px"}} icon={faEye}/>
                </div>
            </Link>
        </div>
    )
}
