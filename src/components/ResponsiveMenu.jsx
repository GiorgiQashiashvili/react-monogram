import { useState } from "react"
import { IoMenu } from "react-icons/io5";
import Select from "./inputs/Select";
import { FaShoppingCart } from "react-icons/fa";


function ResponsiveMenu() {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <div className="menu-main">

            <button className="menu-btn"
                onClick={toggleMenu}
            ><IoMenu /></button>

            {menuOpen && (
                <div className="menu">

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

                </div>
            )}

        </div>
    )
}

export default ResponsiveMenu