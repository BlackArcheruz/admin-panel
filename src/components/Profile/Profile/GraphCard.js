import graph from './img/Graph.svg'

const GraphCard = () => {
    return (
        <div className="card card-stretch mb-5 mb-xxl-8">
        <div className="card-body pb-0">
            <div className="d-flex flex-column h-100">
            <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex flex-column">
                    <h4 className="fw-bold h6">My Bestsellers</h4>
                    <p className="text-muted">More than 400+ new members</p>
                    </div>
                    <div className="card-toolbar d-flex">
                <button type="button" className="nav-link btn btn-active-light btn-color-muted py-1 px-4 fw-bolder active">Week</button>
                <button type="button" className="nav-link btn btn-active-light btn-color-muted py-1 px-4 fw-bolder">Month</button>
                </div>
                </div>
                <img src={graph} alt="" />
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row">
                        <div className="timeline-illus1">
                        </div>
                        <div className="d-flex flex-column mx-3">
                            <h5 className="h6">Pipeline Theme</h5>
                            <p className="text-muted">Movie Creator</p>
                        </div>
                    </div>
                        <div className="d-flex">
                            <button className="btn btn-active-light btn-color-muted">+82$</button>
                        </div>
                    </div>
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row">
                        <div className="timeline-illus1">
                        </div>
                        <div className="d-flex flex-column mx-3">
                            <h5 className="h6">Pipeline Theme</h5>
                            <p className="text-muted">Movie Creator</p>
                        </div>
                    </div>
                        <div className="d-flex">
                            <button className="btn btn-active-light btn-color-muted">+82$</button>
                        </div>
                    </div>
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row">
                        <div className="timeline-illus1">
                        </div>
                        <div className="d-flex flex-column mx-3">
                            <h5 className="h6">Pipeline Theme</h5>
                            <p className="text-muted">Movie Creator</p>
                        </div>
                    </div>
                        <div className="d-flex">
                            <button className="btn btn-active-light btn-color-muted">+82$</button>
                        </div>
                    </div>
                </div>
                </div>
                </div>
    )
}

export default GraphCard
