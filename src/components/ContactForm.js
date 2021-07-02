
import React, {useState, useEffect} from 'react';

const ContactForm = () => {

    const initialFieldValues = {
        fullName: "",
        mobile: "",
        email: "",
        address: ""
    }

    var [values, setValues] = useState(initialFieldValues)

    return ( 
        <form autoComplete="off">
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Full Name" name="fullName" value={values.fullName}></input>
            </div>
            <div className = "form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                    </div>
                <input className="form-control" placeholder="Mobile" name="mobile" value={values.mobile}></input>
                </div>
            </div>

            <div>

            <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-envelope"></i>
                        </div>
                    </div>
                <input className="form-control" placeholder="E-mail" name="email" value={values.email}></input>
                </div>

            </div>
        </form>
     );
}
 
export default ContactForm;