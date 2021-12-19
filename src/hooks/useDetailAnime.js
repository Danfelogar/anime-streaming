import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { animeActions } from "../actions/anime";

export const useDetailAnime = () => {

    //consumo de servicios

    // const { id } = useParams();

    const history = useHistory();

    const dispatch = useDispatch();

    const { nameAndDate,charactersAndStaff,picture,videos,episodes,news,moreInfo } = useSelector(state => state.animeStreaming);

    const { favoriteList } = useSelector(state => state.favoriteList);

    const { actGetNameAndDate, actGetCharactersStaff, actGetPictures, actGetVideos, actGetEpisodes, actGetNews, actGetMoreInfo,actgetClearAllDetail, actGetAddAnimeFavorite, actGetRemoveAnimeFavorite,} = animeActions();

    const handleNameAndDate = (name,date,id)=>{

        dispatch(actgetClearAllDetail())
        dispatch(actGetNameAndDate(name,date,id));
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

    const handleFavoriteList = (e,id,img,name,date)=>{
        e.preventDefault();

        const evaluation = favoriteList.find(favorite => favorite.id === id);
        console.log(evaluation)
        if(evaluation){
            dispatch(actGetRemoveAnimeFavorite(id));
        } else {
            dispatch(actGetAddAnimeFavorite(id,img,name,date));
        }
    }

    const searchOnList = favoriteList.find(favorite => favorite.id === nameAndDate.id);

    return {
        nameAndDate,
        charactersAndStaff,
        picture,
        videos,
        episodes,
        news,
        moreInfo,
        favoriteList,

        handleNameAndDate,
        handleFavoriteList,
        searchOnList,
    }
}
