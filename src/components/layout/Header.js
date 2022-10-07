import classes from "./Header.module.css";
import {Fragment} from "react";
import img from "../../images/header-main.jpg";


function Header(props) {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Bonginat</h1>
                <button>Cart</button>
            </header>
            <div className={classes[`main-image`]}>
                <img src={img} alt="meals"/>
            </div>
        </Fragment>

    );
}

export default Header;