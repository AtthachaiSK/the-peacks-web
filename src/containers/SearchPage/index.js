import React from "react";
import CardSearch from "../../components/CardSearch";
import ContentSection1 from "../../components/ContentSection1";
import Loading from "../../components/Loading";
import { callApiGetNewsPaging } from "../../apis";

class SearchPage extends React.Component {
  state = {
    loading: false,
    datas: [],
    lastSearch: null,
    pages: 0,
    currentPage: 1,
    orderBy: "newest"
  };
  handleScroll = () => {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      let { currentPage, pages, lastSearch, loading } = this.state;
      console.log("currentPage", currentPage, "pages", pages, "lastSearch", lastSearch, "loading", loading)
      if (currentPage < pages && lastSearch && loading === false) {
        this.scrollBottomReached(currentPage + 1);
      }
    } else {
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  scrollBottomReached = (page) => {
    try {
      this.setState({ loading: true });
      callApiGetNewsPaging(this.state.lastSearch, page).then((data) => {
        let { status, results, currentPage } = data.response;
        if (status === "ok") {
          this.setState({ currentPage: currentPage, datas: this.state.datas.concat(results) });
        }
        this.setState({ loading: false });
      });
    } catch (error) {
      console.error(error);
      this.setState({ loading: false });
    }
  };
  fetchBySearchAPI = (search) => {
    try {
      this.setState({ loading: true });
      this.setState({ lastSearch: search });
      callApiGetNewsPaging(search).then((data) => {
        let { status, results, pages } = data.response;
        if (status === "ok") {
          this.setState({
            datas: results,
            pages: pages,
          });
        }
        this.setState({
          loading: false,
        });
      });
    } catch (error) {
      console.error("error", error);
      this.setState({
        loading: false,
      });
    }
  };

 
  getSearchTextFromHeader(search) {
    this.fetchBySearchAPI(search);
  }
  onSelectNews = (select) => {
    console.log("value", select);
    this.setState({ orderBy: select })
    if (this.state.lastSearch) {
      // this.fetchBySearchAPI(this.state.lastSearch, select)
    }
  };
  render() {
    return (
      <>
        {this.state.loading ? (
          Loading()
        ) : (
            <main>
              <ContentSection1
                selected={this.state.orderBy}
                onSelect={this.onSelectNews}
                showBookmark={true} title={"Search Result"} />
              <div id="content-main-search">
                {this.state.datas.map((item, index) => (
                  <CardSearch key={`${index}`} data={item} />
                ))}
              </div>
            </main>
          )}
      </>
    );
  }
}
export default SearchPage;
