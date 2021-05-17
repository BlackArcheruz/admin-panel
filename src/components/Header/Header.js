import React, {useState} from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {Link} from 'react-router-dom'

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    const [dropdownOpen1, setDropdownOpen1] = useState(false);

    const toggle1 = () => setDropdownOpen1(prevState => !prevState);
    return (
        <header id="kt_header" className="header">
            <div className="container d-flex align-items-stretch justify-content-between">
                <div className="d-flex align-items-center header-div">
                <button className="btn btn-icon btn-accent me-2 me-lg-6" data-bs-toggle="modal" data-bs-target="#startModal">
                    <span className="svg-icon svg-icon-1">
                    <i className="bi bi-text-left" style={{fontSize: "1.45rem", fontWeight: "600", color: "#19B674"}}></i>
                    </span>
                </button>
                <a href="/" className="heder-a"><h3>Start</h3></a>
                </div>
                <div className="d-flex align-items-center">
                <button className="btn btn-icon btn-search me-2 me-lg-6" data-bs-toggle="modal" data-bs-target="#searchModal">
                <span className="svg-icon svg-icon-1">
                    <i className="bi bi-search" style={{fontSize: "1.2rem", fontWeight: "600", color: "#181c32"}}></i>
                    </span>
                </button>
                <button className="btn btn-icon btn-search me-2 me-lg-6">
                <span className="svg-icon svg-icon-1">
                    <i className="bi bi-chat-left-text" style={{fontSize: "1.2rem", fontWeight: "600", color: "#181c32"}}></i>
                    </span>
                </button>
                <Dropdown isOpen={dropdownOpen1} toggle={toggle1}>
                <DropdownToggle className="btn btn-icon btn-search me-2 me-lg-6" style={{backgroundColor: "#fbf9f6"}} caret>
                <span className="svg-icon svg-icon-1">
                    <i className="bi bi-person" style={{fontSize: "1.2rem", fontWeight: "600", color: "#181c32"}}></i>
                    </span>
                </DropdownToggle>
                <DropdownMenu right className="dropmenu-profile">
        <DropdownItem header className="d-flex flex-row justify-content-between profile-drop-header py-3 px-3"><div className="timeline-illus1"><img src="https://preview.keenthemes.com/start-react/media/svg/avatars/001-boy.svg" alt="" /></div> <div className="d-flex flex-column mx-2 fs-4">Hello, James<p className="fs-7">CRM Product Designer</p></div></DropdownItem>
        <div className="row row-cols-2 g-0">
        <DropdownItem className="menu-link menu-btn" style={{width: "50%"}}><Link to="/profile/overview" className="d-flex flex-column align-items-center justify-content-center"> <i className="bi bi-grid-fill" style={{fontSize: "1.5rem"}}></i> My Profile</Link></DropdownItem>
        <DropdownItem className="menu-link menu-btn" style={{width: "50%"}}><Link to="/profile/settings" className="d-flex flex-column align-items-center justify-content-center"><i className="bi bi-gear-fill" style={{fontSize: "1.5rem"}}></i> Settings</Link></DropdownItem>
        <DropdownItem className="menu-link menu-btn" style={{width: "50%"}}><Link to="/profile/account" className="d-flex flex-column align-items-center justify-content-center"><i className="bi bi-cash" style={{fontSize: "1.5rem"}}></i> Subscriptions</Link></DropdownItem>
        <DropdownItem className="menu-link menu-btn" style={{width: "50%"}}><Link to="/login" className="d-flex flex-column align-items-center justify-content-center"><i className="bi bi-box-arrow-right" style={{fontSize: "1.5rem"}}></i> Sign Out</Link></DropdownItem>
        </div>
      </DropdownMenu>
                </Dropdown>
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle className="btn btn-icon btn-sm btn-light-danger fw-bolder pulse pulse-danger" caret>
                <span className="svg-icon svg-icon-1">
                    <span style={{fontSize: "1.2rem", fontWeight: "600"}}>3</span>
                    </span>
                </DropdownToggle>
                <DropdownMenu right>
        <DropdownItem header>4 New Notifications</DropdownItem>
        <DropdownItem className="menu-link">New User Library Added</DropdownItem>
        <DropdownItem className="menu-link">Clean Microphone</DropdownItem>
        <DropdownItem className="menu-link">New User Library Added</DropdownItem>
        <DropdownItem className="menu-link">Clean Microphone</DropdownItem>
        <DropdownItem divider />
        <button className="btn btn-primary px-5 py-5 mx-2" style={{padding: "10px"}}>Report</button>
        <button className="btn btn-info px-3 py-5 mx-2" style={{padding: "10px", backgroundColor: "#f5f8fa", border: "#f5f8fa"}}>Reset</button>
      </DropdownMenu>
                    </Dropdown>
                    
                </div> 
            </div>
        </header>
    )
}

export default Header
