import { Link } from "react-router-dom"

export const Button = () => {
    return (
        <Link to='sign-up'>
            <button className="btn">
                Sign Up
            </button>
        </Link>
    )
}
