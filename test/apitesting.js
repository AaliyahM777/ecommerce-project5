// used chai as expect so we dont have to use chai.expect each time
const expect = require('chai').expect;
const request = require('request');


// described all my test named in string called tests wrapped in  a function
describe('TESTS', () => {
    // 
    it('returns and array of all products on products page', function (done) {
        request('http://localhost:3001/api/products', function (error, response, body) {
            let newData = JSON.parse(body)
            expect(newData).to.be.an('array');
       
        done();
    });
    });
    
    it('returns  array of all contacts from contacts page ', function (done){
        request('http://localhost:3001/api/contacts', function (error,response,body){
            let newData= JSON.parse(body)
            expect(newData).to.be.an('array');
            done();
        });
    });
    it('returns home page status', function (done){
        request('http://localhost:3001/', function (error,response,body){
           expect(response.statusCode).to.equal(500);
            done();
        });
    });
    it('returns product category filter status', function (done){
        request('http://localhost:3001/api/productfilter/funartpens', function (error,response,body){
            let newData = JSON.parse(body)             
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    
})


