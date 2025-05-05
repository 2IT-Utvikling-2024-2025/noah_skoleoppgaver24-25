import React, { useState } from "react";

function Register() {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        zip_code: "",
        city: "",
        registration_number: "",
        mc_type: "",
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/mc_owners", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert("Bruker registrert!");
            setFormData({
                name: "",
                address: "",
                zip_code: "",
                city: "",
                registration_number: "",
                mc_type: "",
                username: "",
                password: "",
            });
        } else {
            alert("Feil ved registrering");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Registrer ny MC-eier</h2>
            <input type="text" name="name" placeholder="Navn" onChange={handleChange} value={formData.name} required />
            <input type="text" name="address" placeholder="Adresse" onChange={handleChange} value={formData.address} required />
            <input type="text" name="zip_code" placeholder="Postnummer" onChange={handleChange} value={formData.zip_code} required />
            <input type="text" name="city" placeholder="Poststed" onChange={handleChange} value={formData.city} required />
            <input type="text" name="registration_number" placeholder="Registreringsnummer" onChange={handleChange} value={formData.registration_number} required />
            <input type="text" name="mc_type" placeholder="MC-type" onChange={handleChange} value={formData.mc_type} required />
            <input type="text" name="username" placeholder="Brukernavn" onChange={handleChange} value={formData.username} required />
            <input type="password" name="password" placeholder="Passord" onChange={handleChange} value={formData.password} required />
            <button type="submit">Registrer</button>
        </form>
    );
}

export default Register;
