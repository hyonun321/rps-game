import React from 'react';
import styles from '../css/Card.module.css';

function Card({ title, choice, result, type, imageMap, defaultImage }) {

  const getCardClass = () => {
    if (!result) return '';
    
    if (type === 'user') {
      return result === '이겼다' ? styles.win : result === '졌다' ? styles.lose : styles.draw;
    } else {
      return result === '이겼다' ? styles.lose : result === '졌다' ? styles.win : styles.draw;
    }
  };

  const getResultText = () => {
    if (!result) return '선택하세요';
    
    if (type === 'user') {
      return result;
    } else {
      return result === '이겼다' ? '졌다' : result === '졌다' ? '이겼다' : '비겼다';
    }
  };

  const getImageSrc = () => {
    if (!choice) return defaultImage;
    return imageMap[choice].image;
  };

  const cardStyle = type === 'user' ? styles.userCard : styles.computerCard;

  return (
    <div className={`${styles.card} ${cardStyle} ${getCardClass()}`}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <div className={styles.imageContainer}>
        <img 
          src={getImageSrc()} 
          alt={choice ? imageMap[choice].name : '선택하세요'} 
          className={styles.choiceImage} 
        />
      </div>
      <p className={styles.resultText}>{getResultText()}</p>
    </div>
  );
}

export default Card;