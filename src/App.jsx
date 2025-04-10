import { useState } from 'react';
import Card from './components/Card';
import Button from './components/Button';
import styles from './css/App.module.css';

import questionImg from './assets/question.png';
import rockImg from './assets/rock.png';
import paperImg from './assets/paper.png';
import scissorsImg from './assets/scissors.png';

function App() {
  const choices = {
    scissors: { image: scissorsImg, name: '가위', id: 'scissors' },
    rock: { image: rockImg, name: '바위', id: 'rock' },
    paper: { image: paperImg, name: '보', id: 'paper' }
  };

  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const generateComputerChoice = () => {
    const options = Object.keys(choices);
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  };

  const determineWinner = (user, computer) => {
    if (user === computer) return '비겼다';
    
    if (
      (user === 'rock' && computer === 'scissors') ||
      (user === 'paper' && computer === 'rock') ||
      (user === 'scissors' && computer === 'paper')
    ) {
      return '이겼다';
    }
    
    return '졌다';
  };

  const handleUserChoice = (choice) => {
    const compChoice = generateComputerChoice();
    
    setUserChoice(choice);
    setComputerChoice(compChoice);
    setResult(determineWinner(choice, compChoice));
  };

  const resetGame = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult(null);
  };

  const play = (choice) => {
    handleUserChoice(choice);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.gameTitle}>가위바위보 게임</h1>
      
      <div className={styles.gameArea}>
        <Card 
          title="너님" 
          choice={userChoice} 
          result={result} 
          type="user" 
          imageMap={choices} 
          defaultImage={questionImg}
        />
        
        <div className={styles.buttonsContainer}>
          <Button
            onClick={play}
            choice="scissors"
            disabled={userChoice !== null}
            image={scissorsImg}
            text="가위"
            type="scissors"
          />
          
          <Button
            onClick={play}
            choice="rock"
            disabled={userChoice !== null}
            image={rockImg}
            text="바위"
            type="rock"
          />
          
          <Button
            onClick={play}
            choice="paper"
            disabled={userChoice !== null}
            image={paperImg}
            text="보"
            type="paper"
          />
          
          <div className={styles.resultActions}>
            <div className={styles.resultText}>{userChoice === null ? "?" : result}</div>
            <div className={styles.resetButtonContainer}>
              {userChoice ? (
                <Button
                  onClick={resetGame}
                  text="다시하기"
                  type="reset"
                />
              ) : (
                <div className={styles.emptySpace}></div>
              )}
            </div>
          </div>
        </div>
        
        <Card 
          title="상대선수" 
          choice={computerChoice} 
          result={result} 
          type="computer" 
          imageMap={choices} 
          defaultImage={questionImg}
        />
      </div>
      
      <p className={styles.instructionText}>
        버튼을 클릭하여 가위, 바위, 보 중 하나를 선택하세요.
        <br />
        컴퓨터는 랜덤으로 선택합니다.
      </p>
    </div>
  );
}

export default App;