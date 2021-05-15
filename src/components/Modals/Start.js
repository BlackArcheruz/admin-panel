import { useState } from "react"
import {Link} from "react-router-dom"

const Start = () => {
  const [menus, setMenus] = useState([
    {
      id:1,
      title: "Dashboards",
      links: ["Start","Extended","Light","Compact"]
    },
    {
      id:2,
      title: "Apps",
      links: ["Chat", "Shop 1", "Shop 2", "Shop Product"]
    },
    {
      id:3,
      title: "General",
      links: ["FAQ", "Pricing", "Invoice", "Login", "Wizard", "Error"]
    }
  ])
  const [secondMenus, setsecondMenus] = useState([
    {
      id:1,
      title: "Profile",
      links: ["Overview","Account","Settings"]
    },
    {
      id:2,
      title: "Resources",
      links: ["Documentation", "Layout Builder", "Changelog"]
    }
  ])
    return (
        <div className="modal fade" id="startModal" tabindex="-1" aria-labelledby="startModal" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen modal-start">
          <div className="modal-content">
            <div className="container">
            <div className="modal-header">
              <h5 className="modal-title fw-bolder" id="startModal">Start</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">&times;</button>
            </div>
            <div className="modal-body">
            <div className="d-flex flex-row py-10 g-5">
              <div className="col-lg-6 pe-lg-25">
                <div className="row">
                  {menus.map((menu)=>(
                  <div className="col-sm-4" key={menu.id}>
                    <h3 className="fw-bolder mb-3 fs-5">{menu.title}</h3>
                    <div className="d-flex flex-column">
                    {menu.links.map((link)=>(
                      <Link to="/dashboard" className="menu-link-1 ps-0 py-2" key={menu.id}>{link}</Link>
                    ))}
                    </div>
                    </div>))}
                    </div>
                <div className="row">
                  {secondMenus.map((menu)=>(
                  <div className="col-sm-4" key={menu.id}>
                    <h3 className="fw-bolder mb-3 fs-5">{menu.title}</h3>
                    <div className="d-flex flex-column">
                    {menu.links.map((link)=>(
                      <Link to="/dashboard" className="menu-link-1 ps-0 py-2" key={menu.id}>{link}</Link>
                    ))}
                    </div>
                    </div>))}
                    </div>
                    </div>
                    <div className="col-lg-6">
                      <h3 className="fw-bolder mb-3">Quick Links</h3>
                      <div className="row g-3">
                        <div className="col-sm-4">
                        <a href="#" className="card card-custom bg-light-success hoverable min-h-125px shadow-none mb-5">
                        <div className="card-body d-flex flex-column flex-center">
                        <h3 className="fs-3 mb-2 text-dark fw-bolder">Security</h3>
                        <p className="mb-0 text-gray-600">$2.99/month</p></div></a>
                        </div>
                        <div className="col-sm-4">
                        <a href="#" className="card card-custom bg-light-danger hoverable min-h-125px shadow-none mb-5">
                        <div className="card-body d-flex flex-column flex-center text-center"><h3 className="fs-3 mb-2 text-dark fw-bolder">Demo</h3>
                        <p className="mb-0 text-gray-600">Free Version</p>
                        </div></a></div>
                        <div className="col-sm-4">
                          <a href="#" className="card card-custom bg-light-warning hoverable min-h-125px shadow-none mb-5"><div className="card-body d-flex flex-column flex-center text-center"><h3 className="fs-3 mb-2 text-dark text-hover-primary fw-bolder">Try Now</h3><p className="mb-0 text-gray-600">Pro Version</p></div></a></div>
                      </div>
                      <div className="row g-3">
                        <div className="col-sm-8">
                        <a href="#" className="card card-custom bg-light-primary hoverable min-h-125px shadow-none mb-5"><div className="card-body d-flex flex-column flex-center text-center"><h3 className="fs-3 mb-2 text-dark fw-bolder">Payment Methods</h3><p className="mb-0 text-gray-600">Credit Cards/Debit Cards, Paypal,<br/> Transferwise &amp; Others</p></div></a>
                        <div className="row g-3">
                        <div className="col-sm-6"><a className="card card-custom bg-light-warning hoverable start-warning shadow-none min-h-125px mb-5"><div className="card-body d-flex flex-column flex-center text-center"><h3 className="fs-3 mb-2 text-dark fw-bolder">Support</h3><p className="mb-0 text-gray-600">6 Month Free</p></div></a></div>
                        <div className="col-sm-6"><a href="#" className="card card-custom bg-light-success hoverable shadow-none min-h-125px mb-5"><div className="card-body d-flex flex-column flex-center text-center"><h3 className="fs-3 mb-1 text-dark fw-bolder">Installation</h3><p className="mb-0 text-gray-600">$0.99 Per Machine</p></div></a></div>
                        </div>
                        </div>
                        <div class="col-sm-4"><a href="#" class="card card-custom card-stretch mb-5 bg-light-info hoverable shadow-none min-h-250px"><div class="card-body d-flex flex-column p-0"><div class="d-flex flex-column flex-center text-center px-5 pt-10"><h3 class="fs-3 mb-2 text-dark fw-bolder">Quick Start</h3><p class="mb-0 text-gray-600">Single Click Import</p></div><img src="https://preview.keenthemes.com/start-react/media/svg/illustrations/terms-1.svg" alt="" /></div></a></div>
                        </div>
                      </div>
                    </div>
                    </div>
            </div>
          </div>
          </div>
        </div>
    )
}

export default Start
