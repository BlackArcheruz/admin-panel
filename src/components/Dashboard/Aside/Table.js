import toolbar from './img/toolbar.svg'
import TableContent from './Table/TableContent'

const Table = () => {
    return (
        <div className="col-xl-8">
            <div className="card card-stretch mb-5 mb-xxl-8">
            <div className="card-header border-0 pt-4" style={{display: 'flex', alignItems: "center", justifyContent: "space-between", borderRadius: ".65rem"}}>
                    <h3 className="card-title align-items-start flex-column article-title">
                        <span className="card-label fw-bolder text-dark fs-3">Milestones</span>
                        <span className="text-muted mt-2 fw-bold fs-6" style={{display: "block"}}>890,344 Sales</span>
                    </h3>
                    <div className="card-toolbar dropdown">
                <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><span className="svg-icon svg-icon-1"><img src={toolbar} alt="" /></span></button>
                </div>
                    </div>
                    <TableContent/>
            </div>
        </div>
    )
}

export default Table
