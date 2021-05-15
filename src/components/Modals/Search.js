const Search = () => {
  const linkStyle = {textDecoration: "none"};
    return (
        <div className="modal fade" id="searchModal" tabindex="-1" aria-labelledby="searchModal" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
              <div className="container w-lg-800px">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">&times;</button>
            </div>
            <div className="modal-body">
            <form class="pb-10">
              <input type="text" 
              className="form-control bg-transparent border-0 fs-4x text-center fw-normal" 
              name="query" 
              placeholder="Search..."/>
            </form>
            <div className="py-10">
              <h3 className="fw-bolder mb-8">Shop Goods</h3>
            </div>
            <div class="row g-3">
              <div class="col-sm-6">
              <div class="row g-5">
              <div class="col-sm-6">
                <div className="img-card">
                <div className="img-overlay">
                  <img src="https://preview.keenthemes.com/start-react/media/stock/600x400/img-17.jpg" alt="" />
                </div>
                <div className="button-img">
                  <button className="btn btn-primary btn-sm">Explore</button>
                </div>
               
                </div>
                <div className="img-card mt-3">
                <div className="img-overlay">
                  <img src="https://preview.keenthemes.com/start-react/media/stock/600x400/img-1.jpg" alt="" />
                </div>
                <div className="button-img">
                  <button className="btn btn-primary btn-sm">Explore</button>
                </div>
               
                </div>
            </div>
            <div class="col-sm-6">
                <div className="img-card">
                <div className="img-overlay1">
                  <img src="https://preview.keenthemes.com/start-react/media/stock/600x400/img-23.jpg" alt="" />
                </div>
                <div className="button-img">
                  <button className="btn btn-primary btn-sm">Explore</button>
                </div>
                </div>
                </div>
            </div>
            </div>  
            <div class="col-sm-6">
                <div className="img-card">
                <div className="img-overlay2">
                  <img src="https://preview.keenthemes.com/start-react/media/stock/600x400/img-11.jpg" alt="" />
                </div>
                <div className="button-img">
                  <button className="btn btn-primary btn-sm">Explore</button>
                </div>
                </div>
                </div>
            </div>
            <div className="py-10">
              <h3 className="fw-bolder mb-8">Framework Users</h3>
              </div>
              <div className="d-flex flex-row justify-content-between pt-1">
              <div className="d-flex flex-column">
              <div className="timeline-illus1 my-1 bg-light-primary">
                    <img src="https://preview.keenthemes.com/start-react/media/svg/avatars/004-boy-1.svg" alt=""/>
                    </div>
                    <div className="timeline-illus1 my-1 bg-light-danger">
                    <img src="https://preview.keenthemes.com/start-react/media/svg/avatars/010-girl-4.svg" alt=""/>
                    </div>
              <div className="timeline-illus1 my-1 bg-light-success">
                    <img src="https://preview.keenthemes.com/start-react/media/svg/avatars/004-boy-1.svg" alt=""/>
                    </div>
                    <div className="timeline-illus1 my-1 bg-light-warning">
                    <img src="https://preview.keenthemes.com/start-react/media/svg/avatars/010-girl-4.svg" alt=""/>
                    </div>
              </div>
              <div className="d-flex flex-column">
                <a href="#" className="text-gray-800 fw-bolder text-hover-primary fs-6 mb-1" style={linkStyle}>Brad Simmons</a>
                <p className="text-muted fw-bold">Uses: HTML/CSS/JS, Python</p>
                <a href="#" className="text-gray-800 fw-bolder text-hover-primary fs-6 mb-1" style={linkStyle}>Brad Simmons</a>
                <p className="text-muted fw-bold">Uses: HTML/CSS/JS, Python</p>
                <a href="#" className="text-gray-800 fw-bolder text-hover-primary fs-6 mb-1" style={linkStyle}>Brad Simmons</a>
                <p className="text-muted fw-bold">Uses: HTML/CSS/JS, Python</p>
                <a href="#" className="text-gray-800 fw-bolder text-hover-primary fs-6 mb-1" style={linkStyle}>Brad Simmons</a>
                <p className="text-muted fw-bold">Uses: HTML/CSS/JS, Python</p>
              </div>
              <div className="d-flex flex-column">
                <p className="text-gray-800 fw-bolder fs-6 mb-1">$ 2,000,000</p>
                <p className="text-muted fw-normal">Paid</p>
                <p className="text-gray-800 fw-bolder fs-6 mb-1">$ 2,000,000</p>
                <p className="text-muted fw-normal">Paid</p>
                <p className="text-gray-800 fw-bolder fs-6 mb-1">$ 2,000,000</p>
                <p className="text-muted fw-normal">Paid</p>
                <p className="text-gray-800 fw-bolder fs-6 mb-1">$ 2,000,000</p>
                <p className="text-muted fw-normal">Paid</p>
              </div>
              <div className="d-flex flex-column">
              <a class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm btn-table mb-4">
                <i className="bi bi-arrow-right" style={{fontSize: "1.45rem", fontWeight: "600"}}></i>
              </a>
              <a class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm btn-table mb-4">
                <i className="bi bi-arrow-right" style={{fontSize: "1.45rem", fontWeight: "600"}}></i>
              </a>
              <a class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm btn-table mb-4">
                <i className="bi bi-arrow-right" style={{fontSize: "1.45rem", fontWeight: "600"}}></i>
              </a>
              <a class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm btn-table">
                <i className="bi bi-arrow-right" style={{fontSize: "1.45rem", fontWeight: "600"}}></i>
              </a>
              </div>
            </div>
            <div className="py-10">
              <h3 className="fw-bolder">Tutorials</h3>
              </div>
              <div className="d-flex mb-3">
                <i className="bi bi-arrow-right-short" style={{color: "#20d489"}}></i>
                <div className="d-flex flex-column">
                <a href="#" className="fs-6 fw-bolder text-hover-primary text-gray-800 mb-2" style={linkStyle}>How to Create Your First Project with Start Admin Theme</a>
                <div class="fw-bold text-muted">But nothing can prepare you for the real thing</div>
                </div>
              </div>
              <div className="d-flex mb-3">
                <i className="bi bi-arrow-right-short" style={{color: "#20d489"}}></i>
                <div className="d-flex flex-column">
                <a href="#" className="fs-6 fw-bolder text-hover-primary text-gray-800 mb-2" style={linkStyle}>How to Create Your First Project with Start Admin Theme</a>
                <div class="fw-bold text-muted">But nothing can prepare you for the real thing</div>
                </div>
              </div>
              <div className="d-flex mb-3">
                <i className="bi bi-arrow-right-short" style={{color: "#20d489"}}></i>
                <div className="d-flex flex-column">
                <a href="#" className="fs-6 fw-bolder text-hover-primary text-gray-800 mb-2" style={linkStyle}>How to Create Your First Project with Start Admin Theme</a>
                <div class="fw-bold text-muted">But nothing can prepare you for the real thing</div>
                </div>
              </div>
              <div className="d-flex mb-3">
                <i className="bi bi-arrow-right-short" style={{color: "#20d489"}}></i>
                <div className="d-flex flex-column">
                <a href="#" className="fs-6 fw-bolder text-hover-primary text-gray-800 mb-2" style={linkStyle}>How to Create Your First Project with Start Admin Theme</a>
                <div class="fw-bold text-muted">But nothing can prepare you for the real thing</div>
                </div>
              </div>
              <div className="d-flex mb-3">
                <i className="bi bi-arrow-right-short" style={{color: "#20d489"}}></i>
                <div className="d-flex flex-column">
                <a href="#" className="fs-6 fw-bolder text-hover-primary text-gray-800 mb-2" style={linkStyle}>How to Create Your First Project with Start Admin Theme</a>
                <div class="fw-bold text-muted">But nothing can prepare you for the real thing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
}

export default Search
