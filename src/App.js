import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Registration from './Registration';
import UserDashboard from './UserDashboard';
import ServiceProviderDashboard from './ServiceProviderDashboard';

function App() {
  const [userType, setUserType] = useState(null); // 'user' or 'serviceProvider'
  const [userData, setUserData] = useState({}); // User or service provider data

  const handleRegistration = (data, type) => {
    setUserType(type);
    setUserData(data);
  }

  return (
    <div className="App">
      {!userType && <Registration onRegister={handleRegistration} />}
      {userType === 'user' && <UserDashboard userData={userData} />}
      {userType === 'serviceProvider' && <ServiceProviderDashboard userData={userData} />}
    </div>
  );
}

export default App;
