import CompetitorCard from './CompetitorCard'
import GraphCard from './GraphCard'
import toolbar from './img/toolbar.svg'

const AgentCard = () => {
    return (
        <div className="col-xl-6">
            <div className="card card-stretch mb-5 mb-xxl-8">
            <div className="card-body pb-0">
                <div className="d-flex flex-column h-100">
                    <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex flex-column">
                    <h4 className="fw-bold h6">My Agents</h4>
                    <p className="text-muted">More than 400+ new members</p>
                    </div>
                    <div className="card-toolbar dropdown">
                <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><span className="svg-icon svg-icon-1"><img src={toolbar} alt="" /></span></button>
                </div>
                </div>
                <div className="d-flex flex-column">
                    <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row">
                        <div className="timeline-illus1">
                            <img src="https://preview.keenthemes.com/start-react/media/svg/avatars/001-boy.svg" alt="" />
                        </div>
                        <div className="d-flex flex-column mx-3">
                            <h5 className="h6">Brad Simmons</h5>
                            <p className="text-muted">Movie Creator</p>
                        </div>
                    </div>
                        <div className="d-flex">
                        <i className="bi bi-facebook" style={{fontSize: "1.5rem"}}></i>
                        <i className="bi bi-twitter mx-3" style={{fontSize: "1.5rem"}}></i>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row">
                        <div className="timeline-illus1">
                            <img src="https://preview.keenthemes.com/start-react/media/svg/avatars/001-boy.svg" alt="" />
                        </div>
                        <div className="d-flex flex-column mx-3">
                            <h5 className="h6">Brad Simmons</h5>
                            <p className="text-muted">Movie Creator</p>
                        </div>
                    </div>
                        <div className="d-flex">
                        <i className="bi bi-facebook" style={{fontSize: "1.5rem"}}></i>
                        <i className="bi bi-twitter mx-3" style={{fontSize: "1.5rem"}}></i>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row">
                        <div className="timeline-illus1">
                            <img src="https://preview.keenthemes.com/start-react/media/svg/avatars/001-boy.svg" alt="" />
                        </div>
                        <div className="d-flex flex-column mx-3">
                            <h5 className="h6">Brad Simmons</h5>
                            <p className="text-muted">Movie Creator</p>
                        </div>
                    </div>
                        <div className="d-flex">
                        <i className="bi bi-facebook" style={{fontSize: "1.5rem"}}></i>
                        <i className="bi bi-twitter mx-3" style={{fontSize: "1.5rem"}}></i>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row">
                        <div className="timeline-illus1">
                            <img src="https://preview.keenthemes.com/start-react/media/svg/avatars/001-boy.svg" alt="" />
                        </div>
                        <div className="d-flex flex-column mx-3">
                            <h5 className="h6">Brad Simmons</h5>
                            <p className="text-muted">Movie Creator</p>
                        </div>
                    </div>
                        <div className="d-flex">
                        <i className="bi bi-facebook" style={{fontSize: "1.5rem"}}></i>
                        <i className="bi bi-twitter mx-3" style={{fontSize: "1.5rem"}}></i>
                        </div>
                    </div>
                </div>
                    </div>
                    </div>
                    </div>
                    <GraphCard/>
                    <CompetitorCard/>
                    </div>
    )
}

export default AgentCard
