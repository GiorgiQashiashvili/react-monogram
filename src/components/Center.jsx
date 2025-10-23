import robots from "../assets/banniere-blog-robots-humanoides-2.jpg"

function Center() {
    return (
        <div className="center-main">
            <div className="create-console">
                <div className="console-cover">
                    <h1>CREATE YOUR OWN CONSOLE</h1>
                    <p>Add-on make it perfect.</p>
                </div>
                <img src={robots} alt="" />
            </div>
        </div>
    )
}

export default Center