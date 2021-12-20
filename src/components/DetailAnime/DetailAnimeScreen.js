import { faComments, faHeart, faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useDetailAnime } from "../../hooks/useDetailAnime";

export const DetailAnimeScreen = () => {

    const { nameAndDate, charactersAndStaff, picture, videos, episodes, news, moreInfo,handleFavoriteList, searchOnList, } = useDetailAnime();

    return (
        <div className="detail_wrapper">
            <div className="detail_main">
                <div className="picture">
                    <img src={picture[0] ? picture[0].large : `https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg` } alt="anime cover"/>
                </div>
                <div className="text">
                    <div className="text_title1">
                        <h2>{nameAndDate.name}</h2>
                        <h3>{nameAndDate.date}</h3>
                    </div>
                    <div className="text_title2">
                        <h2>More information</h2>
                        <FontAwesomeIcon
                        style={ searchOnList && {color:"#e63946"}}
                        onClick={(e)=>handleFavoriteList(e,nameAndDate.id,picture[0].large,nameAndDate.name,nameAndDate.date)}
                        icon={ searchOnList ? faHeartbeat : faHeart}/>
                    </div>
                    <div className="text_content">
                        <h3>{ (moreInfo && moreInfo.length > 0)   ? moreInfo : `We are sorry but at the moment we do not have information about this anime`}</h3>
                    </div>
                    <div className="text_character">
                        <div className="text_characters" >
                            <h3>Characters</h3>
                            <div className="avatar-group">
                                {
                                    charactersAndStaff.charactersLimit
                                    ?(
                                        charactersAndStaff.charactersLimit.map((character,idx)=>{
                                            return(
                                                <div key={idx} className="avatar ">
                                                    <span className="tooltiptext">{character.name}</span>
                                                    <img src={character.image_url} alt="avatar"/>
                                                </div>
                                            )
                                        })
                                    )
                                    :(<div className="warning_text">Right now we don't have character to show</div>)
                                }
                            </div>
                        </div>
                        <div className="text_staff" >
                            <h3>Staff</h3>
                            <div className="avatar-group">
                                {
                                    charactersAndStaff.staffLimit
                                    ?
                                        charactersAndStaff.staffLimit.map((staff,idx)=>{
                                            return(
                                                <div key={idx} className="avatar">
                                                    <span className="tooltiptext">{staff.name}</span>
                                                    <img src={staff.image_url} alt="avatar"/>
                                                </div>

                                            )
                                        })
                                    :(<div className="warning_text">Right now we don't have staff to show</div>)
                                }
                            </div>
                        </div>
                    </div>
                    {
                        videos[0] &&
                        <a style={{textDecoration:"none"}} href={videos[0].video_url} className="btn btn-trailer">
                            Trailer
                        </a>
                    }
                </div>
            </div>
            <div className="detail_episodes">
                <h3 className="detail_episodes_title">{nameAndDate.name}<span style={{marginLeft:"8px"}}>Episodes</span></h3>
                <div className="cards_episodes">
                    {
                        episodes
                        ?(
                            episodes.map((episode,idx)=>{
                                return(
                                    <div key={idx} className="card_episode">
                                        <a style={{textDecoration:"none"}} href={episode.video_url}>
                                            <img src={picture[0].large} alt="caps"/>
                                        </a>
                                            Ep-{episode.episode_id}
                                    </div>
                                )
                            })
                        )
                        :(<div className="warning_text">Right now we don't have episodes to show</div>)
                    }
                </div>
            </div>
            <div className="detail_new">
                <h3> News of this anime </h3>
                <div className="detail_new_deck">
                    {
                        news
                        ?(
                            news.map((singleNew,idx)=>{
                                return(
                                    <div
                                    key={idx}
                                    className='deck'>
                                        <a style={{textDecoration:"none"}} href={singleNew.url}>
                                            <div className='card-new'>
                                                <header className='cardHeader'>
                                                    <FontAwesomeIcon style={{color: "#FFD433", margin: "10px"}} icon={faNewspaper}/>
                                                    <span className='cardHeader_account'>@{singleNew.title}</span>
                                                    <span className='cardHeader_date'>{singleNew.date}</span>
                                                </header>
                                                <div className='cardBody'>
                                                    <p className='cardText'>{singleNew.intro}</p>
                                                    <section className='cardStats'>
                                                    <span className='cardStats_stat cardStats_stat-comments'>{singleNew.comments}
                                                    <FontAwesomeIcon style={{marginLeft:"4px"}} icon={faComments}/>
                                                    </span>
                                                    </section>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                )
                            })
                        )
                        :(<div className="warning_text">Right now we don't have news to show</div>)
                    }
                </div>
            </div>
        </div>
    )
}
