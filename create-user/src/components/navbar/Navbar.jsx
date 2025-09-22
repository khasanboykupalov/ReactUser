// Style
import './Navbar.css'

function Navbar(props) {
    console.log(props)
    return (
        <div className='navbar'>
            <div className='navbar-container container'>
                <h1 className='navbar-logo'>CUser</h1>
                <h3 className='navbar-counter'>
                    { props.usersLength > 0 ? "You have: "+ props.usersLength: "No Users Yet " }
                </h3>
            </div>
        </div>
    )
}


export default Navbar