import { animeStreamingServices } from '../servicies/animeStreaming';
import { types } from '../types/types';


const { getTop, getGenre, getCharactersStaff, getPictures, getVideos, getEpisodes, getNews, getMoreInfo, getSearchAnimeByName } = animeStreamingServices();

const actGetTop = (tier)=>async(dispatch)=>{
    try {
        const  res = await getTop(tier);
        const { top } = res.data;
        console.log(top)
        dispatch({
            type: types.getListTopAnimes,
            payload:top
        });
    } catch (e) {
        console.log(e)
    }
}

const actGetGenre = (type)=>async(dispatch)=>{
    try {
        const  res = await getGenre(type);
        const { results } = res.data;
        dispatch({
            type: types.getListWithGenre,
            payload: results
        });
    } catch (e) {
        console.log(e)
    }
}

const actGetCharactersStaff = (animeId)=>async(dispatch)=>{
    try {
        const  res = await getCharactersStaff(animeId);
        const { characters, staff } = res.data;

        //para limitar la busquedad porque la verdad son muchos xD
        const charactersLimit= characters.slice(0,40);
        const staffLimit= staff.slice(0,40);

        dispatch({
            type: types.getlistCharactersStaff,
            payload:{
                charactersLimit,
                staffLimit,
            }
        });
    } catch (e) {
        console.log(e)
    }
}

const actGetPictures = (animeId)=>async(dispatch)=>{
    try {
        const  res = await getPictures(animeId);
        const { pictures } = res.data;
        dispatch({
            type: types.getListPictures,
            payload: pictures
        });
    } catch (e) {
        console.log(e)
    }
}

const actGetVideos = (animeId)=>async(dispatch)=>{
    try {
        const  res = await getVideos(animeId);
        const { promo } = res.data;
        dispatch({
            type: types.getListVideos,
            payload: promo
        });
    } catch (e) {
        console.log(e)
    }
}

const actGetEpisodes = (animeId)=>async(dispatch)=>{
    try {
        const  res = await getEpisodes(animeId);
        const { episodes } = res.data;
        dispatch({
            type: types.getListEpisodes,
            payload: episodes
        });
    } catch (e) {
        console.log(e)
    }
}

const actGetNews = (animeId)=>async(dispatch)=>{
    try {
        const  res = await getNews(animeId);
        const { articles } = res.data;
        dispatch({
            type: types.getListNews,
            payload: articles
        });
    } catch (e) {
        console.log(e)
    }
}

const actGetMoreInfo = (animeId)=>async(dispatch)=>{
    try {
        const  res = await getMoreInfo(animeId);
        const { moreinfo } = res.data;
        dispatch({
            type: types.getMoreInfo,
            payload: moreinfo
        });
    } catch (e) {
        console.log(e)
    }
}

const actGetSearchAnimeByName = (animeName)=>async(dispatch)=>{
    try {
        const  res = await getSearchAnimeByName(animeName);
        const { results } = res.data;
        dispatch({
            type: types.getSearchAnime,
            payload: results
        });
    } catch (e) {
        console.log(e)
    }
}

const actGetNameAndDate = (name,date)=>(dispatch)=>{
    try {
        dispatch({
            type: types.getNameAndDate,
            payload:{
                name,
                date,
            }
        });
    } catch (e) {
        console.log(e)
    }
}
const actGetNameList = (name)=>(dispatch)=>{
    try {
        dispatch({
            type: types.getTitleOfListAnime,
            payload: name
        });
    } catch (e) {
        console.log(e)
    }
}


export const animeActions = ()=>{
    return{
        actGetTop,
        actGetGenre,
        actGetCharactersStaff,
        actGetPictures,
        actGetVideos,
        actGetEpisodes,
        actGetNews,
        actGetMoreInfo,
        actGetSearchAnimeByName,
        actGetNameAndDate,
        actGetNameList
    }
}