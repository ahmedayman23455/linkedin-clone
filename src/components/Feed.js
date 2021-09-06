import React, { useState, useEffect } from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import FeedOption from './FeedOption';
import PhotoIcon from '@material-ui/icons/Photo';
import MovieIcon from '@material-ui/icons/Movie';
import EventIcon from '@material-ui/icons/Event';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');
  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput('');
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon className="feed__inputIcon" />
          <form action="#" onSubmit={sendPost}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="feed__submitBtn">
              submit
            </button>
          </form>
        </div>

        <div className="feed__options">
          <FeedOption Icon={PhotoIcon} title="Photo" color="#71b5f8" />
          <FeedOption Icon={MovieIcon} title="Video" color="#84c067" />
          <FeedOption Icon={EventIcon} title="Event" color="#fddfb4" />
          <FeedOption
            Icon={AssignmentIcon}
            title="Write article"
            color="#fc9296"
          />
        </div>
      </div>

      <div className="feed__posts">
        <FlipMove>
          {posts.map(
            ({ id, data: { name, description, message, photoUrl } }) => {
              return (
                <Post
                  key={id}
                  name={name}
                  description={description}
                  message={message}
                  photoUrl={photoUrl}
                />
              );
            }
          )}
        </FlipMove>
      </div>
    </div>
  );
};

export default Feed;
