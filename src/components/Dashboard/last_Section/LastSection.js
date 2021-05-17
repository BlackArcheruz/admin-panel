import LastArticle from "./LastArticle"
import Timeline from "./Timeline"

const LastSection = () => {
    return (
        <section>
        <div className="d-flex flex-column flex-column-fluid">
            <div className="content fs-6 d-flex flex-column-fluid">
                <div className="container">
                    <div className="row g-0 g-xl-5 g-xxl-8">
                        <Timeline/>
                        <LastArticle/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LastSection
