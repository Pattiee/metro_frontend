import React from 'react';
import './nav-styles/sub-nav-styles.css';
import { CButton, CInput } from '../../CustomComponents';

const SubNav = () => {

    const htmlElem = document.querySelector("html");
    const initTheme = () => {
        const currentTheme = localStorage.getItem("theme") ?? "dark";
        htmlElem.classList.add(currentTheme);
    };
    initTheme();

    const setTheme = () => {
        const currentTheme = localStorage.getItem("theme") ?? "dark";
        const newTheme = currentTheme === "dark" ? "light": "dark";
        htmlElem.classList.replace(currentTheme, newTheme);
        localStorage.setItem("theme", newTheme);
    };


    return (
        <nav className='sub-nav'>
            <div>

            </div>

            <div>
                <form method="get">
                    <CInput type={"search"} name={"search"} placeholder={'Search... '} required={true}/>
                    <input type="submit" value="Search" />
                </form>
            </div>

            <div>
                <CButton name={"theme-btn"} text={"Theme"} event={setTheme}/>
            </div>

        </nav>
    )
}

export default SubNav
