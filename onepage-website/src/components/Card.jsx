const Card = ({ data }) => {
    return (
        <div class="intro-cards">
            <div class="container">
                <div class="row">
                    {
                        data.map((val, index) => {
                            return (
                                <div class="col-md-4 mb-md-0 mb-2">
                                    <div class="card shadow-sm">
                                        <div class="card-body">
                                            <i class={val.icon}></i>
                                            <h3 class="card-title">{val.title}</h3>
                                            <div class="divider-shape"></div>
                                            <p class="card-text">{val.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Card