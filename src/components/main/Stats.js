import StatTracker from "./stats/StatTracker"
import Separator from "./stats/Separator"
import ProgressBar from "./stats/ProgressBar"

function Stats() {
    return <section className="project-stats">
        <StatTracker value="$89,914" description="of $100,000 backed"/>
        <Separator/>
        <StatTracker value="5,007" description="total backers"/>
        <Separator/>
        <StatTracker value="56" description="days left"/>
        <ProgressBar progress={89.9}/>
    </section>
}

export default Stats