import { Fragment } from "react"
import { Link } from "react-router-dom"
import AgentCard from "./AgentCard"
import PostCard from "./PostCard"

const Profile = () => {
    return (
        <Fragment>
        <div className="profile-page d-flex justify-content-between">
            <div className="d-flex flex-row">
                <div className="over d-flex flex-column">
                    <h4 className="fw-bold fs-5">
                        Overview
                    </h4>
                <div className="d-flex">
                    <a href="/dashboard" className="text-muted">Home</a>
                    -
                    <a href="/dashboard" className="text-muted">Profile</a>
                    -
                    <p className="text-gray-600">Overview</p>
                </div>
                </div>
            </div>
                <div className="d-flex">
                    <Link to="/profile/overview"><button className="btn btn-icon btn-search">Overview</button></Link>
                    <Link to="/profile/account"><button className="btn btn-icon btn-search">Account</button></Link>
                    <Link to="/profile/settings"><button className="btn btn-icon btn-search">Settings</button></Link>
                </div>
        </div>
                <section>
        <div className="d-flex flex-column flex-column-fluid">
            <div className="content fs-6 d-flex flex-column-fluid">
                <div className="container">
                    <div className="row g-3 g-xxl-8">
                    <PostCard/>
                    <AgentCard/>
                    </div>
                </div>
            </div>
        </div>
        </section>
        </Fragment>
    )
}

export default Profile
