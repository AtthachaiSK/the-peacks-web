import bookmarOnIcon from "../../assets/bookmarkon-icon.svg";
function ButtonBookmark() {
    return (
        <>
            <button className="btn-bookmark" type="button">
                <img className="btn-icon" src={bookmarOnIcon} alt="search" />
                <span className="btn-text">View Bookmark</span>
            </button>
        </>
    )
}
export default ButtonBookmark;
