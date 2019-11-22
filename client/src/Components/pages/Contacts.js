import React from 'react';


function Contacts() {


    const submitForm =(e)=>{
        e.preventDefault();

        const nameInput = document.querySelector('#full-name').value;
        const emailInput = document.querySelector('#email').value;
       
         if(nameInput.length === 0){
            document.querySelector('#name-error').innerHTML = 'This field is required';
         }

         if(emailInput.length === 0){
            document.querySelector('#email-error').innerHTML = 'This field is required';
         }
    }

    const changeInput = (inputId) => {
        
        if(inputId==='name'){            
            document.querySelector('#name-error').innerHTML = '';
        }

        if(inputId==='email'){
            document.querySelector('#email-error').innerHTML = '';
        }
    }

    return (
      
            <body>
                <div className="container2">
                    <header>
                        <h1> Need More Information?</h1>
                        <h2> Contact Us!</h2>
                    </header>
                    <hr />
                    <h3>Get started by filling out your information below here</h3>
                </div>

                <div>
                    <form className="myform" onSubmit={submitForm} name="my_form">
                        <fieldset>
                            <legend>General Information</legend>
                                <div className="row">
                                <div className="col">
                                    <label for="Full Name">Full Name:</label>
                                    
                                    <input type="text" onChange={() => changeInput('name') } name="Full Name" id="full-name" placeholder="John" />
                                    <div id="name-error"></div>
                                </div>

                              </div>
                                <div className="row">
                                <div className="col">
                                    <label for="Email Address">Email Address:</label>
                                    <input type="text" onChange={() => changeInput('email') }name="Email" id="email" placeholder="John345@gmail.com" />
                                    <div id="email-error"></div>
                                </div>
                                </div>
                        </fieldset>

                        <fieldset>
                            <div className="row">
                                <div className="col">
                                    <label for="essay">For any questions or comments <br />add your message down below here:</label><br />

                                    <textarea name="essay" id="essay" rows="20" cols="50" placeholder="Comment here"></textarea>
                                </div>
                            </div>
                        </fieldset>
                        <input type="submit" value="submit" />
                    </form>
    


    
                </div>

            </body>
      
    )
}

export default Contacts;