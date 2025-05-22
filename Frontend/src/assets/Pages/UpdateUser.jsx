import "./UpdateUser.css";
import Navbar from "../Component/Navbar";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateUser = () => {
  const { employeeId } = useParams(); // get ID from URL
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
  });

  
  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/employee/${employeeId}`);
        setFormData(response.data);
      } catch (error) {
        console.error("Failed to load employee:", error);
        alert("Error loading employee data");
      }
    };

    fetchEmployee();
  }, [employeeId]);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/employee/${employeeId}`, formData);
      alert("User updated successfully");
      navigate("/dashboard"); // Redirect back to dashboard
    } catch (error) {
      console.error("Update failed:", error);
      alert("Error updating user");
    }
  };

  return (
    <>
      <Navbar />
      <div className="MainContainer">
        <h2 className="heading">Update User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-1">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
              onChange={(e) => setFormData({ ...formData, department: e.target.value })}
            />
          </div>

          <Button type="submit" className="btn btn-success">
            Update User
          </Button>
        </form>
      </div>
    </>
  );
};

export default UpdateUser;
