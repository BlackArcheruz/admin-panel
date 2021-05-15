import toolbar from './img/toolbar.svg'

const CompetitorCard = () => {
    return (
<div className="card card-stretch mb-5 mb-xxl-8">
            <div className="card-body pb-0">
                <div className="d-flex flex-column h-100">
                    <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex flex-column">
                    <h4 className="fw-bold h6">My Competitors</h4>
                    <p className="text-muted">More than 400+ new members</p>
                    </div>
                    <div className="card-toolbar dropdown">
                <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><span className="svg-icon svg-icon-1"><img src={toolbar} alt="" /></span></button>
                </div>
                </div>
                <div className="d-flex flex-column">
                    <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row">
                        <div>
                            <img src="https://preview.keenthemes.com/start-react/media/stock/600x400/img-17.jpg" alt="" style={{width: "90px", height: "60px", borderRadius: ".65rem"}} />
                        </div>
                        <div className="d-flex flex-column mx-3">
                            <h5 className="h6">Cup &amp; Green</h5>
                            <p className="text-muted">Study the highway types Created by: <b> CoreTeam</b></p>
                        </div>
                    </div>
                    <div className="d-flex flex-column">
                        <h5 className="h6 fw-bold">24,900</h5>
                        <p className="text-muted">votes</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row">
                        <div className="my-2">
                            <img src="https://preview.keenthemes.com/start-react/media/stock/600x400/img-10.jpg" alt="" style={{width: "90px", height: "60px", borderRadius: ".65rem"}}/>
                        </div>
                        <div className="d-flex flex-column mx-3">
                        <h5 className="h6">Cup &amp; Green</h5>
                            <p className="text-muted">Study the highway types Created by: <b> CoreTeam</b></p>
                        </div>
                    </div>
                    <div className="d-flex flex-column">
                        <h5 className="h6 fw-bold">24,900</h5>
                        <p className="text-muted">votes</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row">
                        <div className="my-2">
                            <img src="https://preview.keenthemes.com/start-react/media/stock/600x400/img-1.jpg" alt="" style={{width: "90px", height: "60px", borderRadius: ".65rem"}}/>
                        </div>
                        <div className="d-flex flex-column mx-3">
                        <h5 className="h6">Cup &amp; Green</h5>
                            <p className="text-muted">Study the highway types Created by: <b> CoreTeam</b></p>
                        </div>
                    </div>
                    <div className="d-flex flex-column">
                        <h5 className="h6 fw-bold">24,900</h5>
                        <p className="text-muted">votes</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row">
                        <div className="my-2">
                            <img src="https://preview.keenthemes.com/start-react/media/stock/600x400/img-9.jpg" alt="" style={{width: "90px", height: "60px", borderRadius: ".65rem"}}/>
                        </div>
                        <div className="d-flex flex-column mx-3">
                        <h5 className="h6">Cup &amp; Green</h5>
                            <p className="text-muted">Study the highway types Created by: <b> CoreTeam</b></p>
                        </div>
                    </div>
                        <div className="d-flex flex-column">
                        <h5 className="h6 fw-bold">24,900</h5>
                        <p className="text-muted">votes</p>
                        </div>
                    </div>
                </div>
                    </div>
                    </div>
                    </div>
    )
}

export default CompetitorCard
