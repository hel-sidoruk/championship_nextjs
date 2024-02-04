import React, { useState } from 'react';
import NewApplications from './NewApplications';
import RegisteredApplications from './RegisteredApplications';

export default function AdminPanel() {
  const [currentTab, setCurrentTab] = useState('new');

  const openNewTab = () => setCurrentTab('new');
  const openRegisteredTab = () => setCurrentTab('registered');

  return (
    <>
      <div className="admin__nav">
        <button className={`subtitle ${currentTab === 'new' ? 'active' : ''}`} onClick={openNewTab}>
          Новые заявки
        </button>
        <button
          className={`subtitle ${currentTab === 'registered' ? 'active' : ''}`}
          onClick={openRegisteredTab}
        >
          Зарегистрированные
        </button>
      </div>
      {currentTab === 'new' ? <NewApplications /> : <RegisteredApplications />}
    </>
  );
}
