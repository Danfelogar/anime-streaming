import { faCrown, faHeart, faPlay, faTimesCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { arrayOfGenre } from "./arrayOfgenre"

export const DrawerScreen = () => {
    return (
        <nav className="drawer_wrapper">
            <div className="close_section">
                <FontAwesomeIcon icon={faTimesCircle} />
            </div>
            <div className="main_section">
                <h2><span>M</span>ain</h2>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faCrown} />
                        <h3 className="aaa">
                            Populars animes
                        </h3>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faHeart} />
                        <h3>
                            Favorites animes
                        </h3>
                    </li>
                </ul>
            </div>
            <div className="genre_section">
                <h2><span>G</span>enre</h2>
                <ul>
                    {
                        arrayOfGenre.map((gener,idx)=>{
                            return(
                                <li key={idx}>
                                    <FontAwesomeIcon icon={faPlay} />
                                    <h3>
                                        {gener.name}
                                    </h3>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul>
                    {
                        arrayOfGenre.map((gener,idx)=>{
                            return(
                                <li key={idx}>
                                    <FontAwesomeIcon icon={faPlay} />
                                    <h3>
                                        {gener.name}
                                    </h3>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul>
                    {
                        arrayOfGenre.map((gener,idx)=>{
                            return(
                                <li key={idx}>
                                    <FontAwesomeIcon icon={faPlay} />
                                    <h3>
                                        {gener.name}
                                    </h3>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}
