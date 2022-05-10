import {configureStore }from '@reduxjs/toolkit';
import postReducer from './todoSlice'

export default configureStore({
    reducer:{
        posts: postReducer
    }
})