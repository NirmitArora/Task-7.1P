import React from 'react';
import { Button } from 'semantic-ui-react';

export const WPage = () => {
    return (
        <div className="welcome-page">
            <h1>Welcome to DEV@Deakin</h1>
            <p>
                Thank you for signing up or logging in. You are now part of our community
                of developers!
            </p>
            <div className="cta-buttons">
                <Button primary>My Profile</Button>

                <Button primary>View Posts</Button>
            </div>
        </div>
    );
};
