import { useState } from "react";
import { db } from "../lib/init-firebase";
import { collection, addDoc } from "firebase/firestore";

const Contact = () => {
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");

  const handleSubmit =  (e) => {
    e.preventDefault();
    console.log("testing");
    

     addDoc(collection(db, "Form"), {
      Address: address,
      Email: email,
      Name: name,
      Phone: phone,
      State: city,
      Zipcode: zip,
    })
    .catch((err) =>{
        console.log(err)
    })

    setName('')
    setAddress('')
    setEmail('')
    setPhone('')
    setCity('')
    setZip('')
    

    
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Contact Form</h1>
      <label>Address</label>
      <input
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      ></input>

      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>

      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>

      <label>Phone</label>
      <input
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      ></input>

      <label>City</label>
      <input
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      ></input>

      <label>Zip Code</label>
      <input
        placeholder="Zip Code"
        value={zip}
        onChange={(e) => setZip(e.target.value)}
      ></input>
      <input type="submit"></input>
    </form>
  );
};

export default Contact;
