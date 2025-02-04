"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";

const reviews = [
  {
    id: 1,
    text: "This is an amazing product!",
    author: "John Doe",
    photo: "/Screenshot 1.png",
  },
  {
    id: 2,
    text: "I love using this service!",
    author: "Jane Smith",
    photo: "/Screenshot 2.png",
  },
  {
    id: 3,
    text: "Highly recommend to everyone!",
    author: "Alice Johnson",
    photo: "/Screenshot3 .png",
  },
];

export default function Review() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    console.log("Review component rendered");
    console.log("Current Index:", currentIndex);
    console.log("Current Review:", reviews[currentIndex]);
  }, [currentIndex]);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextReview, 5000); // Change review every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='review-container'>
      <h3>What Our Clients Say</h3>
      <div className='review-carousel'>
        <Image
          src={reviews[currentIndex].photo}
          alt={reviews[currentIndex].author}
          className='review-photo'
          width={20}
          height={20}
        />
        <h4>{reviews[currentIndex].author}</h4>
        <div className='review'>
          <p>{reviews[currentIndex].text}</p>
        </div>
        <div className='button-container'>
          <button onClick={prevReview}>Previous</button>
          <button onClick={nextReview}>Next</button>
        </div>
      </div>
    </div>
  );
}
