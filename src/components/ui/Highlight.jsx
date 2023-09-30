function Highlight({icon, title, subtitle}) {
    return (
        <div className="highlight">
            <div className="highlight__img">
                {icon}
            </div>
            <h3 className="highlight__subtitle">{title}</h3>
            <p className="highlight_para">{subtitle}</p>
        </div>
    )
}

export default Highlight