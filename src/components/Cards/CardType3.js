
function CardType3(props) {
  
    return (
        <>
            <div className="card3">
                <div className="card-body">
                    <h5 className="title">{props?.data?.webTitle || ""}</h5>
                </div>
            </div>
        </>
    )
}
export default CardType3;