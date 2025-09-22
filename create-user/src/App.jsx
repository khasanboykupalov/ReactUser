//Style
import './App.css'
import { useState } from 'react'
//Components
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/footer/footer.jsx'
import UserList from './components/userList/userList.jsx'
import NewUserForm from './components/newUser/NewUserForm.jsx'


function App() {

  const [showModal, setShowModal] = useState(false)
  const [users, setUsers] = useState([])

  const deleteUser = (id) => {
    setUsers((prev) => {
      return prev.filter((user) => {
        return user.id !== id
      })  
    });
  }

  // close Modal
  const closeModal = (ev) =>  {
    if(ev.target.className==="overlay") setShowModal(false)
    if(ev.key ==="Escape")  setShowModal(false) 
  }

    //addUser

    const addUser = (user) => {
      setUsers((prev) => {
        return[...prev, user]
      })
      setShowModal(false)
    }

  return (
    <div onClick={closeModal} onKeyDown={closeModal} className='App'> 
    <Navbar usersLength={users.length}></Navbar>
      <main>
        <div className="no-users">
          {users.length === 0 &&   <h2>No Users</h2>}
        </div>
        <UserList users={users} delete = {deleteUser} ></UserList>
      </main>
      {showModal && <NewUserForm addUser={addUser}></NewUserForm>}
      <button onClick={() => setShowModal(true)} className='create-user' >Create User</button>
    <Footer></Footer>
    </div>
  )
    
}

export default App

