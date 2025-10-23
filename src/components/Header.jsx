import { FaShoppingCart } from "react-icons/fa";
import Select from "./inputs/Select";
import Logo from "./Logo";
import ResponsiveMenu from "./ResponsiveMenu";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <Logo />
      </div>

      <nav className="header-right">
        <a href="#">how it works</a>

        <Select
          options={[
            {
              value: "1",
              name: "AUDIO CONSOLE",
            },
            {
              value: "2",
              name: "PHOTO CONSOLE",
            },
            {
              value: "3",
              name: "VIDEO CONSOLE",
            },
            {
              value: "4",
              name: "MINI CONSOLE",
            },
          ]}
          defaultName={"WORKFLOWS"}
        />

        <a href="#">download</a>
        <a href="#">blog</a>
        <a href="#">support</a>
        <a href="#">shop</a>

        <ResponsiveMenu />

        <button className="cart-btn">
          <FaShoppingCart />
        </button>

        <Select className="usd"
          options={[
            {
              value: "1",
              name: "USD",
            },
            {
              value: "2",
              name: "CAD",
            },
            {
              value: "3",
              name: "AUD",
            },
            {
              value: "4",
              name: "GBP",
            },
            {
              value: "5",
              name: "KRW",
            },
            {
              value: "6",
              name: "JPY",
            },
            {
              value: "7",
              name: "EURO",
            },
          ]}
          defaultName={"USD"}
        />
      </nav>
    </div>
  );
}

export default Header;
