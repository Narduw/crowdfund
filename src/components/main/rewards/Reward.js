function Reward({ name, minPrice, description, remaining }) {
    const disabled = remaining ? '' : ' disabled'
    return <article className={'reward' + disabled}>
        <h3 className="name">{name}</h3>
        <h4 className="min-price">Pledge ${minPrice} or more</h4>
        <p className="description">{description}</p>
        <div className="remaining">
            <span className="value">{remaining || 0}</span>
            <sup className="description"> left</sup>
        </div>
        <button className={'btn btn-' + (remaining ? 'primary' : 'secondary')}>{remaining ? 'Select Reward' : 'Out of Stock'}</button>
    </article>
}

export default Reward