import { useEffect, useState } from "react";

interface BaseContextProps {
    data: {
        title: string;
        texts: string[];
    }
}

const BaseContext = ({ data }: BaseContextProps) => {
    const [htmlContent, setHtmlContent] = useState<string>('');

    useEffect(() => {
        const joinedText = data.texts.join('');
        setHtmlContent(joinedText);
    }, [data.texts]);

    return (
        <section className="l-sec l-sec-base">
            <div className="wrapper wrapper-small">
                <h2 className="section-title">{data.title.toUpperCase()}</h2>
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </div>
        </section>
    )
}

export default BaseContext;