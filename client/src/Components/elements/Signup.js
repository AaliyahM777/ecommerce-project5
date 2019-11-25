import React from 'react';
import httpClient from '../../httpClient';
import { Link } from 'react-router-dom';
// sign up form behaves almost identically to log in form. We could create a flexible Form component to use for both actions, but for now we'll separate the two:
class SignUp extends React.Component {
    state = {
        fields: { name: '', email: '', password: '' }
    }
    onInputChange(evt) {
        this.setState({
            fields: {
                ...this.state.fields,
                [evt.target.name]: evt.target.value
            }
        })
    }
    onFormSubmit(evt) {
        evt.preventDefault()
        httpClient.signUp(this.state.fields).then(user => {
            this.setState({ fields: { name: '', email: '', password: '' } })
            if (user) {
                this.props.onSignUpSuccess(user)
                this.props.history.push('/')
            }
        })
    }
    
    
    render() {
        const { name, email, password } = this.state.fields
        return (
            <div className='SignUp'>
                <h1>Sign Up</h1>
                <form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
                    <input 
                    type="text" 
                    placeholder="Name" 
                    id="Name" 
                    name="name" 
                    value={name} 
                    required
                    />
                    <input
                     type="text" 
                     placeholder="Email" 
                     id="Email" name="email" 
                     value={email} 
                     required
                     />
                    <input 
                    type="password" 
                    placeholder="Password" 
                    id="Password" 
                    name="password"
                    required 
                    value={password} />
                    <button className="btn btn-primary btnSpace">Sign Up</button>
                    <Link to="/login" className="btn btn-primary">Log In</Link>                 
                </form>
            </div>
        )
    }
}
export default SignUp