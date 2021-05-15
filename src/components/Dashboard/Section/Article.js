import Table from "./Article/Table"

const Article = () => {
    return (
        <div className="col-xl-8">
            <div className="card card-stretch mb-5 mb-xxl-8">
                <div className="card-header border-0 pt-4" style={{display: 'flex', alignItems: "center", justifyContent: "space-between", borderRadius: ".65rem"}}>
                    <h3 className="card-title align-items-start flex-column article-title">
                        <span className="card-label fw-bolder text-dark fs-3">Campaign Leaders</span>
                        <span className="text-muted mt-2 fw-bold fs-6" style={{display: "block"}}>890,344 Sales</span>
                    </h3>
                    <div className="card-toolbar">
                        <ul className="nav nav-pills nav-pills-sm nav-light">
                            <li className="nav-item"><a className="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2 active" data-bs-toggle="tab" href="#kt_tab_pane_1_1">Day</a></li>
                            <li className="nav-item"><a className="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2" data-bs-toggle="tab" href="#kt_tab_pane_1_2">Week</a></li>
                            <li className="nav-item"><a className="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder" data-bs-toggle="tab" href="#kt_tab_pane_1_3">Month</a></li>
                            </ul>
                        </div>
                </div>
                <Table/>
            </div>
        </div>
    )
}

export default Article
