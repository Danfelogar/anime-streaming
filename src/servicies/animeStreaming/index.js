import axios from '../config';

export const animeStreamingServices = () =>{

    //pantalla principal "animes que estan en el top"
    const getTop =(tier)=>{
        return axios({
            method: 'GET',
            url: `/top/anime/1/${tier}`,
        })
    }

    //pantalla principal "animes segun su genero"
    const getGenre =(type)=>{
        return axios({
            method: 'GET',
            url: `search/anime?genre=${type}`,
        })
    }

    //personajes y actores que prestan sus voces
    const getCharactersStaff  =(animeId)=>{
        return axios({
            method: 'GET',
            url: `/anime/${animeId}/characters_staff`,
        })
    }

    //portada promocional
    const getPictures  =(animeId)=>{
        return axios({
            method: 'GET',
            url: `/anime/${animeId}/pictures`,
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
    const getMoreInfo =(animeId)=>{
        return axios({
            method: 'GET',
            url: `/anime/${animeId}/moreinfo`,
        })
    }

    //encontrar anime solamente por nombre en este caso pero puede llegar ameterce mas si asi lo amerita
    const getSearchAnimeByName =(animeName)=>{
        return axios({
            method: 'GET',
            url: `search/anime?q=${animeName}&limit=5`,
        })
    }

    return{
        getTop,
        getGenre,
        getCharactersStaff,
        getPictures,
        getVideos,
        getEpisodes,
        getNews,
        getMoreInfo,
        getSearchAnimeByName,
    }
}