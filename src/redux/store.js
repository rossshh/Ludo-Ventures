import reduxStorage from "./storage";
import rootReducer from "./rootReducer";
import {persistStorage,persistStore} from 'redux-persist'
import { configureStore } from "@reduxjs/toolkit";

const persistConfig={
    key:'root',
    storage:reduxStorage,
    whiteList: ['game'],
};

const persistedReducer=persistReducer(persistConfig,rootReducer);

export const store=configureStore({
    reducer:persistReducer,
    middleware:getDefaultMiddleware=>
        getDefaultMiddleware({
            serializableCheck:{
                ignoreActions: [FLUSH,REGISTER,REHYDRATE,PAUSE,PURGE,PERSIST]
            }
        })
})

export const persistor=persistStore(store);