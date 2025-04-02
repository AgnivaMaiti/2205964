import React, { useEffect, useState } from "react";
import axios from "axios";

const Posts = ({ userId }) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzNjAwMjI3LCJpYXQiOjE3NDM1OTk5MjcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjI0YjcxYWUzLTQ3NTctNDlhZC05NDRhLTMyMjk1NTRhOWZmNyIsInN1YiI6Im1haXRpYWduaXZhQGdtYWlsLmNvbSJ9LCJlbWFpbCI6Im1haXRpYWduaXZhQGdtYWlsLmNvbSIsIm5hbWUiOiJhZ25pdmEgbWFpdGkiLCJyb2xsTm8iOiIyMjA1OTY0IiwiYWNjZXNzQ29kZSI6Im53cHdyWiIsImNsaWVudElEIjoiMjRiNzFhZTMtNDc1Ny00OWFkLTk0NGEtMzIyOTU1NGE5ZmY3IiwiY2xpZW50U2VjcmV0IjoiU1JUWmpSSlBqcmNOTmpiRyJ9.tHR8hsIWYS87vJlo3MLEp3Nb7CGzcWoPARHhy0C4Slo";
            try {
                const response = await axios.get(`http://20.244.56.144/evaluation-service/users/${userId}/posts`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setPosts(response.data.posts || []);
            } catch (error) {
                console.error("❌ Error fetching posts:", error);
                alert("Failed to load posts");
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [userId]);

    return (
        <div>
            <h2>📝 Posts by User {userId}</h2>
            {loading ? <p>Loading posts...</p> : (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}><strong>{post.title}</strong>: {post.body}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Posts;
