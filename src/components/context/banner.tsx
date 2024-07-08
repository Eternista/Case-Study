import bannerSrc from "../../assets/images/banner.jpg";

const Banner = () => {
    return (
        <section className="l-sec-banner">
            <div className="wrapper">
                <img src={bannerSrc} alt="Case Banner Image" />
            </div>
        </section>
    )
}

export default Banner;