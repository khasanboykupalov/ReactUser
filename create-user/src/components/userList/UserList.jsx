import './Userlist.css'


function UserList (props) {
    return (
        <div className='userList'>
            <div className="userList-container container">
                {props.users.map((user) => {
                    return (
                        <div className='card' key={user.id}>
                            <div className="card-inner">
                                <img src={user.image} alt={user.name} height={150} width={150} />
                                <h3>{user.firstName} {user.lastName}, {user.age} age</h3>
                                <p>From: {user.from} </p>
                                <p>Job: {user.job} </p>
                                <p>Gender: {user.gender} </p>

                                <button onClick={() => props.delete(user.id)} >Delete</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default UserList