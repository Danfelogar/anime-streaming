import axios from './index';

export const animeStreamingServices = () =>{

    //pantalla principal "animes que estan en el top"
    const getTop =(tier)=>{
        return axios({
            method: 'GET',
            url: `/top/anime/1/${tier}`,
        })
    }

    //personajes y actores que prestan sus voces
    const getCharactersStaff  =(animeId)=>{
        return axios({
            method: 'GET',
            url: `/anime/${animeId}/characters_staff`,
        })
    }

    //video promocional
    const getVideos  =(animeId)=>{
        return axios({
            method: 'GET',
            url: `/anime/${animeId}/videos`,
        })
    }

    //episodios
    const getEpisodes  =(animeId)=>{
        return axios({
            method: 'GET',
            url: `/anime/${animeId}/episodes`,
        })
    }

    //noticias del anime
    const getNews =(animeId)=>{
        return axios({
            method: 'GET',
            url: `/anime/${animeId}/news`,
        })
    }

    //recomendaciones de si ver  o no el anime
    const getRecommendations =(animeId)=>{
        return axios({
            method: 'GET',
            url: `/anime/${animeId}/recommendations`,
        })
    }
    //encontrar anime solamente por nombre en este caso pero puede llegar ameterce mas si asi lo amerita
    const getSearchAnimeByName =(animeName)=>{
        return axios({
            method: 'GET',
            url: `search/anime?q=${animeName}`,
        })
    }

    return{
        getTop,
        getCharactersStaff,
        getVideos,
        getEpisodes,
        getNews,
        getRecommendations,
        getSearchAnimeByName
    }
}