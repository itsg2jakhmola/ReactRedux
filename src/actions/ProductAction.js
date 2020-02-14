const store = require('../reducers/store').init()

export const addProduct = (products) => {
    return {
        type: 'ADD_PRODUCT',
        products
    }
}

export const deleteProduct = (id) => {
    return {
        type: 'DELETE_PRODUCT',
        id
    }
}

export const editProduct = (productid) => {
    return {
        type: 'EDIT_PRODUCT',
        productid
    }
}

export const updateProduct = (product) => {
    
    return {
        type: 'UPDATE_PRODUCT',
        product
    }
}
