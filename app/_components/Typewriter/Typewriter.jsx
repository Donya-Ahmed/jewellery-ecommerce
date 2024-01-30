"use client"
import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 100, delay = 1000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [isReversed, setIsReversed] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isReversed && index < text.length) {
        setDisplayText((prevText) => prevText + text[index]);
        setIndex((prevIndex) => prevIndex + 1);

        if (index === text.length - 1) {
          setIsReversed(true);
        }
      } else if (index > 0) {
        setDisplayText((prevText) => prevText.slice(0, -1));
        setIndex((prevIndex) => prevIndex - 1);

        if (index === 1) {
          setIsReversed(false);
          setIsTypingComplete(true);
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [index, text, speed, isReversed]);

  useEffect(() => {
    if (isTypingComplete) {
      const timeout = setTimeout(() => {
        setDisplayText('');
        setIndex(0);
        setIsTypingComplete(false);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [isTypingComplete, delay]);

  return <span>{displayText}</span>;
};

export default Typewriter;

