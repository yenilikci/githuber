import React from 'react';

function About(props) {
    return (
        <div>
            <h1 className='text-6xl mb-4'>Githuber</h1>
            <p className='mb-4 text-2xl font-light'>
                A React app to search GitHub profiles and see profile details. This
                project is part of the
            </p>
            <p className='text-lg text-gray-400'>
                Version <span className='text-white'>1.0.0</span>
            </p>
        </div>
    );
}

export default About;
