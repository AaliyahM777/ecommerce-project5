import React from 'react';
import ProductCards from '../elements/ProductCards'
import {getProducts, getProductfilter, getPrices} from '../../Routes/apiroutes'


// we created  a classical component which stores state and is seting data into an empty array
class Products extends React.Component {
    state={
        data:[]
    }
    // we use component did mount  to help allow us to set state method that will help change our app
    // and render or load our jsx data
    componentDidMount(){

        // calling our get products function from  apirouter
        // we return our response that will send our json object of all our products
       
        getProducts() // [Promise]
        .then (response => { return response.json()})
        .then(data => {this.setState({data})})

    }

 //   we render our   get filtered products as new funntion which we pass in category
 /* our getproduct filter function in which we request all our products 
 return our json object of our products filter depending on which filter category
*/

    render(){
        const getFilteredProducts = (category) => {
            getProductfilter(category)
            .then (response => { return response.json()})
            .then(data => {this.setState({data})})
            console.log('this- ', this.state)
        }
 // use same process above for our under 10 price filter
        const getPricess = () => {
            getPrices().then (response => { return response.json()})
            .then(data => {this.setState({data})})
            console.log('this- ', this.state);
        }
    return (
        <div>
            <body>
                <div id="products-page"></div>
                <div>
                    <section id="work">
                        <div className="penproducts">
                            <div className="row">
                                <div className="col-md-12 page-header">
                                    <h2>Our Products</h2>
                                    <p>Choose from our Pen collection</p>
                                </div>
                            </div>
                                 {/* we created onclick event that will call our categories bus,funartpens as our filter button */}
                            <div className="row">
                                <button className="filter-label" onClick={() => getFilteredProducts('businesspens')}>Business Pens</button>
                                <input type="radio" id="blue" name="color"/>
                                <button className="filter-label" onClick={() => getFilteredProducts('funartpens')}>Fun/Art Pens</button>
                                <input type="radio" id="red" name="color" />
                                <button className="filter-label" onClick={() => getPricess()}>Under $10</button>
                                <input type="radio" id="green" name="color" />
                                <input type="radio" id="reset" name="color" />
                                <label className="filter-label" htmlfor="reset">All</label>
                                
                                {/* we call our product cards this.state.data so we refresh the page 
                                it will give us a new set of product cards depending on what data is being requested */}
                                {<ProductCards proddata={this.state.data} />}
                                
                            </div>
                        </div>
                    </section>
            
                </div>
            </body>    
        </div>
    )}
}

export default Products;