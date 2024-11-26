const API_URL = "http://tobyjohansen.com:3000/api/v1/students";

export default function fetchStudents() {
  fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch students");
      }
      return response.json(); // Parse JSON data
    })
    .then(data => {
      console.log("Students:", data);
    })
    .catch(error => {
      console.error("Error:", error);
    });
}
