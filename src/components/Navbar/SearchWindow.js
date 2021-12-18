import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useSearchAnime } from "../../hooks/useSearchAnime";

export const SearchWindow = () => {

    const { searchAnime } = useSearchAnime();

    return (
        <div className="searchWindow_wrapper">
        {
            searchAnime.map((search,idx)=>{
                return(
                    <div key={idx} className="search-card">
                        <img src={search.image_url} alt="art" />
                        <div className="search-content">
                            <div className="search-header">
                                <h1 className="search-title">{search.title}</h1>
                                <h4 className="search-info">
                                    <FontAwesomeIcon style={{marginRight:"10px", color:"#e9c46a"}} icon={faStar}/>
                                    score: {search.score}
                                </h4>
                            </div>
                            <p className="search-desc">{search.synopsis}</p>
                            <div style={{marginTop:"15px"}}>
                                <a  href={search.url} style={{textDecoration:"none", textAlign:"end"}} className="btn btn-more-infor">More information</a>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </div>
    )
}
