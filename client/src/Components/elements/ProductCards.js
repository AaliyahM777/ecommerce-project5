import React from 'react';

// made a functional component
// destructing propdata out of props

function ProductCards(props) {
    const {proddata}=props
    return (
        <div className="row">
        {proddata.map(product => {
            return (
                
            <div className=" col-md-3 col-sm-6  under10" key={product.Product_id}>
                <div className="card">
                    <div className="work-img">
                        <a href="/products"><img src={product.Img_url} className="card-img-top img-fluid" alt="Pen1"/></a>
                        <div className="img-overlay"></div>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{product.Product_title}</h5>
                        <p className="card-text">{product.Product_Description}</p>
                        <p className="card-text">{product.Price_values } </p>
                    </div>
                </div>
            </div>
        )})}
      </div>  
    )
}

export default ProductCards;