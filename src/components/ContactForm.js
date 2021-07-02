
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
        </form>
     );
}
 
export default ContactForm;