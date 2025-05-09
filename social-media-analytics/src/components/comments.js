import React, { useEffect, useState } from "react";
import axios from "axios";

const Comments = ({ userId }) => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchComments = async () => {
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzNjAwMjI3LCJpYXQiOjE3NDM1OTk5MjcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjI0YjcxYWUzLTQ3NTctNDlhZC05NDRhLTMyMjk1NTRhOWZmNyIsInN1YiI6Im1haXRpYWduaXZhQGdtYWlsLmNvbSJ9LCJlbWFpbCI6Im1haXRpYWduaXZhQGdtYWlsLmNvbSIsIm5hbWUiOiJhZ25pdmEgbWFpdGkiLCJyb2xsTm8iOiIyMjA1OTY0IiwiYWNjZXNzQ29kZSI6Im53cHdyWiIsImNsaWVudElEIjoiMjRiNzFhZTMtNDc1Ny00OWFkLTk0NGEtMzIyOTU1NGE5ZmY3IiwiY2xpZW50U2VjcmV0IjoiU1JUWmpSSlBqcmNOTmpiRyJ9.tHR8hsIWYS87vJlo3MLEp3Nb7CGzcWoPARHhy0C4Slo";
            try {
                const response = await axios.get(`http://20.244.56.144/evaluation-service/users/${userId}/comments`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setComments(response.data.comments || []);
            } catch (error) {
                console.error("❌ Error fetching comments:", error);
                alert("Failed to load comments");
            } finally {
                setLoading(false);
            }
        };

        fetchComments();
    }, [userId]);

    return (
        <div>
            <h2>💬 Comments on User {userId}’s Posts</h2>
            {loading ? <p>Loading comments...</p> : (
                <ul>
                    {comments.map((comment) => (
                        <li key={comment.id}><strong>{comment.name}</strong>: {comment.body}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Comments;
