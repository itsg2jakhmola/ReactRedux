import React, { Component } from 'react'
import ProductForm from './ProductForm'
import shortid from 'shortid'
import { connect } from 'react-redux'
import * as actions from '../actions/ProductAction'
import { addProduct } from '../actions/ProductAction'
class AddProduct extends Component {

    constructor(props) {
        super(props)

        this.state = {
            products: [],
            currentProduct : {
                sku: '',
                productName: '',
                description: '',
                duration: '',
            },
            isEdit: false
        }       
    }

    handleChange = (e) => {
         this.setState({
           currentProduct: {
            ...this.state.currentProduct,
            [e.target.name]: e.target.value
           }
       })
    }

    componentWillMount() {
        if(this.props.match.params && this.props.match.params.id) {
            this.setState({
                isEdit: true
            }) 
        }
    }

    clickHandle = (e) => {
        e.preventDefault()
       
        const currentProduct = this.state.currentProduct;
        currentProduct.id = shortid.generate();
       
        //this.props.dispatch(actions.addProduct(currentProduct))
        this.props.addProduct(currentProduct)

        this.props.history.push('/');
        // this.setState({
        //     products: [...this.state.products, currentProduct]
        // })
    }

    render() {
        
        return (
            <ProductForm 
                handleChange={this.handleChange}
                clickHandle={this.clickHandle}
                products={this.state.currentProduct}
                isEdit={this.state.isEdit}
            />
        )
    }
}

const mapDispatchToProps = dispatch => {
       return {
            addProduct: (product) =>  dispatch(addProduct(product))
       }
}

export default connect(null, mapDispatchToProps)(AddProduct)