import { LOGIN,
    INSCRIPTION,
    ADD_PRODUCT,
    AJOUTER_PANIER,
    DETAILS,FILTER_PRODUCT,
    MAX_PRICE,
    SUPPRIMER,
    SUPPRIMER_TOUS,
    SUPPRIMER_QUANTITE
} from "./ActionType";

export const login =  (user)  => ({
    type : LOGIN,
    payload : user
})

export const inscription = (firstname,lastname,username,email,password) => ({
    type : INSCRIPTION,
    payload : {
        firstname : firstname,
        lastname : lastname,
        username : username,
        email : email,
        password : password
    }
}) 

export const AddProduct = (id,title,price,category,description,image) => ({
    type : ADD_PRODUCT ,
    payload : {
        id : id,
        title : title,
        price : price,
        category : category,
        description : description,
        image : image,
    }
})

export const AddPanier = (product) => ({
    type : AJOUTER_PANIER,
    payload : product
})

export const details = (product) => ({
    type : DETAILS,
    payload : product
})

export const filtre = (category) => ({
    type : FILTER_PRODUCT,
    payload : category
})

export const supprimer = (product) => ({
    type : SUPPRIMER,
    payload : product
});

export const supprimrtTous = () => ({
    type : SUPPRIMER_TOUS
})

export const supprimerQuantit = (product) => ({
    type : SUPPRIMER_QUANTITE,
    payload : product
})



