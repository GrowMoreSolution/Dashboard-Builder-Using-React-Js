import { BoxWidthId } from "../action/Confige";

const initialState ={
    selectedWId : ''
   
};

export default function BoxWidthReducer(state = initialState , action){
    switch(action.type){
        case BoxWidthId : 
        return{
            ...state,
            selectedWId  : action.selectedWid
            
        }
        default :
        return state
    }
}