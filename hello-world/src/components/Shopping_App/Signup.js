import React, { useState } from 'react'
import '../../components/Shopping_App/Signup.css'

const Register = () => {

  const [data, setData] = useState({
    fname: "",
    lname: "",
    address: "",
    city: "",
    country: "",

});



const [error, setError] = useState({});


const formSubmit = (e) => {
    e.preventDefault();
    
    setData(data);
    setError(Validation(data));

}
console.log(data);
const Validation = (data) => {
    var error = [];
    if (!data.fname) {
        error.fname = "field is required..!"
    }
    else if (data.fname.length < 3) {
        error.fname = "First name is must be 3 characters"
    }
    if (!data.lname) {
        error.lname = "Field is required..!"
    }
    else if (data.lname.length < 3) {
        error.lname = "Last name is must be 3 characters"
    }
    if (!data.address) {
        error.address = "Field is required..!"
    }
    else if (data.address.length < 10) {
        error.address = "Address must be 10 characters"
    }
    if (!data.city) {

        error.city = "Field is required..!"
    }
    else if (data.city.length < 3) {
        error.city = "City is must be 3 characters"
    }
    if (!data.country) {
        error.country = "Field is required..!"
    }
    else if (data.country.length < 3) {
        error.country = "Country name is must be 3 characters"
    }
    // else {
    //     navigate("/Page2", { state: data })
    // }
    return error;
}


const formChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
}
  return (
    <div>
      <form>
        <div class="container">
          <center>  <h1> Registeration Form</h1> </center>
          <hr/>
          <form action='' onSubmit={formSubmit}>

                <div>
                    <label>First Name</label>
                    <input type="text"
                        name="fname"
                        value={data.fname}
                        onChange={formChange}
                    />
                </div>
                {error.fname && <p style={{ color: "Red" }}>{error.fname}</p>}

                <div>
                    <label>Last Name</label>
                    <input type="text"
                        name="lname"
                        value={data.lname}
                        onChange={formChange}
                    />
                </div>
                {error.lname && <p style={{ color: "Red" }}>{error.lname}</p>}

                <div>
                    <label>address</label>
                    <input type="text"
                        name="address"
                        value={data.address}
                        onChange={formChange}
                    />
                </div>
                {error.address && <p style={{ color: "Red" }}>{error.address}</p>}

                <div>
                    <label>city</label>
                    <input type="text"
                        name="city"
                        value={data.city}
                        onChange={formChange}
                    />
                </div>
                {error.city && <p style={{ color: "Red" }}>{error.city}</p>}

                <div>
                    <label>country</label>
                    <input type="text"
                        name="country"
                        value={data.country}
                        onChange={formChange}
                    />
                </div>
                {error.country && <p style={{ color: "Red" }}>{error.country}</p>}

               
                <button className='registerbtn' type='submit'>Next</button>

            </form>
           </div>
          </form>
        </div>
        )
}

export default Register