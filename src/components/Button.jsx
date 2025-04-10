import React from 'react';
import styles from '../css/Button.module.css';

function Button({ onClick, choice, disabled, image, text, type }) {
  const getButtonClass = () => {
    switch(type) {
      case 'scissors':
        return styles.scissors;
      case 'rock':
        return styles.rock;
      case 'paper':
        return styles.paper;
      case 'question':
        return styles.question;
      case 'reset':
        return styles.reset;
      default:
        return '';
    }
  };
  console.log(choice,type,disabled,disabled && choice !== type)
  return (
    <button 
      className={`${styles.choiceButton} ${getButtonClass()}`}
      onClick={() => onClick && onClick(choice)}
      disabled={disabled}
    >
      {image && <img src={image} alt={text} className={styles.buttonImage} />}
      <span className={styles.buttonText}>{text}</span>
    </button>
  );
}

export default Button;