import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import { Container, MainContainer } from './styled.component';

function App() {
  return (
    <Container>
      <Sidebar />
      <MainContainer>
        <Header />
        <Dashboard />
      </MainContainer>
    </Container>

  );
}

export default App;
