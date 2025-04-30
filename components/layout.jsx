import { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css"

export const Layout = () => {
    const [loader, setLoader] = useState(true)
    const [menu, setMenu] = useState(true)
    const menubutton = () => {
        setMenu(!menu)
    }
    return(
        <>
            <div>
                <div className="header">
                    <header>
                        <nav>
                            <h3>Lutarn</h3>
                            <div className="searchinput">
                                <input type="search" name="" id="" placeholder="Search movies"/>
                                <button type="">Search</button>
                            </div>
                            <ul>
                                <li className="li">About</li>
                                <li className="li">Support</li>
                                <div className="menu" onClick={menubutton}>
                                    <div>
                                        {menu ? <i className="bi bi-list"></i> : <i class="bi bi-x-lg"></i>}
                                    </div>
                                </div>
                            </ul>
                        </nav>
                    </header>
                </div>

                    <div className="menubar">
                        {!menu ? (
                            <div className="menu-container">
                                <div className="menu-sub">
                                <div className="search-container">
                                <input type="search" name="" id="" placeholder="Search movies"/>
                                <button type="">Search</button>
                                </div>
                                <div>
                                    <ul className="ul-container">
                                        <div>
                                            <li className="link">About</li>
                                        </div>
                                        <div>
                                        <li className="link">Support</li>
                                        </div>
                                   
                                    </ul>
                                </div>
                                </div>
                            </div>
                        ) : ('')}
                    </div>


            </div>
        </>
    )
}