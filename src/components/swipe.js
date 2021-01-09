import React, { useEffect, useState } from 'react';
import Stories from 'react-insta-stories';
import { useDispatch, useSelector } from 'react-redux';

function Swipe() {
    const [currentUser, setCurrentUser] = useState('');
    const [stories, setStories] = useState();

    const appTheme = useSelector(state => state.theme);

    const dispatch = useDispatch();

    function changeTheme(theme) {
        dispatch({
            type: 'CHANGE_THEME',
            theme: theme
        });
    }

    let theCUser = '';

    let status = useEffect(() => {
        setCurrentUser(theCUser);
    }, [theCUser]);

    const users = [
        {
            name: 'Dinesh Chugtai',
            dp: './img/dinesh.jpg',
            stories: ['./img/w1.jpg', './img/w2.jpg', './img/w3.jpg']
        },
        {
            name: 'Monica Hall',
            dp: './img/monica.jpg',
            stories: ['./img/w4.jpg', './img/w5.jpg']
        },
        {
            name: 'Richard Hendricks',
            dp: './img/richard.jpg',
            stories: ['./img/w6.jpg', './img/w7.jpg', './img/w8.jpg', './img/w9.jpg']
        },
        {
            name: 'Erlich Bachman',
            dp: './img/erlich.jpg',
            stories: ['./img/w10.jpg', './img/monica.jpg', './img/richard.jpg', './img/monica.jpg']
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

    const handleUser = name => {
        setCurrentUser(name);
        theCUser = name;
        // console.log(name);
        currentStory(name);
        // console.log(event.target.getAttribute('value'));
        // setCurrentUser(event.target.getAttribute('value'));
    };

    const currentStory = cUser => {
        const curr = users.map(user => {
            if (user.name === cUser) {
                return user;
            }
        });

        // setCurrentUser(cUser);
        theCUser = cUser;

        var data = curr.filter(function (element) {
            return element !== undefined;
        });
        setStories(data);
        // closeStories(data);
        // console.log(data);
    };

    const nextStory = curUser => {
        var currr = curUser;
        var nextUserIndex = usersOrder.indexOf(currr) + 1;
        var nextUser = usersOrder[nextUserIndex];

        console.log(nextUser);
        // setCurrentUser(nextUser);
        theCUser = nextUser;
        // console.log(currentUser);
    };

    // const closeStories = () => {
    //     console.log(currentUser);
    // };

    return (
        <>
            <div>{appTheme}</div>
            <div onClick={() => changeTheme('nighty night')}>huellhuell</div>
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
                {currentUser ? (
                    <Stories
                        stories={stories[0].stories}
                        onAllStoriesEnd={() => nextStory(currentUser)}
                        defaultInterval={300}
                        width={432}
                        height={768}
                    />
                ) : (
                    <h1>Click on a contact to view their status updates</h1>
                )}
            </div>
            <div onClick={() => console.log(currentUser)}>click hue</div>
        </>
    );
}

export default Swipe;
