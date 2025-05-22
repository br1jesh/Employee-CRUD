import { useState } from "react";
import Navbar from "../Component/Navbar";
import "./PostUser.css";
import { Button } from "react-bootstrap";
import axios from "axios";

const PostUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  
    try {
      const response = await axios.post("http://localhost:8080/api/employee", formData);
      console.log("User created:", response.data);
      alert("User created successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        department: "",
      });
    } catch (error) {
      console.error("Error occurred:", error);
      alert("Something went wrong!");
    }
  };
  
  

  return (
    <>
      <Navbar />

      <div className="MainContainer">
        <h2 className="heading">New User</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-1">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
              }}
            />
          </div>

          <div className="mb-1">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className="mb-1">
            <label className="form-label">Phone</label>
            <input
              type="tel"
              className="form-control"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) =>setFormData({...formData, phone: e.target.value})}
            />
          </div>

          <div className="mb-1">
            <label className="form-label">Department</label>
            <input
              type="text"
              className="form-control"
              name="department"
              placeholder="Department"
              value={formData.department}
              onChange={(e)=>setFormData({...formData,department: e.target.value})
              }
            />
          </div>

          <Button type="submit" className="btn btn-success">
            Create User
          </Button>
        </form>
      </div>
    </>
  );
};

export default PostUser;
