import { types } from "../types/types";

const initialState ={
    favoriteList:[],
}

export const favoriteListReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.getAddAnimeFavorite:
            return{
                ...state,
                favoriteList: [...state.favoriteList, action.payload]
            }
        case types.getRemoveAnimeFavorite:
            return {
                ...state,
                favoriteList: state.favoriteList.filter( favorite =>  favorite.id !== action.payload
                )
            }
        default:
            return state;
    }
}
