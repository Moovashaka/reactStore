import React, { Component } from 'react';
import Product from './Product.js';
import Title from './Title';
import {storeProducts} from '../data.js';
import { ProductConsumer } from '../context.js';

export default class ProductList extends Component {
  state={
    products: storeProducts
  };
  render () {
    console.log(this.state.products);
    return (
    <React.Fragment>
    <div className="py-5">
    <div className="container">
    <Title name="Our" title="Products" />
    <div className="row">
      <ProductConsumer>

      </ProductConsumer>
    </div>
    </div>
    </div>
    < /React.Fragment>
    //  <Product />

    )
  }
}
