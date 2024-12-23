import { useState } from "react";
import React from "react";
import './App.css'

const App = () => {
  // Create a new state variable named 'team'
  const [team, setTeam] = useState([])


  //Create a new state variable named 'money'
  const [money, setMoney] = useState(100)

 // console.log('isMoney: ' + money)

  const [totalStrength, setTotalStrength] = useState(0)

  const handleAddFighter = (fighter) => {
    // console.log(...team, fighter)
    if (money > 0) {
      setTeam([...team, fighter])
      setTotalStrength(prevStrength => prevStrength + fighter.strength);
      setMoney(prevMoney => prevMoney - fighter.price)
    } else {
      console.log('You don\'t have enough money!')
      } 
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

  // const checkTeamStatus = ([team]) => {
  //   if([team].length === 0) {
  //     <p>Pick some team memebers!</p>
  //   } else {

  //   }
  // }

  return (
    <section className="main-section">
    <h1>Zombie Fighters</h1>
    <h2>Money:{money}</h2>
    <h2>{totalStrength}</h2>
    <h2>Team Agility</h2>
    <div className="myTeam">
      {(team.length === 0)
      ? <div> <p>Pick some team memebers!</p> </div>
      : <div> {team.map((fighter, index) => (
        <React.Fragment key={index}>
        <ul>
          <li><img src={fighter.img} alt={fighter.name} /></li>
          <li>Name: {fighter.name}</li>
          <li>Price: {fighter.price}</li>
          <li>Strength: {fighter.strength}</li>
          <li>Agility: {fighter.agility}</li>
        </ul>
        <button onClick={ () => handleRemoveFighter(fighter)}>Add</button>
        </React.Fragment>
      ))}
      </div>
    }
    </div>  
    <div className="fighters">
      {isZombieFighters.map((fighter, index) => (
      <React.Fragment key={index}>
        <ul>
          <li key={index}></li>
          <li><img src={fighter.img} alt={fighter.name} /></li>
          <li>Name: {fighter.name}</li>
          <li>Price: {fighter.price}</li>
          <li>Strength: {fighter.strength}</li>
          <li>Agility: {fighter.agility}</li>
        </ul>
        <button onClick={() => handleAddFighter(fighter)}>Add</button>
      </React.Fragment>
      ))}
    </div>
  </section>
  );
}

export default App