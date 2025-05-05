import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [owners, setOwners] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    zip_code: "",
    city: "",
    registration_number: "",
    mc_type: "",
  });

  // Fetch owners from the backend
  useEffect(() => {
    axios.get("http://localhost:3001/api/owners") // Change port if necessary

      .then(response => setOwners(response.data))
      .catch(error => console.error("Error fetching owners:", error));
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newOwner = {
        name,
        address,
        zip_code,
        city,
        registration_number,
        mc_type,
    };

    console.log("Registering new owner:", newOwner); // 🔥 Logs the registration data before sending it

    try {
        const response = await axios.post("http://localhost:5000/api/register", newOwner);
        console.log("Registration successful:", response.data); // 🔥 Logs success response from backend
    } catch (error) {
        console.error("Error registering user:", error); // 🔥 Logs any error
    }
};

  return (
    <div>
      <h1>🏍️ Tut og Kjør - MC Medlemsregister</h1>

      {/* Display list of owners */}
      <ul>
        {owners.map((owner) => (
          <li key={owner.id}>
            {owner.name} ({owner.mc_type}) - {owner.city}
          </li>
        ))}
      </ul>

      {/* Registration Form */}
      <h2>Register New Member</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
        <input type="text" name="zip_code" placeholder="Zip Code" value={formData.zip_code} onChange={handleChange} required />
        <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
        <input type="text" name="registration_number" placeholder="Registration Number" value={formData.registration_number} onChange={handleChange} required />
        <input type="text" name="mc_type" placeholder="Motorcycle Type" value={formData.mc_type} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;

