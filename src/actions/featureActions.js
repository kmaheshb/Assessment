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

export const saveFeatureFlags = () => dispatch => {

    dispatch({
        type: SAVE_FEATURES_BEGIN,
        payload: []
    })

    fetch(HOST_SERVER + "AllAlertRestStatus", {
        method: "POST",
        headers: { 
            "Access-Control-Allow-Origin": "http://localhost:8080" ,
            "Access-Control-Allow-Methods" : "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers" : "Origin, Content-Type, X-Auth-Token",
            "Accept": "application/json"
        }
    })
    .then(response =>{
        if (response.ok)
            return response;
        else {
            dispatch({
            type: FETCH_ALERTS_ERROR,
            payload: []
            })
        }
    })
    .then(res => res.json())
    .then(alerts => {
        if (alerts.allAlertStatusList !== undefined)
            dispatch({
            type: FETCH_ALERTS_SUCCESS,
            payload: alerts.allAlertStatusList
            })
        }
    )
    .catch(err => {
        console.log(err)
        dispatch({
        type: FETCH_ALERTS_ERROR,
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

export const resetFeatures = () => dispatch => {
    dispatch({
        type: RESET_FEATURES,
        payload: null
    })
}