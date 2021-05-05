import ButtonBookmark from '../ButtonBookmark'
function ContentSection1(props) {
    return (
        <>
            <div id="content1">
                <div id="content1-1">
                    <h2>{props?.title || "Top stories"}</h2>
                </div>
                <div id="content1-2">
                    {props.showBookmark && <ButtonBookmark />}

                </div>
                <div id="content1-3">
                    <div className="select-wrapper">
                        <select onChange={(event) => props.onSelect(event.target.value)} className="dropdown" value={props.selected} >
                            <option value="newest">Newest first</option>
                            <option value="oldest">Oldest first</option>
                            <option value="relevance">Most popular</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContentSection1;