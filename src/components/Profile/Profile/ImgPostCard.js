import toolbar from './img/toolbar.svg'

const ImgPostCard = () => {
    return (
        <div>
            <div className="card card-stretch mb-5 mb-xxl-8">
            <div className="card-body pb-0">
                <div className="d-flex flex-column h-100">
                    <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row">
                    <div className="timeline-illus1">
                        <img src="https://preview.keenthemes.com/start-react/media/svg/avatars/001-boy.svg" alt="" />
                    </div>
                    <div className="d-flex flex-column mx-3">
                    <h4 className="fw-bold h6">Brad Simmons</h4>
                    <p className="text-muted">Yestarday at 5:06 PM</p>
                    </div>
                    </div>
                    <div className="card-toolbar dropdown">
                <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><span className="svg-icon svg-icon-1"><img src={toolbar} alt="" /></span></button>
                </div>
                    </div>
                    <div className="d-flex flex-column">
                        <img src="https://preview.keenthemes.com/start-react/media/stock/900x600/3.jpg" alt="" style={{borderRadius: ".65rem"}} />
                        <p className="mt-2">Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors about driving and keep you focused on the overall structure of your post</p>
                    <div className="card-toolbar">
                    <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><span className="svg-icon svg-icon-1"><i className="bi bi-chat-left-text"></i> 24</span></button>
                    <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><span className="svg-icon svg-icon-1"><i className="bi bi-heart"></i> 75</span></button>
                    </div>
                    <div className="d-flex">
                    <input type="text" placeholder="Reply.." style={{border: "none", borderTop: "#f5f8fa", padding: '.5rem 0', outline: "none", width: "90%"}}/>
                    <i className="bi bi-paperclip"></i>
                    <i className="bi bi-geo-alt-fill mx-3"></i>
                    </div>
                    </div>
                </div>
                </div>
                </div>
        </div>
    )
}

export default ImgPostCard
