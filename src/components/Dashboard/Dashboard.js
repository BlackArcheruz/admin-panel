import { Fragment } from "react"
import Section from "./Section/Section";
import LastSection from "./last_Section/LastSection";
import Aside from "./Aside/Aside"

const Dashboard = () => {
    return (
        <Fragment>
            <Section/>
            <LastSection/>
            <Aside/>
        </Fragment>
    )
}

export default Dashboard
