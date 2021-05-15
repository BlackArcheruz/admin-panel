import React from 'react'

const Table = () => {
    const datas = [
        {
            id: 1,
            color: "#00a3ff",
            icon: "bi bi-chat-square-text-fill",
            bg: "bg-light-success",
            title: "Top Authors",
            text: "HTML/CSS/JS, Python",
            progress: "46%",
            bg_progress: "bg-primary",
            bg_progress_main: "bg-light-primary"
        },
        {
            id: 2,
            color: "#ffc700",
            icon: "bi bi-window",
            bg: "bg-light-warning",
            title: "Popular Authors",
            text: "HTML, VueJS, Laravel",
            progress: "86%",
            bg_progress: "bg-warning",
            bg_progress_main: "bg-light-warning"
        },
        {
            id: 3,
            color: "#00a3ff",
            icon: "bi bi-person-fill",
            bg: "bg-light-success",
            title: "New Users",
            text: "HTML/CSS/JS, Python",
            progress: "53%",
            bg_progress: "bg-success",
            bg_progress_main: "bg-light-success"
        },
        {
            id: 4,
            color: "#f1416c",
            icon: "bi bi-bookmarks-fill",
            bg: "bg-light-danger",
            title: "Weekly Bestsellers",
            text: "HTML/CSS/JS, Python",
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
                    <i className={data.icon} style={{fontSize: "1.45rem", fontWeight: "600", color: `${data.color}`}}></i>
    </span>
    </span>
    </div>
    </th>
        <td className="ps-0"><a className="text-gray-800 fw-bolder text-hover-primary fs-6">{data.title}</a><span className="text-muted fw-bold d-block mt-1">{data.text}</span></td>
        <td><div class="d-flex flex-column w-100 me-3"><div class="d-flex align-items-center justify-content-between mb-2"><span class="text-dark me-2 fs-6 fw-bolder">Progress</span></div><div class="d-flex align-items-center"><div class={`progress h-6px  w-100 ${data.bg_progress_main}`}><div class={`progress-bar ${data.bg_progress}`} role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: `${data.progress}`}}></div></div><span class="text-muted fs-7 fw-bold ps-3">{data.progress}</span></div></div></td>
        <td class="text-end pe-0"><a class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm btn-table">
        <i className="bi bi-arrow-right" style={{fontSize: "1.45rem", fontWeight: "600"}}></i>
        </a>
        </td>
        </tr>))}
    </tbody>
    </table>
    </div>
    </div>
            <div className="tab-pane fade" id="kt_tab_pane_1_2" role="tabpanel" aria-labelledby="kt_tab_pane_1_2">
                <div className="table-responsive" style={{backgroundColor: "#fff"}}><table className="table table-borderless align-middle">
                    <thead><tr><th className="p-0 w-50px"></th><th className="p-0 min-w-200px"></th><th className="p-0 min-w-100px"></th><th className="p-0 min-w-40px"></th></tr></thead><tbody>
                {datas.map((data)=>(
                <tr key={data.id}><th className="px-0 py-3"><div className={`symbol symbol-65px me-5 ${data.bg}`}><span className={`symbol-label ${data.bg}`}><span className="svg-icon svg-icon-1 svg-icon-success">
                    <i className={data.icon} style={{fontSize: "1.45rem", fontWeight: "600", color: `${data.color}`}}></i>
    </span>
    </span>
    </div>
    </th>
        <td className="ps-0"><a className="text-gray-800 fw-bolder text-hover-primary fs-6">{data.title}</a><span className="text-muted fw-bold d-block mt-1">{data.text}</span></td>
        <td><div class="d-flex flex-column w-100 me-3"><div class="d-flex align-items-center justify-content-between mb-2"><span class="text-dark me-2 fs-6 fw-bolder">Progress</span></div><div class="d-flex align-items-center"><div class={`progress h-6px  w-100 ${data.bg_progress_main}`}><div class={`progress-bar ${data.bg_progress}`} role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: `${data.progress}`}}></div></div><span class="text-muted fs-7 fw-bold ps-3">{data.progress}</span></div></div></td>
        <td class="text-end pe-0"><a class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm btn-table">
        <i className="bi bi-arrow-right" style={{fontSize: "1.45rem", fontWeight: "600"}}></i>
        </a>
        </td>
        </tr>))}
    </tbody>
    </table>
    </div>
    </div>
            <div className="tab-pane fade" id="kt_tab_pane_1_3" role="tabpanel" aria-labelledby="kt_tab_pane_1_3">
                <div className="table-responsive" style={{backgroundColor: "#fff"}}><table className="table table-borderless align-middle">
                    <thead><tr><th className="p-0 w-50px"></th><th className="p-0 min-w-200px"></th><th className="p-0 min-w-100px"></th><th className="p-0 min-w-40px"></th></tr></thead><tbody>
                {datas.map((data)=>(
                <tr key={data.id}><th className="px-0 py-3"><div className={`symbol symbol-65px me-5 ${data.bg}`}><span className={`symbol-label ${data.bg}`}><span className="svg-icon svg-icon-1 svg-icon-success">
                    <i className={data.icon} style={{fontSize: "1.45rem", fontWeight: "600", color: `${data.color}`}}></i>
    </span>
    </span>
    </div>
    </th>
        <td className="ps-0"><a className="text-gray-800 fw-bolder text-hover-primary fs-6">{data.title}</a><span className="text-muted fw-bold d-block mt-1">{data.text}</span></td>
        <td><div class="d-flex flex-column w-100 me-3"><div class="d-flex align-items-center justify-content-between mb-2"><span class="text-dark me-2 fs-6 fw-bolder">Progress</span></div><div class="d-flex align-items-center"><div class={`progress h-6px  w-100 ${data.bg_progress_main}`}><div class={`progress-bar ${data.bg_progress}`} role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: `${data.progress}`}}></div></div><span class="text-muted fs-7 fw-bold ps-3">{data.progress}</span></div></div></td>
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

export default Table
