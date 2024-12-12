import { useState } from "react";
import './App.css'

const App = () => {
  // Create a new state variable named 'team'
  const [isTeam, setIsTeam] = useState([])
  console.log('isTeam: ' + isTeam)

  //Create a new state variable named 'money'
  const [isMoney, setIsMoney] = useState(100)
  console.log('isMoney: ' + isMoney)

  const [myTeam, setMyTeam] = useState([])

  const handleAddFighter= (fighter) => {
    console.log(...myTeam, fighter)
    setMyTeam([...myTeam, fighter])
  }

  //Create a new state variable named 'zombieFighters'
  const [isZombieFighters, setIsZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ])


  return (
    <>
    <h1>Zombie Fighters</h1>
    <h2>Money:{isMoney}</h2>
    <h2>Team Strength</h2>
    <h2>Team Agility</h2>
    <div>
      {myTeam}
    </div>
    <div>
      {isZombieFighters.map((fighter, index) => (
      <div key={index}> 
        <ul>
          <li><img src={fighter.img} alt={fighter.name} /></li>
          <li>Name: {fighter.name}</li>
          <li>Price: {fighter.price}</li>
          <li>Strength: {fighter.strength}</li>
          <li>Agility: {fighter.agility}</li>
        </ul>
        <button onClick={ () => handleAddFighter(fighter)}>+</button>
      </div>
    ))}
  </div>
  </>
  );
}

export default App