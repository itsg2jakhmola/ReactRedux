const initialState = {
    products: [{id: 1, name:'prod'}]
}

const ProductReducer = (state = initialState, action) => {
    
    switch(action.type){
        case 'ADD_PRODUCT' :
            return {
                products: state.products.concat([action.products])
            }     
        case 'DELETE_PRODUCT':
            return {
                products: state.products.filter( (p) => p.id !== action.id)
            }  
        case 'EDIT_PRODUCT' :
            return {
                products: state.products.filter( (p) => p.id === action.productid)
            }
        case 'UPDATE_PRODUCT' : 
            var products = state.products.map( (p) => {
                if(p.id == action.product.id){
                    return {
                            ...p,
                            sku: action.product.sku,
                            productName: action.product.productName,
                            description: action.product.description,		
                            duration: action.product.duration,
                    }							
                } else {
                    return p;
                }
            });
        
            return {
                products: products
            }

        default:
            return state
    }
}

export default ProductReducer
