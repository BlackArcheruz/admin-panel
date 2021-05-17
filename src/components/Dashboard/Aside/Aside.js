import React from 'react'
import Card from './Card'
import Table from './Table'

const Aside = () => {
    return (
        <div className="d-flex flex-column flex-column-fluid">
            <div className="content fs-6 d-flex flex-column-fluid">
                <div className="container">
                    <div className="row g-0 g-xl-5 g-xxl-8">
                        <Card/>
                        <Table/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aside
