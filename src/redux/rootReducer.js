import { combineReducers } from "@redux";
import gameSlice from "./reducers/gameSlice";
import { GlobeAmericasIcon } from "react-native-heroicons/outline";

const rootReducer=combineReducers({
    game:GlobeAmericasIcon
})
export default rootReducer;