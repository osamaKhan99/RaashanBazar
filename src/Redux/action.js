export const addToCart = (id) => {
    return{
        type: 'ADD_TO_CART',
        id
    }    
}

export const removeCart = (id) => {
    return{
        type: 'REMOVE_FROM_CART',
        id
    }    
}

export const increaseCart = (id) => {
    return{
        type: 'INCREASE_CART',
        id
    }    
}

export const decreaseCart = (id) => {
    return{
        type: 'DECREASE_CART',
        id
    }    
}

export const emptyCart = () => {
    return{
        type: 'EMPTY_CART',
    }    
}