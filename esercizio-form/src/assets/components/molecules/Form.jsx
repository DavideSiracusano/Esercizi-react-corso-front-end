import { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Label from "../atoms/Label";

function Form() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    age: "",
    country: "",
    gender: "",
    newsletter: false,
    interests: [],
  });

  const [errors, setErrors] = useState({});

  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (formData.age < 0) {
      newErrors.age = "Age must be a valid number";
    }

    if (!formData.country) {
      newErrors.country = "Country is required";
    }

    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }

    if (formData.interests.length === 0) {
      newErrors.interests = "At least one interest is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const updateField = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const updateCheckbox = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleInterestChange = (interest) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest) // Rimuovi se già presente
        : [...prev.interests, interest], // Aggiungi se non presente
    }));

    setErrors((prev) => ({ ...prev, interests: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Form validated successfully!");
      console.log(formData);
      setSubmitted(true);
    } else {
      alert("Form validation failed!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input text */}
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={formData.username}
          name="username"
          onChange={updateField}
        />
        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
      </div>
      {/* Input email */}
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={formData.email}
          name="email"
          onChange={updateField}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      {/* Input age */}
      <div>
        <label>Age:</label>
        <input
          type="number"
          value={formData.age}
          name="age"
          onChange={updateField}
        />
        {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}
      </div>
      {/* Select dropdown */}
      <div>
        <label>Paese:</label>
        <select value={formData.country} name="country" onChange={updateField}>
          <option value="">Seleziona un paese</option>
          <option value="italy">Italia</option>
          <option value="france">Francia</option>
          <option value="germany">Germania</option>
        </select>
        {errors.country && <p style={{ color: "red" }}>{errors.country}</p>}
      </div>
      {/* Radio buttons */}
      <div>
        <label>Genere:</label>
        <label>
          <input
            type="radio"
            value="male"
            name="gender"
            checked={formData.gender === "male"}
            onChange={updateField}
          />
          Maschio
        </label>
        <label>
          <input
            type="radio"
            value="female"
            name="gender"
            checked={formData.gender === "female"}
            onChange={updateField}
          />
          Femmina
        </label>
        {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}
      </div>
      {/* Checkbox singolo */}
      <div>
        <label>
          <input
            type="checkbox"
            name="newsletter"
            checked={formData.newsletter}
            onChange={updateCheckbox}
          />
          Iscriviti alla newsletter
        </label>
      </div>
      {/* Checkbox multipli */}
      <div>
        {["Sport", "Musica", "Viaggi", "Tecnologia"].map((interest) => (
          <label key={interest}>
            <input
              type="checkbox"
              name="interests"
              checked={formData.interests.includes(interest)}
              onChange={() => handleInterestChange(interest)}
            />
            {interest}
          </label>
        ))}
      </div>
      {errors.interests && <p style={{ color: "red" }}>{errors.interests}</p>}

      {/* Input textarea */}
      <div>
        <Button type="submit">Invia</Button>
        {submitted && <p>form inviato con successo!</p>}
      </div>
    </form>
  );
}

export default Form;
