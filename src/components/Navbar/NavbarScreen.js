import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const NavbarScreen = () => {
    return (
        <div className="search-toggle">
		    <input type="text" placeholder="Search an anime"/>
		    <i>
                <FontAwesomeIcon icon={faSearch}/>
            </i>
	    </div>
    )
}
