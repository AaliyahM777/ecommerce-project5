// how our react pages are connecting with our servers
   // here we use get products fucntion to fetch our products api
  const getProducts = () =>
    fetch('http://localhost:3001/api/products')



// here we fetch for our prices api we created which will include prices under 10 from database
const getPrices = () =>
fetch('http://localhost:3001/api/prices')

const getProductfilter = (category) =>
    fetch(`http://localhost:3001/api/productfilter/${category}`)
      
   export {getProducts, getProductfilter,getPrices}







