import { Avatar } from '@material-ui/core';
import React, { forwardRef } from 'react';
import './Post.css';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import FeedOption from './FeedOption';

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        {photoUrl && <Avatar alt="person photo" src={photoUrl}></Avatar>}
        {!photoUrl && <Avatar alt="person photo"> {name[0]}</Avatar>}
        {/* <Avatar src={photoURL} className="post__avatar">
          {name[0]}
        </Avatar> */}
        <div className="post__info">
          <h3>{name}</h3>
          <p> {description}</p>
        </div>
      </div>

      <div className="post__body">{message}</div>

      <div className="post__options">
        <FeedOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
        <FeedOption Icon={CommentOutlinedIcon} title="Comment" color="gray" />
        <FeedOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
        <FeedOption Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Post;
