import { Fragment } from "react"
import { Link } from "react-router-dom"

const Settings = () => {
    return (
        <Fragment>
                    <div className="profile-page d-flex justify-content-between">
        <div className="d-flex flex-row">
            <div className="over d-flex flex-column">
                <h4 className="fw-bold fs-5">
                    Settings
                </h4>
            <div className="d-flex">
                <a href="/dashboard" className="text-muted">Home</a>
                -
                <a href="/dashboard" className="text-muted">Profile</a>
                -
                <p className="text-gray-600">Settings</p>
            </div>
            </div>
        </div>
            <div className="d-flex">
                <Link to="/profile/overview"><button className="btn btn-icon btn-search">Overview</button></Link>
                <Link to="/profile/account"><button className="btn btn-icon btn-search">Account</button></Link>
                <Link to="/profile/settings"><button className="btn btn-icon btn-search">Settings</button></Link>
            </div>
    </div>
    <div className="card">
        <div className="d-flex flex-column">
            <div className="d-flex justify-content-center align-items-center pt-5">
                <h5 className="h6 fw-normal">Setup Email Notification:</h5>
            </div>
            <div class="mb-5 row align-items-center mb-2"><label class="col-xl-3 col-lg-3 col-form-label fw-bold text-start text-lg-end">Email Notifications</label><div class="col-lg-9 col-xl-6 d-flex align-items-center"><div class="form-check form-check-custom form-check-solid form-switch"><input class="form-check-input" type="checkbox"/></div></div></div>
            <div class="mb-5 row align-items-center mb-2"><label class="col-xl-3 col-lg-3 col-form-label fw-bold text-start text-lg-end">Send Copy To Personal Email</label><div class="col-lg-9 col-xl-6 d-flex align-items-center"><div class="form-check form-check-custom form-check-solid form-switch"><input class="form-check-input" type="checkbox"/></div></div></div>
            <div className="d-flex justify-content-center align-items-center pt-2 mb-3">
                <h5 className="h6 fw-normal">Activity Related Emails:</h5>
            </div>
            <div class="mb-5 row"><label class="col-xl-3 col-lg-3 col-form-label fw-bold text-start text-lg-end">When To Email</label><div class="col-lg-9 col-xl-6"><div class="form-check form-check-custom form-check-solid mb-3"><input class="form-check-input" type="checkbox" id="kt_checkbox_1" /><label class="form-check-label fw-bold text-gray-600" for="kt_checkbox_1">You have new notifications</label></div><div class="form-check form-check-custom form-check-solid mb-3"><input class="form-check-input" type="checkbox" id="kt_checkbox_2"/><label class="form-check-label fw-bold text-gray-600" for="kt_checkbox_2">You're sent a direct message</label></div><div class="form-check form-check-custom form-check-solid"><input class="form-check-input" type="checkbox" id="kt_checkbox_3"/><label class="form-check-label fw-bold text-gray-600" for="kt_checkbox_3">Someone adds you as a connection</label></div></div></div>
            <div class="mb-5 row"><label class="col-xl-3 col-lg-3 col-form-label fw-bold text-start text-lg-end">When To Email</label><div class="col-lg-9 col-xl-6"><div class="form-check form-check-custom form-check-solid mb-3"><input class="form-check-input" type="checkbox" id="kt_checkbox_1" /><label class="form-check-label fw-bold text-gray-600" for="kt_checkbox_1">You have new notifications</label></div><div class="form-check form-check-custom form-check-solid mb-3"><input class="form-check-input" type="checkbox" id="kt_checkbox_2"/><label class="form-check-label fw-bold text-gray-600" for="kt_checkbox_2">You're sent a direct message</label></div><div class="form-check form-check-custom form-check-solid"><input class="form-check-input" type="checkbox" id="kt_checkbox_3"/><label class="form-check-label fw-bold text-gray-600" for="kt_checkbox_3">Someone adds you as a connection</label></div></div></div>
            <div className="d-flex justify-content-center align-items-center pt-2 mb-3">
                <h5 className="h6 fw-normal">Activity Related Emails:</h5>
            </div>
            <div class="mb-5 row"><label class="col-xl-3 col-lg-3 col-form-label fw-bold text-start text-lg-end">When To Email</label><div class="col-lg-9 col-xl-6"><div class="form-check form-check-custom form-check-solid mb-3"><input class="form-check-input" type="checkbox" id="kt_checkbox_1" /><label class="form-check-label fw-bold text-gray-600" for="kt_checkbox_1">You have new notifications</label></div><div class="form-check form-check-custom form-check-solid mb-3"><input class="form-check-input" type="checkbox" id="kt_checkbox_2"/><label class="form-check-label fw-bold text-gray-600" for="kt_checkbox_2">You're sent a direct message</label></div><div class="form-check form-check-custom form-check-solid"><input class="form-check-input" type="checkbox" id="kt_checkbox_3"/><label class="form-check-label fw-bold text-gray-600" for="kt_checkbox_3">Someone adds you as a connection</label></div></div></div>
            <div class="row mb-3"><label class="col-lg-3 col-form-label"></label><div class="col-lg-9"><button type="reset" class="btn btn-primary fw-bolder px-6 py-3 me-3">Save Changes</button><button type="reset" class="btn btn-color-gray-600 btn-active-light-primary fw-bolder px-6 py-3">Cancel</button></div></div>
        </div>
    </div>
        </Fragment>
    )
}

export default Settings
