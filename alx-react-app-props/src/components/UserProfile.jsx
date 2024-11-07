// src/components/UserProfile.jsx
import React, { useContext } from 'react';  // Import React and useContext from 'react'
import UserContext from './UserContext';    // Import UserContext from the correct path

const UserProfile = () => {
    const { name, age, bio } = useContext(UserContext); // Use useContext to access UserContext

    return (
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Bio: {bio}</p>
        </div>
    );
};

export default UserProfile;