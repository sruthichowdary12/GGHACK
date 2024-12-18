import React, { useState } from 'react';
import './Community.css';

const Community = () => {
  const [posts, setPosts] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [pollOptions, setPollOptions] = useState(['Option 1', 'Option 2']);
  const [pollVotes, setPollVotes] = useState(Array(pollOptions.length).fill(0));
  const [pollQuestion, setPollQuestion] = useState('');

  const handlePost = (image, caption) => {
    const newPost = { image, caption, comments: [], poll: null };
    setPosts([...posts, newPost]);
  };

  const handleComment = (index, comment) => {
    const updatedPosts = [...posts];
    updatedPosts[index].comments.push(comment);
    setPosts(updatedPosts);
  };

  const handlePollVote = (postIndex, optionIndex) => {
    const updatedPosts = [...posts];
    updatedPosts[postIndex].poll.votes[optionIndex] += 1;
    setPosts(updatedPosts);
  };

  const handleCreatePoll = (index, question, options) => {
    const updatedPosts = [...posts];
    updatedPosts[index].poll = {
      question,
      options,
      votes: Array(options.length).fill(0),
    };
    setPosts(updatedPosts);
  };

  return (
    <div className="community">
      <h1 className="community-title">Community</h1>

      {/* Post Section */}
      <div className="post-creation">
        <h2>Create a Post</h2>
        <input type="file" accept="image/*" id="imageInput" />
        <input type="text" placeholder="Write a caption..." id="captionInput" />
        <button
          className="post-button"
          onClick={() =>
            handlePost(
              document.getElementById('imageInput').files[0],
              document.getElementById('captionInput').value
            )
          }
        >
          Post
        </button>
      </div>

      {/* Posts Display */}
      <div className="posts">
        {posts.map((post, index) => (
          <div key={index} className="post">
            <img src={URL.createObjectURL(post.image)} alt="Generated" className="post-image" />
            <p className="post-caption">{post.caption}</p>

            {/* Comments Section */}
            <div className="comments-section">
              <h3>Comments</h3>
              {post.comments.map((comment, i) => (
                <p key={i} className="comment">{comment}</p>
              ))}
              <div className="comment-input">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
                <button onClick={() => handleComment(index, newComment)}>Comment</button>
              </div>
            </div>

            {/* Poll Section */}
            {post.poll ? (
              <div className="poll-section">
                <h3>{post.poll.question}</h3>
                {post.poll.options.map((option, i) => (
                  <div key={i} className="poll-option">
                    <button onClick={() => handlePollVote(index, i)}>{option}</button>
                    <span>{post.poll.votes[i]} votes</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="poll-creation">
                <h3>Create a Poll</h3>
                <input
                  type="text"
                  placeholder="Poll question"
                  onChange={(e) => setPollQuestion(e.target.value)}
                />
                {pollOptions.map((option, i) => (
                  <input
                    key={i}
                    type="text"
                    value={option}
                    onChange={(e) => {
                      const updatedOptions = [...pollOptions];
                      updatedOptions[i] = e.target.value;
                      setPollOptions(updatedOptions);
                    }}
                  />
                ))}
                <button
                  onClick={() => handleCreatePoll(index, pollQuestion, pollOptions)}
                >
                  Add Poll
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
