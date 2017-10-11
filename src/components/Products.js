import React, { Component } from 'react';
import { getProducts } from '../data.js';
import { Link } from 'react-router-dom';

export default class Products extends Component{
    constructor(){
        super()

        this.state={
            products:[]
        }
    }
    componentDidMount(){
        //this is where you would make http request to get product data.
        this.setState({
          products: getProducts()
        })
      }
    render(){
        const products = this.state.products.map((e,i)=>(
            <Link key= {i} to ={`/products/${e.id}`}>
                <p >{e.name}</p>
            </Link>
          ))
        return(
            <div>
                <h1>This is products page!</h1>
                { products }
            </div>
        )
    }
}