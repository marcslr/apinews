import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Profil.css";

function UserProfile() {
  const [userData, setUserData] = useState({});
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    // Fetch user data and saved articles from the server
    axios.get("/api/user-data").then((response) => {
      setUserData(response.data);
    });

    axios.get("/api/saved-articles").then((response) => {
      setSavedArticles(response.data);
    });
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      <div>
        <h2>User Information</h2>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
        {/* Display more user information as needed */}
      </div>

      <div>
        <h2>Saved Articles</h2>
        <ul>
          {savedArticles.map((article) => (
            <li key={article.id}>
              <a href={article.url}>{article.title}</a>
            </li>
          ))}
        </ul>
        {/* Display saved articles, and provide links or additional information as needed */}
      </div>
    </div>
  );
}

export default UserProfile;
