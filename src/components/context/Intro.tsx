interface Introdata {
    data: {
        title : string;
        description : string;
        information : {
            company: string;
            role: string;
            collaboration: string;
            status: string;
        };
    };
}

const Intro = ({data} : Introdata) => {

    return (
        <section className="l-sec l-sec-intro">
            <div className="wrapper wrapper-small">
                <h1>{data.title}</h1>
                <p>{data.description}</p>
                <ul className="information-list">
                    <li><p><span style={{ color: "#525252"}}>Company: </span>{data.information.company}</p></li>
                    <li><p><span style={{ color: "#525252"}}>Role: </span>{data.information.role}</p></li>
                    <li><p><span style={{ color: "#525252"}}>Collaboration: </span>{data.information.collaboration}</p></li>
                    <li><p><span style={{ color: "#525252"}}>Status: </span>{data.information.status}</p></li>
                </ul>
            </div>
        </section>
    )

}

export default Intro;