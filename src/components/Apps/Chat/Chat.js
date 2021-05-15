import { Fragment } from "react"
import { Link } from "react-router-dom"

const Chat = () => {
    return (
        <Fragment>
            <div className="profile-page d-flex justify-content-between">
            <div className="d-flex flex-row">
                <div className="over d-flex flex-column">
                    <h4 className="fw-bold fs-5">
                        Chat
                    </h4>
                <div className="d-flex">
                    <a href="/dashboard" className="text-muted">Home</a>
                    -
                    <a href="/dashboard" className="text-muted">Apps</a>
                    -
                    <p className="text-gray-600">Chat</p>
                </div>
                </div>
            </div>
                <div className="d-flex">
                    <Link to="/chat"><button className="btn btn-icon btn-search">Chat</button></Link>
                    <Link to="/shop/shop-1"><button className="btn btn-icon btn-search">Shop 1</button></Link>
                    <Link to="/shop/shop-2"><button className="btn btn-icon btn-search">Shop 2</button></Link>
                    <Link to="/shop/product/1"><button className="btn btn-icon btn-search">Shop Product</button></Link>
                </div>
        </div>
        <section>
            <div className="row mb-3">
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <input type="text" className="form-control" placeholder="🔍 Search"/>
                            <div className="d-flex flex-row justify-content-between">
                                <div className="d-flex flex-column">
                                    <div className="timeline-illus">
                                        <img src="https://preview.keenthemes.com/start-react/media/svg/avatars/001-boy.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </Fragment>
    )
}

export default Chat
