import bannerSrc from "../../assets/images/banner.jpg";

const Banner = () => {
    return (
        <section className="l-sec-banner">
            <div className="wrapper">
                <img src={bannerSrc} alt="Case Banner Image" />
                <p><b>Note:</b>The images are blurred due to the company's privacy policy. Full projects can be shown and discussed during a video interview.</p>
            </div>
        </section>
    )
}

export default Banner;