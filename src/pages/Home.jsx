import React from 'react';

function Home(props) {
    const a = process.env.REACT_APP_GITHUB_URL
    console.log(a)
    return (
        <div>
            <h1 className="text-6xl">
                Welcome
            </h1>
        </div>
    );
}

export default Home;
