import {
    FETCH_ALL_FEATURES_BEGIN,
    FETCH_ALL_FEATURES_SUCCESS,
    FETCH_ALL_FEATURES_ERROR,
    SAVE_FEATURES_BEGIN,
    SAVE_FEATURES_SUCCESS,
    SAVE_FEATURES_ERROR,
    UPDATE_FEATURE,
    RESET_FEATURES
} from './types'

import { HOST_SERVER } from '../constants'

export const fetchAllFeatures = () => dispatch => {
    dispatch({
        type: FETCH_ALL_FEATURES_BEGIN,
        payload: []
    })

    fetch(HOST_SERVER + "v1/features", {
        method: "GET",
        headers: { 
            "Accept": "application/json"
        }
    })
    .then(response =>{
        if (response.ok)
            return response;
        else {
            dispatch({
            type: FETCH_ALL_FEATURES_ERROR,
            payload: []
            })
        }
    })
    .then(res => res.json())
    .then(featureFlags => {
        if (featureFlags.listOfFeatures !== undefined)
            dispatch({
            type: FETCH_ALL_FEATURES_SUCCESS,
            payload: featureFlags.listOfFeatures
            })
        }
    )
    .catch(err => {
        console.log(err)
        dispatch({
        type: FETCH_ALL_FEATURES_ERROR,
        payload: []
        })
    })
}

export const saveFeatureFlag = (feature) => dispatch => {

    dispatch({
        type: SAVE_FEATURES_BEGIN,
        payload: []
    })

    fetch(HOST_SERVER + "v1/feature", {
        method: "POST",
        headers: { 
            "Access-Control-Allow-Origin": "http://localhost:8090",
            "Accept": "application/json",
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(feature)
    })
    .then(response =>{
        if (response.ok)
            return response;
        else {
            dispatch({
            type: SAVE_FEATURES_ERROR,
            payload: []
            })
        }
    })
    .then(res => res.json())
    .then(featureFlags => {
        if (featureFlags.listOfFeatures !== undefined)
            dispatch({
            type: SAVE_FEATURES_SUCCESS,
            payload: featureFlags.listOfFeatures
            })
        }
    )
    .catch(err => {
        console.log(err)
        dispatch({
        type: SAVE_FEATURES_ERROR,
        payload: []
        })
    })
}

export const updateFeature = (update) => dispatch => {
    dispatch({
        type: UPDATE_FEATURE,
        payload: update
    })
}

export const resetFeatures = (featureName) => dispatch => {
    dispatch({
        type: RESET_FEATURES,
        payload: featureName
    })
}