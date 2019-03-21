import { combineReducers } from "redux"
import FeatureReducer from "./FeatureReducer"

const rootReducer = combineReducers({
    Features: FeatureReducer,
})

export default rootReducer;