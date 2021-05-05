import React, { useState } from 'react'
import logo from "../../assets/logo-white.png";
import searchIcon from "../../assets/search-icon.svg";
import { useHistory } from "react-router-dom";
import { useLocation } from 'react-router-dom'
function Header(props) {
    const history = useHistory();
    const location = useLocation();
    const [searchNews, setSearchNews] = useState("");
    const handKeyUp = (event) => {
        console.log("useLocation", location.pathname)
        if (location.pathname !== "/search") {
            history.push("/search");
        }
        if (event.key === 'Enter') {
            console.log('do validate', searchNews);
            props.handleSearch(searchNews);
        }
        setSearchNews(event.target.value);
    }
    const handleClick = () =>{
        history.push("/");
    }
    return (
        <>
            <nav>
                <div className="nav1"></div>
                <div className="nav2">
                    <div className="container-logo">
                        <img className="logo" onClick={handleClick} style={{ cursor: "pointer" }} src={logo} alt="logo The Peacks" />
                    </div>
                </div>
                <div className="nav3">
                    <div className="nav3-1"></div>
                    <div className="nav3-2">
                        <div className="container-search">
                            <input onKeyUp={handKeyUp} type="search" id="search" placeholder="Search all news" />
                            <div className="icon">
                                <img src={searchIcon} alt="search" />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;