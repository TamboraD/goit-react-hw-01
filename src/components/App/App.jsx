import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import Profile from "../Profile/Profile"
import userData from "../../userData.json"
import FriendList from '../FriendList/FriendList';
import friends from "../../friends.json"
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from '../../transaction.json';

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <br />
      <FriendList friends={friends} />
      <br />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App
