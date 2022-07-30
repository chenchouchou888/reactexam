import {TYPESEARCH} from '../constants/index';
import { searchKey } from '../reducers/typesearchreducer';
export const typeSearch = (searchKey:searchKey) =>{
    return {
        type:TYPESEARCH,
        data:searchKey
    }
}