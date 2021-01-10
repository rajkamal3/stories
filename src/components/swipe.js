import React, { useState } from 'react';
import Stories from 'react-insta-stories';
import { useDispatch, useSelector } from 'react-redux';

const users = [
    {
        name: 'Richard',
        dp: './img/richard.jpg',
        stories: ['./img/w3.jpg']
    },
    {
        name: 'Gilfoyle',
        dp: './img/gilfoyle.jpg',
        stories: [
            './img/w8.jpg',
            {
                url: './vid/q.mp4',
                duration: 5000,
                type: 'video'
            }
        ]
    },
    {
        name: 'Dinesh',
        dp: './img/dinesh.jpg',
        stories: ['./img/w1.jpg', './img/d1.jpg']
    },
    {
        name: 'Jared',
        dp: './img/jared.jpg',
        stories: ['./img/w5.jpg']
    },
    {
        name: 'Erlich',
        dp: './img/erlich.jpg',
        stories: ['./img/w6.jpg']
    },
    {
        name: 'Monica',
        dp: './img/monica.jpg',
        stories: ['./img/w7.jpg']
    }
];

function Swipe() {
    const [currentUser, setCurrentUser] = useState('');
    const [stories, setStories] = useState();

    const userFromStore = useSelector(state => state.user);

    const dispatch = useDispatch();

    const usersOrder = users.map(user => {
        return user.name;
    });

    const handleUser = name => {
        setCurrentUser(name);
        currentStory(name);
    };

    const nextStory = curUser => {
        var currr = curUser;
        var nextUserIndex = usersOrder.indexOf(currr) + 1;
        var nextUser = usersOrder[nextUserIndex];

        // console.log(nextUser);
        dispatch({
            type: 'NEXT_USER',
            user: nextUser
        });

        currentStory(nextUser);
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

        // console.log(data);

        if (data.length !== 0) {
            document.querySelector('.storyHolder').style.display = 'block';
            const currUserStyle = Array.from(document.querySelectorAll('.userForStyle'));
            for (let i = 0; i < currUserStyle.length; i++) {
                if (currUserStyle[i].innerText === data[0].name) {
                    currUserStyle[i].querySelector('img').style.border = '3px dotted #25D366';
                } else if (currUserStyle[i].innerText !== data[0].name) {
                    currUserStyle[i].querySelector('img').style.border = 'none';
                }
            }
            setStories(data[0].stories);
        } else {
            document.querySelector('.storyHolder').style.display = 'none';
        }
    };

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    width: '75vw',
                    justifyContent: 'space-between',
                    marginBottom: '30px'
                }}
            >
                {users.map(user => {
                    return (
                        <div
                            key={user.name}
                            value={user.name}
                            onClick={() => handleUser(user.name)}
                            style={{
                                textAlign: '-webkit-center',
                                cursor: 'pointer'
                            }}
                            className="userForStyle"
                        >
                            <img
                                src={user.dp}
                                alt="user"
                                style={{
                                    display: 'block',
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '500px',
                                    boxSizing: 'border-box'
                                }}
                            />
                            {user.name}
                        </div>
                    );
                })}
            </div>
            <div
                style={{
                    textAlign: 'center'
                }}
                className="storyHolder"
            >
                {currentUser ? (
                    <>
                        <Stories
                            stories={stories}
                            onAllStoriesEnd={() => nextStory(currentUser)}
                            defaultInterval={3000}
                            width={750}
                            height={435}
                            storyStyles={{
                                width: 'auto',
                                maxWidth: '100%',
                                maxHeight: '100%',
                                margin: 'auto',
                                marginLeft: '160px'
                            }}
                        />
                    </>
                ) : (
                    <>
                        <span data-testid="status-v3-placeholder" data-icon="status-v3-placeholder">
                            <svg
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 80 80"
                                width="80"
                                height="80"
                            >
                                <path
                                    fill="currentColor"
                                    d="M30.566 78.982c-.222 0-.447-.028-.672-.087C12.587 74.324.5 58.588.5 40.631c0-3.509.459-6.989 1.363-10.343a2.625 2.625 0 0 1 5.068 1.366 34.505 34.505 0 0 0-1.182 8.977c0 15.578 10.48 29.226 25.485 33.188a2.625 2.625 0 0 1-.668 5.163zm19.355-.107C67.336 74.364 79.5 58.611 79.5 40.563c0-3.477-.452-6.933-1.345-10.27a2.624 2.624 0 1 0-5.071 1.356 34.578 34.578 0 0 1 1.166 8.914c0 15.655-10.545 29.319-25.646 33.23a2.625 2.625 0 0 0 1.317 5.082zM15.482 16.5C21.968 9.901 30.628 6.267 39.867 6.267c9.143 0 17.738 3.569 24.202 10.05a2.625 2.625 0 0 0 3.717-3.708C60.329 5.135 50.413 1.018 39.867 1.018c-10.658 0-20.648 4.191-28.128 11.802a2.624 2.624 0 1 0 3.743 3.68z"
                                ></path>
                            </svg>
                        </span>
                        <h1>Click on a contact to view their status updates</h1>
                    </>
                )}
            </div>
        </>
    );
}

export default Swipe;
