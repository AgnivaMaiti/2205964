import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = ({ onSelectUser }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzNjAwMjI3LCJpYXQiOjE3NDM1OTk5MjcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjI0YjcxYWUzLTQ3NTctNDlhZC05NDRhLTMyMjk1NTRhOWZmNyIsInN1YiI6Im1haXRpYWduaXZhQGdtYWlsLmNvbSJ9LCJlbWFpbCI6Im1haXRpYWduaXZhQGdtYWlsLmNvbSIsIm5hbWUiOiJhZ25pdmEgbWFpdGkiLCJyb2xsTm8iOiIyMjA1OTY0IiwiYWNjZXNzQ29kZSI6Im53cHdyWiIsImNsaWVudElEIjoiMjRiNzFhZTMtNDc1Ny00OWFkLTk0NGEtMzIyOTU1NGE5ZmY3IiwiY2xpZW50U2VjcmV0IjoiU1JUWmpSSlBqcmNOTmpiRyJ9.tHR8hsIWYS87vJlo3MLEp3Nb7CGzcWoPARHhy0C4Slo";  
            try {
                const response = await axios.get("http://20.244.56.144/evaluation-service/users", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUsers(response.data.users || []);
            } catch (error) {
                console.error("❌ Error fetching users:", error.response?.data || error.message);
                alert("Failed to load users");
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h2>👤 Users</h2>
            {loading ? <p>Loading users...</p> : (
                <ul>
                    {Object.entries(users).map(([id, name]) => (
                        <li key={id} onClick={() => onSelectUser(id)} style={{ cursor: "pointer" }}>
                            {name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Users;
