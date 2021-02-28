function ProgressBar({ progress }) {

    if (progress > 100) {
        progress = 100;
    } else if (progress < 0) {
        progress = 0;
    }

    return <div className="progress-bar">
        <div style={{ width: `${progress}%` }} className="progress"></div>
    </div>
}

export default ProgressBar