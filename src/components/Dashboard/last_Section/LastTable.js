import React from 'react'

const LastTable = () => {
    const datas = [
        {
            id: 1,
            color: "#00a3ff",
            icon: "bi bi-chat-square-text-fill",
            bg: "https://preview.keenthemes.com/start-react/media/svg/avatars/001-boy.svg",
            title: "Brad Simmons",
            text: "HTML,CSS Coding",
            progress: "23%",
            bg_progress: "bg-primary",
            bg_progress_main: "bg-light-primary"
        },
        {
            id: 2,
            color: "#ffc700",
            icon: "bi bi-window",
            bg: "bg-light-warning",
            title: "Jessie Clarcson",
            text: "Most Successful",
            progress: "86%",
            bg_progress: "bg-warning",
            bg_progress_main: "bg-light-warning"
        },
        {
            id: 3,
            color: "#00a3ff",
            icon: "bi bi-person-fill",
            bg: "bg-light-success",
            title: "Lebron Wayde",
            text: "Awesome Users",
            progress: "53%",
            bg_progress: "bg-success",
            bg_progress_main: "bg-light-success"
        },
        {
            id: 4,
            color: "#f1416c",
            icon: "bi bi-bookmarks-fill",
            bg: "bg-light-danger",
            title: "Kevin Leonard",
            text: "Awesome Userss",
            progress: "92%",
            bg_progress: "bg-danger",
            bg_progress_main: "bg-light-danger"
        },
        {
            id: 5,
            color: "#f1416c",
            icon: "bi bi-bookmarks-fill",
            bg: "bg-light-danger",
            title: "Randy Trent",
            text: "Business Analyst",
            progress: "92%",
            bg_progress: "bg-danger",
            bg_progress_main: "bg-light-danger"
        }
    ]
    return (
        <div className="card-body pt-2 pb-0 mt-n3 table-landing">
        <div className="tab-content mt-3" id="myTabTables1">
            <div className="tab-pane fade active show" id="kt_tab_pane_1_1" role="tabpanel" aria-labelledby="kt_tab_pane_1_1">
                <div className="table-responsive" style={{backgroundColor: "#fff"}}><table className="table table-borderless align-middle">
                    <thead><tr><th className="p-0 w-50px"></th><th className="p-0 min-w-200px"></th><th className="p-0 min-w-100px"></th><th className="p-0 min-w-40px"></th></tr></thead><tbody>
                {datas.map((data)=>(
                <tr key={data.id}><th className="px-0 py-3"><div className={`symbol symbol-65px me-5 ${data.bg}`}><span className={`symbol-label ${data.bg}`}><span className="svg-icon svg-icon-1 svg-icon-success">
                    <img src={`${data.icon}`} alt=""></img>
    </span>
    </span>
    </div>
    </th>
        <td className="ps-0"><a className="text-gray-800 fw-bolder text-hover-primary fs-6">{data.title}</a><span className="text-muted fw-bold d-block mt-1">{data.text}</span></td>
        <td><div className="d-flex flex-column"><p className="fw-bolder text-gray-800 ps-3 pe-3">$1,200,000</p><p className="fw-normal fs-7 timeline-content text-gray-600 ps-3">Paid</p></div></td>
        <td><div class="d-flex flex-column w-100 me-3"><div class="d-flex align-items-center justify-content-between mb-2"></div><div class="d-flex align-items-center"><span class={`text-muted fs-7 fw-bold ps-3 ${data.color}`}>{data.progress}</span></div></div></td>
        <td class="text-end pe-0"><a class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm btn-table">
        <i className="bi bi-arrow-right" style={{fontSize: "1.45rem", fontWeight: "600"}}></i>
        </a>
        </td>
        </tr>))}
    </tbody>
    </table>
    </div>
    </div>
    </div>
    </div>   
    )
}

export default LastTable
