import logo from "../../assets/logo-white.png";
function CardSearch(props) {
  
    const getBgCard = () => {
        let { data } = props;
        if (data?.fields?.thumbnail) {
            return { backgroundImage: `url("${data.fields.thumbnail}")` };
        } else {
            return { backgroundImage: `url(${logo})`, backgroundSize: "initial", backgroundPosition: "50% 30%" };
        }
    };
    return (
        <>
            <div className="card5" style={getBgCard()}>
                <div className="card-body">
                    <h5 className="title">{props?.data?.webTitle || ""}</h5>
                
                </div>
            </div>
        </>
    );
}
export default CardSearch;
