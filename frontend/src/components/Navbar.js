import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <header>
            <div className="conatainer">
                <Link to="/">
                    <h1>Weekly Workouts</h1>
                </Link>
            </div>
        </header>
    )
}

export default Navbar