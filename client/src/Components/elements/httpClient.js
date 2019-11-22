import axios from 'axios'
import jwtDecode from 'jwt-decode'
import { serverResponse } from 'http'



// instantiate axios

const httpClient = axios.create()



httpClient.getToken = function () {

    return localStorage.getItem = function () {
        // local storage only has a few in built fucntions - can be used to store a JWT.
    }

}
httpClient.setToken = function (token) {
    localStorage.setItem('token', token)
    return token

}


httpClient.getCurrentUser = function () {
    const token = this.getToken()
    if (token) return jwtDecode(token)
    return null
}

httpClient.logIn = function (credentials) {
    return this({
        method: 'post', url:
            '/api/users/authenticate', data: credentials
    })
        .then((ServerResponse) => {
            const token = serverResponse.data.token
            if (token) {
                //sets token as an included header for all subsequent api requests

                this.defaults.headers.common.token =
                    this.setToken(token)
                return jwtDecode(token)
            } else {
                return false
            }
        })
}


//Sign up function = if someone attempts to signup a seoncd time, will return false
httpClient.signUp = function (userInfo) {
    return this({
        method: 'post', url:
            '/api/users', data: userInfo
    })
        .then((serverResponse) => {
            const token =
                serverResponse.data.token
            if (token) {
                //sets token as an included header for all subsequent api requests
                    console.log(`signup`)


                    console.log(this.defaults)

                    this.defaults.headers.common.token =
                    this.setToken(token)


                    console.log(this.defaults)
                        return jwtDecode(token)
            }else{
                return false
            }
        })
    }
       httpClient.logout = function(){

        localStorage.removeItem('token')
        delete
        this.defaults.headers.common.token
        return true
       }


       // During intital app load attempt to set a localStorage stored token
       // as a default header for all api requests.
        httpClient.getToken()


        export default httpClient
       

        
    

