import React from 'react';
import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";

function Home(props) {
    return (
        <>
            <UserSearch/>
            <UserResults/>
        </>
    )
}

export default Home;
