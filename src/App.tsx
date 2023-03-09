import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  //const [data, setData] = useState<{ message: string } | null>(null);
  // const menuItems = [
  //   { label: 'Home', url: '/' },
  //   { label: 'About', url: '/about' },
  //   { label: 'Contact', url: '/contact' },
  // ];

  // useEffect(() => {
  //   fetch('http://localhost:3000')
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  // }, []);

  // if (!data) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      <Header title="Header" />
      <Main title="Movie Title"/>
    </>
  )

}

export default App;
