interface baseContextProps {
    data: {
        title: string;
        texts: string[];
    }
}

const BaseContext = ({data} : baseContextProps) => {

    return (
        <section className="l-sec l-sec-base">
            <div className="wrapper wrapper-small">
                <h2 className="section-title">{data.title.toUpperCase()}</h2>
                {data.texts.map((text, index) => (
                    <div key={index} dangerouslySetInnerHTML={{ __html: text }} />
                ))}
            </div>
        </section>
    )
}

export default BaseContext;