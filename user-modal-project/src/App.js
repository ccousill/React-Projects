import React, { useState } from 'react';
import AddUser from './components/AddUser/AddUser';
import UsersList from './components/UsersList/UsersList';
function App() {
  const [data, setData] = useState([]);

  const handleForm = (formData) => {
    setData((prevItem) => {
      return [formData, ...prevItem]
    })
  }



  return (
    <>
      <AddUser getFormData={handleForm} />
      <UsersList userData={data}/>
    </>
  );
}

export default App;
