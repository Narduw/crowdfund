function StatTracker({ value,  description }) {
    return <div className="stat-tracker">
        <div className="value">{value}</div>
        <div className="description">{description}</div>
    </div>
}

export default StatTracker