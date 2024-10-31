import {MMKV} from 'react-native-mmkv'

const Storage=new MMKV();

const reduxStorage={
    setItem:(key,value)=>{
        Storage.set(key,value)
        return Promise.resolve(true);
    },
    getItem:(key,value)=>{
        const value=Storage.getString(key,value)
        return Promise.resolve(value);
    },
    removeItem:(key,value)=>{
        Storage.delete(key,value)
        return Promise.resolve();
    },
};
export default reduxStorage;