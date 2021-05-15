import React from 'react'
import Article from './Article'
import Card from './Card'

const Section = () => {
    return (
        <section>
        <div className="d-flex flex-column flex-column-fluid">
            <div className="content fs-6 d-flex flex-column-fluid">
                <div className="container">
                    <div className="row g-0 g-xl-5 g-xxl-8">
                        <Card/>
                        <Article/>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Section
