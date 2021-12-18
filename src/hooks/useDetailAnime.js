import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { animeActions } from "../actions/anime";

export const useDetailAnime = () => {

    //consumo de servicios

    // const { id } = useParams();

    const history = useHistory();

    const dispatch = useDispatch();

    const { nameAndDate,charactersAndStaff,picture,videos,episodes,news,moreInfo, } = useSelector(state => state.animeStreaming);

    const { actGetNameAndDate, actGetCharactersStaff, actGetPictures, actGetVideos, actGetEpisodes, actGetNews, actGetMoreInfo,} = animeActions();

    const handleNameAndDate = (name,date,id)=>{
        dispatch(actGetNameAndDate(name,date));
        dispatch(actGetCharactersStaff(id));
        dispatch(actGetPictures(id));
        dispatch(actGetVideos(id));
        dispatch(actGetEpisodes(id));
        setTimeout(() => {
            dispatch(actGetNews(id));
            dispatch(actGetMoreInfo(id));
            history.push(`/${id}`);
        }, 600);

        //toca esto porque me limitan a 2 peticiones por seg el db
    }

    return {
        nameAndDate,
        charactersAndStaff,
        picture,
        videos,
        episodes,
        news,
        moreInfo,

        handleNameAndDate
    }
}
