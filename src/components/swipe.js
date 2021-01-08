import React, { useState } from 'react';
import Stories from 'react-insta-stories';

function Swipe() {
    const [currentUser, setCurrentUser] = useState('');
    const [stories, setStories] = useState();

    const users = [
        {
            name: 'Dinesh Chugtai',
            dp: './img/dinesh.jpg',
            stories: ['./img/d1.jpg', './img/d2.jpg', './img/d3.jpg']
        },
        {
            name: 'Monica Hall',
            dp: './img/monica.jpg',
            stories: ['./img/m1.jpg', './img/m2.jpg']
        },
        {
            name: 'Richard Hendricks',
            dp: './img/richard.jpg',
            stories: ['./img/r1.jpg', './img/r2.jpg', './img/r3.jpg', './img/r4.jpg']
        },
        {
            name: 'Erlich Bachman',
            dp: './img/erlich.jpg',
            stories: ['./img/p.mp4', './img/monica.jpg', './img/richard.jpg', './img/monica.jpg']
        },
        {
            name: 'Jared Dunn',
            dp: './img/jared.jpg',
            stories: ['./img/dinesh.jpg', './img/richard.jpg', 'dfjdkfdjn']
        }
    ];

    const usersOrder = users.map(user => {
        return user.name;
    });

    console.log(usersOrder);

    const handleUser = name => {
        setCurrentUser(name);
        console.log(name);
        currentStory(name);
    };

    const currentStory = cUser => {
        const curr = users.map(user => {
            if (user.name === cUser) {
                return user;
            }
        });
        var data = curr.filter(function (element) {
            return element !== undefined;
        });
        setStories(data);
        console.log(data);
    };

    const closeStories = () => {
        console.log('asdadb');
    };

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    width: '75vw',
                    // backgroundColor: 'rebeccapurple',
                    justifyContent: 'space-between',
                    marginBottom: '30px'
                }}
            >
                {users.map(user => {
                    return (
                        <div
                            key={user.name}
                            onClick={() => handleUser(user.name)}
                            style={{
                                textAlign: '-webkit-center',
                                cursor: 'pointer'
                            }}
                        >
                            <img
                                src={user.dp}
                                alt="user"
                                style={{
                                    display: 'block',
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '500px'
                                }}
                            />
                            {user.name}
                        </div>
                    );
                })}
            </div>
            <div>
                {currentUser && (
                    <Stories
                        stories={stories[0].stories}
                        onStoryEnd={() => setCurrentUser(usersOrder[1])}
                        onAllStoriesEnd={() => closeStories()}
                        defaultInterval={2000}
                        width={432}
                        height={768}
                    />
                )}
            </div>
        </>
    );
}

export default Swipe;
