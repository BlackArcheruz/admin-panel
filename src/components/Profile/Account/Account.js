import { Fragment } from "react"
import { Link } from "react-router-dom"

const Account = () => {
    return (
        <Fragment>
        <div className="profile-page d-flex justify-content-between">
        <div className="d-flex flex-row">
            <div className="over d-flex flex-column">
                <h4 className="fw-bold fs-5">
                    Account
                </h4>
            <div className="d-flex">
                <a href="/dashboard" className="text-muted">Home</a>
                -
                <a href="/dashboard" className="text-muted">Profile</a>
                -
                <p className="text-gray-600">Account</p>
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
                <form className="form d-flex flex-center">
                    <div className="card-body mw-800px py-20">
                        <div className="container">
                    <div class="row mb-5 mt-5 align-items-center"><label class="col-lg-3 col-form-label">Username</label><div class="col-lg-9"><div class="spinner spinner-sm spinner-primary spinner-right"><input class="form-control form-control-lg form-control-solid" type="text" value="max_stone"/></div></div></div>
                    <div class="row mb-5 align-items-center"><label class="col-lg-3 col-form-label">Email</label><div class="col-lg-9"><div class="input-group input-group-lg input-group-solid"><input type="text" class="form-control form-control-lg form-control-solid" placeholder="Email" value="nick.watson@loop.com"/></div><div class="form-text">Email will not be publicly displayed. <a href="#" class="fw-bold">Learn more</a>.</div></div></div>
                    <div class="row mb-5 align-items-center"><label class="col-lg-3 col-form-label">Language</label><div class="col-lg-9"><div class="spinner spinner-sm spinner-primary spinner-right"><input class="form-control form-control-lg form-control-solid" type="language" value="English"/></div></div></div>
                    <div class="row mb-5 align-items-center"><label class="col-lg-3 col-form-label">Time Zone</label><div class="col-lg-9"><div class="spinner spinner-sm spinner-primary spinner-right"><input class="form-control form-control-lg form-control-solid" type="time-zone" value="(GMT+5) - Tashkent"/></div></div></div>
                    <div class="row mb-5 align-items-center">
                    <label class="col-lg-3 col-form-label">Communication</label>
                    <div class="col-lg-9"><div class="d-flex align-items-center"><div class="form-check form-check-custom form-check-solid me-5"><input class="form-check-input" type="checkbox" id="inlineCheckbox1"/><label class="form-check-label fw-bold" for="inlineCheckbox1">Email</label></div><div class="form-check form-check-custom form-check-solid me-5"><input class="form-check-input" type="checkbox" id="inlineCheckbox2" checked=""/><label class="form-check-label fw-bold" for="inlineCheckbox2">SMS</label></div><div class="form-check form-check-custom form-check-solid"><input class="form-check-input" type="checkbox" id="inlineCheckbox3"/><label class="form-check-label fw-bold" for="inlineCheckbox3">Phone</label></div></div></div>
                    </div>
                    <div class="separator separator-dashed my-10"></div>
                    <div class="row mb-5"><label class="col-lg-3 col-form-label">Login verification</label><div class="col-lg-9"><button type="button" class="btn btn-light-primary fw-bold btn-sm">Setup login verification</button><div class="form-text">After you log in, you will be asked for additional information to confirm your identity and protect your account from being compromised.<a href="#" class="fw-bold">Learn more</a>.</div></div></div>
                    <div class="row mb-5"><label class="col-lg-3 col-form-label">Password reset verification</label><div class="col-lg-9"><div class="form-check form-check-custom form-check-solid me-5"><input class="form-check-input" type="checkbox" id="customCheck5"/><label class="form-check-label fw-bold" for="customCheck5">Require personal information to reset your password.</label></div><div class="form-text py-2">For extra security, this requires you to confirm your email or phone number when you reset your password.<a href="#" class="fw-boldk">Learn more</a>.</div><button type="button" class="btn btn-light-danger fw-bold btn-sm">Deactivate your account ?</button></div></div>
                    <div class="row"><label class="col-lg-3 col-form-label"></label><div class="col-lg-9"><button type="reset" class="btn btn-primary fw-bolder px-6 py-3 me-3">Save Changes</button><button type="reset" class="btn btn-color-gray-600 btn-active-light-primary fw-bolder px-6 py-3">Cancel</button></div></div>
                    </div>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}

export default Account
