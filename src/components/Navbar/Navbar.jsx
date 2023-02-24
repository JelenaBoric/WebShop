import React from "react"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {Link} from "react-router-dom";
import "./Navbar.scss";


const Navbar= () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/rsz_1bosnian-flag.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>BAM</span>
            <KeyboardArrowDownIcon/>
          </div>
          <div className="item">
            <Link className="link" to="/products/1">Dečaci</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">Devojčice</Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">Ime Prodavnice</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">Početna stranica</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">O prodavnici</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">Kontakt</Link>
          </div>
          <div className="icons">
            <SearchIcon/>
            <PersonOutlineOutlinedIcon/>
            <FavoriteBorderOutlinedIcon/>
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon/>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar