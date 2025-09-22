import './NewUserForm.css'
import { useState } from 'react'

    // {
    //   id:2,
    //   image:'https://picsum.photos/200/300?random=2">',
    //   firstName:'Name',
    //   lastName:'Last',
    //   age:'23',
    //   from:'Uzbekistan',
    //   job:'Fronted Devloper',
    //   gender:'Male'
    // },


function NewUserForm() {

    const [user, setUser] = useState ({
          id:2,
          image:'',
          firstName:'',
          lastName:'',
          age:null,
          from:'',
          job:'',
          gender:''
    })

    return (
        <div className='modal-wrapper'>
            <div className="overlay">
                <div className="modal">
                    <h2>Create New User</h2>
                    <form>
                        <label>
                            <span>Image Url</span>
                            <input type="url" required/>
                        </label>
                        <label>
                            <span>First Name</span>
                            <input type="text" required />
                        </label>
                        <label>
                            <span>Last Name</span>
                            <input type="text" required />
                        </label>
                         <label>
                            <span>Age</span>
                            <input type="number" required />
                        </label>
                        <label>
                            <span>From</span>
                            <input type="text" required />
                        </label>
                        <label>
                            <span>Job</span>
                            <input type="text" required />
                        </label>

                        <div className='gender'>
                            <span>Gender</span>
                            <label>
                                <small>Male</small>
                                <input type="radio" required name='gender' value="male" />
                            </label>
                            <label>
                                <small>Female</small>
                                <input type="radio" required name='gender' value="female" />
                            </label>
                        </div>

                        <button type className='modal-btn'>Submit</button>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default NewUserForm