import React, { useState } from "react";
import Users from "./users";
import Posts from "./posts";
import Comments from "./comments";

const Dashboard = () => {
    const [selectedUser, setSelectedUser] = useState(null);

    return (
        <div>
            <h1>📊 Social Media Analytics Dashboard</h1>
            <Users onSelectUser={setSelectedUser} />
            {selectedUser && (
                <>
                    <Posts userId={selectedUser} />
                    <Comments userId={selectedUser} />
                </>
            )}
        </div>
    );
};

export default Dashboard;
