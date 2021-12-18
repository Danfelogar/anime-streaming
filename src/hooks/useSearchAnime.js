import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { animeActions } from "../actions/anime";
import { useForm } from "./useForm";

export const useSearchAnime = () => {

    const dispatch = useDispatch();

    const { actGetSearchAnimeByName } = animeActions();

    const { searchAnime } = useSelector(state => state.animeStreaming);

    const [ formValues, handleInputChange ] = useForm({animeName: ''});

    const { animeName } = formValues;

    useEffect(() => {
        dispatch(actGetSearchAnimeByName(animeName));

    }, [actGetSearchAnimeByName,animeName,dispatch]);

    const [showSearchDiv, setShowSearchDiv] = useState(false);

    const onMouseEnterSearch = () => {
        setShowSearchDiv(true);
    };

    const onMouseLeaveSearch = () => {
        setShowSearchDiv(false);
    };

    const searchContainer = useRef(null);

    return {
        animeName,
        handleInputChange,

        searchAnime,

        searchContainer,
        showSearchDiv,
        onMouseEnterSearch,
        onMouseLeaveSearch,
    }
}
