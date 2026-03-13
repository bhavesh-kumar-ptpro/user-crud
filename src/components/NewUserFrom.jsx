import { useState } from "react";

export const NewUserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
    const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitting');
    
  };
  return (
    
    <form onSubmit={handleSubmit} style={{display:"grid",gap:"20px",marginLeft:"50%",}}>
      
      <input placeholder="Enter Name" name="name" value={formData.name} onChange={handleChange} />
      <input placeholder="Enter Email" name="email" value={formData.email} onChange={handleChange} />
      <input placeholder="Enter Mobile" name="mobile" value={formData.mobile} onChange={handleChange} />
      <input placeholder="Enter City" name="city" value={formData.city} onChange={handleChange} />
      <button style={{background:"black",color:"whitesmoke"}} type="submit">Submit</button>
    </form>
  );
};
