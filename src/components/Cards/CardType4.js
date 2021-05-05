
function CardType1(props) {
    const getBgCard = () => {
        let { data } = props;
        if (data?.fields?.thumbnail) {
            return { backgroundImage: `url("${data.fields.thumbnail}")` }
        } else {
            return {}
        }
    }
    const trimBodyHtml = () => {
        const regex = /(<([^>]+)>)/ig
        if (props?.data?.fields?.body)
            return (props.data.fields.body.replace(regex, "").substring(0, 200));
        else return "";

    }
    return (
        <>
            <div className="card4" style={getBgCard()}>
                <div className="card-body">
                    <h5 className="title">{props?.data?.webTitle || ""}</h5>
                    <p dangerouslySetInnerHTML={{ __html: trimBodyHtml() }}>
                    </p>
                </div>
            </div>
        </>
    )
}
export default CardType1;