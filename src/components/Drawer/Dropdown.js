

import { Link } from "react-router-dom";
import { useDrawer } from "../../hooks/useDrawer";
import { arrayOfGenre } from "./arrayOfgenre";


export const Dropdown = () => {

    const { click, handleClick,closeMobileMenu } = useDrawer();

    return (
        <>
            <ul onClick={handleClick} className={click ? "dropdown-menu clicked" : "dropdown-menu"}>
                {
                    arrayOfGenre.map((genre,idx)=>{
                        return(
                            <li key={idx}>
                            <Link
                            to="#"
                            className="dropdown-link"
                            onClick={closeMobileMenu}
                            >
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
