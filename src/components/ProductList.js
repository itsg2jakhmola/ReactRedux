import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteProduct, editProduct } from '../actions/ProductAction'

class ProductList extends React.Component {

    constructor(props) {
        super(props)
    }

    editProduct(id) {   
        this.props.editProd(id)
        this.props.history.push('/edit/' + id);
    }

    deleteProduct(id) {
        this.props.delProd(id)
    }

    render() {
        const { products } = this.props             
        return (
            <div>                
                <Link to="add-product">Add to Product</Link>  
                <h2>Product List</h2>

                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">SKU</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Desciption</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           products && products.map(product => (
                               <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.sku}</td>
                                    <td>{product.productName}</td>
                                    <td>{product.description}</td>
                                    <td>{product.duration}</td>
                                    <td>
                                        <button onClick={() => this.editProduct(product.id)}>Edit</button> | 
                                        <button onClick={() => this.deleteProduct(product.id)}>Delete</button>
                                    </td>
                               </tr>
                           ))
                       }
                    </tbody>
                    </table>

            </div>
        )
    }
}

const mapStateToProps = state => {  
    return {
        products: state.ProductReducer.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
      delProd: (id) => dispatch(deleteProduct(id)),
      editProd: (id) =>  dispatch(editProduct(id))
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(ProductList)