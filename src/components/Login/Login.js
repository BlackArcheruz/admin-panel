import { useState } from "react"

const Login = () => {
    const [email,setEmail] = useState('admin@demo.com')
    const [password,setPassword] = useState('demo')
    return (
        <div className="d-flex flex-sm-column flex-md-column flex-lg-column flex-xl-row flex-xxl-row login">
            <div className="d-flex flex-column align-items-center justify-content-center text-center form-cover">
                <div className="d-flex flex-column my-5">
                <a href="/" className="text-center text-gray-600 my-4"><h3 className="fw-bolder text-gray-600 my-2 fs-1">Start.</h3></a>
                <h4 className="fw-bold">Discover Start <br/><br/>with great build tools</h4>
                </div>
                <div className="bg-form d-flex flex-row-fluid bgi-size-contain bgi-no-repeat bgi-position-y-bottom bgi-position-x-center min-h-350px mt-5"></div>
            </div>
            <form className="d-flex flex-column py-5 px-5">
                <h4 className="fw-bold my-3">
                Welcome to Start
                </h4>
                <div className="d-flex flex-row pt-2">
                <h4 className="text-muted fw-bold">
                New Here?
                </h4>
                <a href="/registration">Create Account</a>
                </div>
                <div className="alert alert-info my-5">
                Use credentials <b>admin@demo.com</b> and <b>demo</b> to sign in.
                </div>
                <label className="my-2">Email</label>
                <input type="email" placeholder="Email" className={`form-control my-3 ${email === '' ?'is-invalid': 'is-valid'}`} value={email} onChange={(e)=>setEmail(e.target.value)}/>
                {email === '' ? <div className="invalid-feedback">Email is Required</div> : null}
                <label className="my-2">Password</label>
                <input type="password" placeholder="Password" className={`form-control my-3 ${password === '' ?'is-invalid': 'is-valid'}`} value={password} onChange={(e)=>setPassword(e.target.value)}/>
                {password === '' ? <div className="invalid-feedback">Password is Required</div> : null}
                <div className="d-flex flex-row">
                <a href="/" className={`btn btn-primary py-3 px-3 ${email === '' && password === '' ? 'disabled' : ''}`}>Sign In</a>
                <button className="btn btn-primary bg-light-primary py-3 px-3 mx-3" style={{color: "#20d489"}}><i className="bi bi-google"></i> Sign In with Google</button>
                </div>
                <div className="footer d-flex flex-row justify-content-between mt-5 pt-5" style={{color: "#20db489 !important"}}>
                <a href="#" className="fw-bold mt-5" style={{color: "#20db489 !important",textDecoration: "none"}}>Teams</a>
                <a href="#" className="fw-bold mt-5" style={{color: "#20db489 !important",textDecoration: "none"}}>Plans</a>
                <a href="#" className="fw-bold mt-5" style={{color: "#20db489 !important",textDecoration: "none"}}>Contact Us</a>
            </div>
            </form>
        </div>
    )
}

export default Login
