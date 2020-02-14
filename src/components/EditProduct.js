import React from 'react'
import ProductForm from './ProductForm'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { updateProduct } from '../actions/ProductAction'

class EditProduct extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isEdit: false,
            currentProduct : {
                sku: '',
                productName: '',
                description: '',
                duration: '',
            },
        }       
    }
    
    handleChange = e => {
        this.setState({
          ...this.state,
          currentProduct: {
            ...this.state.currentProduct,
            [e.target.name]: e.target.value
          }
        });
      };

    clickHandle = (e) => {
        e.preventDefault()
        const currentProduct =  this.state.currentProduct
        currentProduct.id = this.props.match.params.id
        
        this.props.updateProduct(currentProduct)
        this.props.history.push('/')
    }

    componentWillMount() {
        
        if(this.props.match.params && this.props.match.params.id) {
            this.setState({
                isEdit: true
            })
        }
    }   

    render() {
        
        return (
            <div>
                <ProductForm 
                  handleChange={this.handleChange}
                  clickHandle={this.clickHandle}
                  product={this.props.product}
                  isEdit={this.state.isEdit}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {    
    return {
        product: state.ProductReducer.products[0]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateProduct: (product) => dispatch(updateProduct(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct)