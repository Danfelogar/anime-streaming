import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { AnimeScreen } from "../components/Anime/AnimeScreen";
import { DetailAnimeScreen } from "../components/DetailAnime/DetailAnimeScreen";

import { DrawerScreen } from "../components/Drawer/DrawerScreen";
import { FavoritesAnime } from "../components/FavoritesAnime/FavoritesAnime";

import { NavbarScreen } from "../components/Navbar/NavbarScreen";

export const AppRouter = () => {
    return (
        <Router>
            <DrawerScreen/>
            <NavbarScreen/>
            <Switch>
                <Route exact path="/">
                    <AnimeScreen/>
                </Route>
                <Route exact path="/favoritesList">
                    <FavoritesAnime/>
                </Route>
                <Route path="/id" >
                    <DetailAnimeScreen/>
                </Route>
                <Redirect to="/" />
            </Switch>
        </Router>
    )
}
