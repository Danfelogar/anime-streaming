import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";
import { useDrawer } from "../../hooks/useDrawer";
import { arrayOfGenre } from "./arrayOfgenre";


export const Dropdown = () => {

    const { click, handleClick,closeMobileMenu,handleAnimeByGenre, } = useDrawer();

    return (
        <>
            <ul onClick={handleClick} className={click ? "dropdown-menu clicked" : "dropdown-menu"}>
                {
                    arrayOfGenre.map((genre,idx)=>{
                        return(
                            <li
                            onClick={()=>handleAnimeByGenre(genre.number,genre.name)}
                            key={idx}>
                                <Link
                                to="/"
                                className="dropdown-link"
                                onClick={closeMobileMenu}
                                >
                                    <FontAwesomeIcon style={{marginRight:"10px"}} icon={faPlay} />
                                    {genre.name}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}
