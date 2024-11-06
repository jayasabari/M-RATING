import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RatingForm = () => {
  const [ratings, setRatings] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [userId, setUserId] = useState('user123'); // Static user ID for simplicity

  const fetchRatings = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/ratings');
      setRatings(response.data);
    } catch (error) {
      console.error('Error fetching ratings:', error);
    }
  };

  const submitRating = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/ratings', {
        userId,
        rating,
        comment
      });
      fetchRatings(); // Refresh the list of ratings
    } catch (error) {
      console.error('Error submitting rating:', error);
    }
  };

  useEffect(() => {
    fetchRatings();
  }, []);

  return (
    <div>
      <h2>Submit Your Rating</h2>
      <form onSubmit={submitRating}>
        <label>
          Rating:
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            min="1"
            max="5"
            required
          />
        </label>
        <br />
        <label>
          Comment:
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Submit Rating</button>
      </form>

      <h2>All Ratings</h2>
      <ul>
        {ratings.map((r, index) => (
          <li key={index}>
            <strong>Rating:</strong> {r.rating} | <strong>Comment:</strong> {r.comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RatingForm;