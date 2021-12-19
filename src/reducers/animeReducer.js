import { types } from "../types/types";

const initialState ={
    nameList:[],
    animeList:[],
    nameAndDate:[],
    charactersAndStaff:[],
    picture:[],
    videos:[],
    episodes:[],
    news:[],
    moreInfo:[],
    searchAnime:[],
}

export const animeReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.getListTopAnimes:
            return{
                ...state,
                animeList: action.payload
            }
        case types.getListWithGenre:
            return{
                ...state,
                animeList: action.payload
            }
        case types.getNameAndDate:
            return{
                ...state,
                nameAndDate: action.payload
            }
        case types.getlistCharactersStaff:
            return{
                ...state,
                charactersAndStaff: action.payload
            }
        case types.getListPictures:
            return{
                ...state,
                picture: action.payload
            }
        case types.getListVideos:
            return{
                ...state,
                videos: action.payload
            }
        case types.getListEpisodes:
            return{
                ...state,
                episodes: action.payload
            }
        case types.getListNews:
            return{
                ...state,
                news: action.payload
            }
        case types.getMoreInfo:
            return{
                    ...state,
                moreInfo: action.payload
            }
        case types.getSearchAnime:
            return{
                ...state,
                searchAnime: action.payload
            }
        case types.getTitleOfListAnime:
            return{
                ...state,
                nameList: action.payload
            }
        case types.getClearAllDetail:
            return{
                ...state,
                nameAndDate: initialState.nameAndDate,
                charactersAndStaff: initialState.charactersAndStaff,
                picture: initialState.picture,
                videos: initialState.videos,
                episodes: initialState.episodes,
                news: initialState.news,
                moreInfo: initialState.moreInfo,
            }
        default:
            return state;
    }
}
