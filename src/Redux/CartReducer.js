import { AJOUTER_PANIER, SUPPRIMER, SUPPRIMER_TOUS,SUPPRIMER_QUANTITE } from "./ActionType";

const initialState = {
items: []
}

export const CartReducer = (state = initialState,action) => {
    switch (action.type) {
        case AJOUTER_PANIER : 
            const existingItem = state.items.find(
                item => item.id === action.payload.id
            );
            if(existingItem){
                return {
                    ...state,
                    items : state.items.map(item => 
                        item.id ===action.payload.id 
                        ? {...item,quantity : item.quantity + 1} 
                        : item      
                    )
                }
            }
            return {
                ...state,
                items : [...state.items,{...action.payload , quantity : 1}
                ]
            }
        case SUPPRIMER : 
            return {
                ...state,
                items : state.items.filter((_,i) => 
                    i !== action.payload
                )
            }
        case SUPPRIMER_TOUS : 
            return {
                ...state,
                items : []
            }
        case SUPPRIMER_QUANTITE : 
            return {
                ...state,
                items : state.items.map(item => (
                    item.id === action.payload.id && item.quantity > 1
                    ? {...item,quantity : item.quantity - 1}
                    : item
                ))
            }
        default :
            return state ;
    }
}
