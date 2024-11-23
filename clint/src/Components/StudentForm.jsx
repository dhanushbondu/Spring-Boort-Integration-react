import React, { useState } from "react"; // Import React and useState for state management
import axios from "axios"; // Import Axios for making HTTP requests

function StudentForm() {
  // State variables to store form inputs
  const [id, setId] = useState(""); // Student ID
  const [name, setName] = useState(""); // Student Name

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    const studentData = { id, name }; // Prepare student data

    // Send the data to the backend
    axios
      .post("/insert-data", studentData) // POST request to the backend
      .then((response) => {
        alert("Student added successfully!"); // Show success message
        setId(""); // Clear the ID field
        setName(""); // Clear the Name field
      })
      .catch((error) => {
        console.error("Error adding student:", error); // Log errors
      });
  };

  return (
    <div>
      <h2>Add Student</h2>
      {/* Form to enter student details */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Student ID:</label>
          <input
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)} // Update ID state
            required
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} // Update Name state
            required
          />
        </div>
        <button type="submit">Add Student</button> {/* Submit button */}
      </form>
    </div>
  );
}

export default StudentForm;
