import toolbar from './img/toolbar.svg'

const Timeline = () => {
    const style= {fontSize: "13px", color: "#eff2f5"};
    const style2 = {color: '#20d489', cursor: "pointer"}
    return (
    <div className="col-xl-4 lastcard">
        <div className="card card-stretch mb-5 mb-xxl-8 px-2">
            <div className="card-header align-items-center border-0 mt-3" style={{display: 'flex', alignItems: "center", justifyContent: "space-between", borderRadius: ".65rem"}}>
                <h3 className="card-title align-items-start flex-column">
                    <span className="fw-bolder text-dark fs-3">Timeline</span>
                    <span className="text-muted mt-2 fw-bold fs-6" style={{display: "block"}}>890,344 Sales</span>
                </h3>
                <div className="card-toolbar dropdown">
                <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><span className="svg-icon svg-icon-1"><img src={toolbar} alt="" /></span></button>
                </div> 
            </div>
            <div className="card-body" style={{padding: '1rem'}}>
                <div className="d-flex justify-content-between">
            <div className="d-flex flex-column fw-bold fs-6 timeline-time">
                <p className="mb-1">08:42</p>
                <p className="mt-5">08:42</p>
                <p>08:42</p>
                <p>08:42</p>
                <p>08:42</p>
                <p>08:42</p>
                <p className="mt-3">08:42</p>
                <p className="mt-2">08:42</p>
            </div>
            <div className="timeline text-center">
                <div className="timeline-badge mb-3">
                <i className="bi bi-circle-fill text-gray-200" style={style}></i>
                </div>
                <div className="timeline-badge mt-5">
                <i className="bi bi-circle-fill text-gray-200" style={style}></i>
                </div>
                <div className="timeline-badge mt-2">
                <i className="bi bi-circle-fill text-gray-200" style={style}></i>
                </div>
                <div className="timeline-badge mt-3">
                <i className="bi bi-circle-fill text-gray-200" style={style}></i>
                </div>
                <div className="timeline-badge mt-3">
                <i className="bi bi-circle-fill text-gray-200" style={style}></i>
                </div>
                <div className="timeline-badge mt-3">
                <i className="bi bi-circle-fill text-gray-200" style={style}></i>
                </div>
                <div className="timeline-badge mt-5">
                <i className="bi bi-circle-fill text-gray-200" style={style}></i>
                </div>
                <div className="timeline-badge mt-3">
                <i className="bi bi-circle-fill text-gray-200" style={style}></i>
                </div>
            </div>
            <div className="timeline-text">
                <p className="fw-normal fs-7 timeline-content text-gray-600 ps-3">Outlines keep you Indulging in poorly driving.</p>
                <div className="d-flex mb-1">
                    <p className="fw-bolder text-gray-800 ps-3 pe-3">AEOL meeting with</p> 
                    <div className="timeline-illus mx-1">
                    <img src="https://preview.keenthemes.com/start-react/media/svg/avatars/004-boy-1.svg" alt=""/>
                    </div>
                    <div className="timeline-illus mx-1">
                    <img src="https://preview.keenthemes.com/start-react/media/svg/avatars/010-girl-4.svg" alt=""/>
                    </div>
                </div>
                <p className="fw-bolder text-gray-800 ps-3 pe-3">
                Make deposit <span style={style2}>USD 700</span>.  to ESL
                </p>
                <p className="fw-normal fs-7 timeline-content text-gray-600 ps-3">Poorly driving and keep structure</p>
                <p className="fw-bolder text-gray-800 ps-3 pe-3">New order placed <span style={style2}>#XF-2356</span>.</p>
                <p className="fw-normal fs-7 timeline-content text-gray-600 ps-3">Amazing keep you Indulging in poorly driving.</p>
                <p className="fw-bolder text-gray-800 ps-3 pe-3">Make deposit <span style={style2}>USD 400</span>. to ESL</p>
                <p className="fw-normal fs-7 timeline-content text-gray-600 ps-3">Indulging in poorly driving and keep structure keep great</p>
            </div>
            </div>
            </div>
        </div>
    </div>
    )
}

export default Timeline
