import LineSeparator from "../extras/Linesparator";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="h1 text-center"><span className="color-primary">My To</span>do <span>list</span></h1>
                        <LineSeparator color="main"/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;