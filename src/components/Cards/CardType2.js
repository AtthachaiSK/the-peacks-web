
function CardType2(props) {
    const getBgCard = () => {
        let { data } = props;
        if (data?.fields?.thumbnail) {
            return { backgroundImage: `url("${data.fields.thumbnail}")` }
        } else {
            return {}
        }
    }
  
    return (
        <>
            <div className="card2" style={getBgCard()}>
                <div className="card-body">
                    <h5 className="title">{props?.data?.webTitle || ""}</h5>
                </div>
            </div>
        </>
    )
}
export default CardType2;