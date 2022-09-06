import React from 'react';
import telImg from "../img/Telegram_logo.svg"
import mailImg from "../img/Gmail_logo.svg"
import linkImg from "../img/Linkedin_logo.svg"
function Contacts(props) {
    return (
        <div>
            <address className={"addressBox"}>
                <span  className={"contactLine"}><img className={"contactLogo"} src={telImg} alt="logo"/>
                    <a href="https://telegram.me/arendsn">@ArenDSN</a>
                </span>
                <span className={"contactLine"}><img className={"contactLogo"} src={mailImg} alt="logo"/>
                    <a href="mailto:arenko.design@gmail.com">arenko.design@gmail.com</a>
                </span>
                <span className={"contactLine"}><img className={"contactLogo"} src={linkImg} alt="logo"/>
                    <a href="https://www.linkedin.com/in/alexander-bnd">Alexander Bondarenko</a>
                </span>

            </address>

        </div>
    );
}

export default Contacts;