import { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const DashBoard = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/employees");
        setEmployees(response.data);
        console.log("All Employees:", response.data);
      } catch (error) {
        console.error("Error fetching all Employees:", error);
        alert("Something went wrong!");
      }
    };

    fetchEmployees();
  }, []);

  const handleDelete = async (employeeId) => {
    try {
      await axios.delete(`http://localhost:8080/api/employee/${employeeId}`);
      alert(`Employee deleted successfully: ${employeeId}`);
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  const handleUpdate =(employeeId)=>{
    navigate(`employee/${employeeId}`)
  }

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h2 className="mb-4 text-center">Employees</h2>
        <table className="table table-striped table-bordered shadow">
          <thead className="table-dark text-center">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Department</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr
                key={employee.id}
                className="table-warning text-center align-middle"
              >
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
                <td>{employee.department}</td>
                <td>
                  <div className="d-flex justify-content-center">
                    <button className="btn btn-primary btn-sm me-1"onClick={() => handleUpdate(employee.id)}
                    >
                      Edit
                    </button>
                    <button className="btn btn-danger btn-sm" onClick={()=> handleDelete(employee.id)} >Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DashBoard;
