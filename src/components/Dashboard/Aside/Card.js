import React from 'react'
import toolbar from './img/toolbar.svg'

const Card = () => {
    return (
    <div className="col-xl-4 aside-card">
        <div className="card card-stretch mb-5 mb-xxl-8">
            <div className="card-header align-items-center border-0 mt-3" style={{display: 'flex', alignItems: "center", justifyContent: "space-between", borderRadius: ".65rem"}}>
                <h3 className="card-title align-items-start flex-column">
                    <span className="fw-bolder text-dark fs-3">Sales Share</span>
                    <span className="text-muted mt-2 fw-bold fs-6" style={{display: "block"}}>890,344 Sales</span>
                </h3>
                <div className="card-toolbar dropdown">
                <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><span className="svg-icon svg-icon-1"><img src={toolbar} alt="" /></span></button>
                </div> 
            </div>
            <div className="card-body pt-12">
            <div className="d-flex flex-center position-relative bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-center h-175px bg-card1">
            <div className="text-center text-dark">
                    <h3 className="text-dark">8, 345</h3>
                </div>
                </div> 
                <div className="text-border">
                <div><span className="bg-info"></span> 48% SNT</div>
                <div><span className="bg-info1"></span> 20% SNT</div>
                <div><span className="bg-info2"></span> 32% SNT</div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Card
