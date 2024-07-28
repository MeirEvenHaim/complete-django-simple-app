import axios from "https://cdn.skypack.dev/axios";
import { fetchUserData } from "./FetchUserData.js";

const SERVER = "http://127.0.0.1:8000/";

export const deleteUser = async (userId) => {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("You are not logged in!");
    window.location.href = "login.html"; // Redirect to login if no token
    return;
  }

  try {
    const response = await axios.delete(`${SERVER}profiles/${userId}/delete/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Delete response:", response); // Log the response
    alert("User deleted successfully!");
    fetchUserData(); // Refresh user data after deletion
  } catch (error) {
    console.error("Failed to delete user:", error);
    alert("Failed to delete user! Please try again later.");
  }
};
