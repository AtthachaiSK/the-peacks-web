
import React from 'react'
import ContentSection1 from '../../components/ContentSection1';
import CardSearch from '../../components/CardSearch'

class BookmarkPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: [1, 2, 3, 5, 6, 7, 8, 9, 10, 11],
            height: window.innerHeight,
            bottom_scroll: false
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;
        if (windowBottom >= docHeight) {
            this.setState({
                bottom_scroll: true
            });
            this.scrollBottomReached();
        } else {
            this.setState({
                bottom_scroll: false
            });
        }
    }
    scrollBottomReached = () => {
        // console.log("state", this.state)
        // for (let a of arrNews) {
        //     this.setState({ datas: this.state.datas.concat(a) })
        // }
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    render() {
        return (<>
              <main>
            <ContentSection1 showBookmark={false} title={"All Bookmark"} />
            <div id="sidebarLeft"></div>
            <div id="sidebarRight"></div>
            <div id="content-main-search">
                {
                    this.state.datas.map((item, index) => (
                        <CardSearch key={`${index}`} />
                    ))
                }
            </div>
            </main>
        </>)
    }
}

export default BookmarkPage;
