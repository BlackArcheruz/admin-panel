import graphic from '../img/grafik.svg'

const TableSecond = () => {
    return (
        <div className="d-flex flex-column table-second px-5">
            <div className="d-flex justify-content-between">

            <div className="d-flex flex-column">
                <span className="text-muted fw-bold d-block pt-1">Sale</span>
                <span className="nav-text text-gray-600 fw-bolder fs-6">$650</span>
            </div>
            <div className="d-flex flex-column">
                <span className="text-muted fw-bold d-block pt-1">Sale</span>
                <span className="nav-text text-gray-600 fw-bolder fs-6">$650</span>
            </div>
            <div className="d-flex flex-column">
                <span className="text-muted fw-bold d-block pt-1">Sale</span>
                <span className="nav-text text-gray-600 fw-bolder fs-6">$650</span>
            </div>
            </div>
            <img src={graphic} alt="" style={{height: "100%"}}/>
        </div>
    )
}

export default TableSecond
