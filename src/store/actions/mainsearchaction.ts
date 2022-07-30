import {MAINTYPESEARCH} from '../constants/index';
export const MainTypeSearch = (searchKey:string) =>{
    return {
        type:MAINTYPESEARCH,
        data:searchKey
    }
}