function Reward({ name, minPrice, description, remaining }) {
    console.log(`Remaining: ${remaining}`)
    return <article className="reward">
        <h3 className="name">{name}</h3>
        <h4 className="min-price">Pledge ${minPrice} or more</h4>
        <p className="description">{description}</p>
        <div>
            <span className="remaining">{remaining || 0}</span>
            <sup className="description"> left</sup>
        </div>
    </article>
}

export default Reward