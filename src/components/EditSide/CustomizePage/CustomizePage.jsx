import "./CustomizePage.css"

function LayoutContainer() {
    return (
        <div className="layout-container">
            <h1>Layout</h1>
            <div className="layout-buttons">
                <button className="layout-btn">
                    <div className="layout-box1"></div>
                    <p>Top</p>
                </button>
                <button className="layout-btn">
                    <div className="layout-box2"></div>
                    <p>Left</p>
                </button>
                <button className="layout-btn">
                    <div className="layout-box3"></div>
                    <p>Right</p>
                </button>
            </div>
        </div>
    )
}

function ColorContainer() {
    return (
        <div className="color-container">
            <h1>Color</h1>
            <label className="color-option">
                <p className="color-text">Accent Color</p>
                <input className="color-button" type="color" value={'#0e374e'}></input>
            </label>
        </div>
    )
}

function FontContainer() {
    return (
        <div className="font-container">
            <h1>Fonts</h1>
            <div className="font-options">
                <button className="font-button serif">
                    <div className="font-header">Aa</div>
                    <div className="font-name">Serif</div>
                </button>
                <button className="font-button sans">
                    <div className="font-header">Aa</div>
                    <div className="font-name">Sans</div>
                </button>
                <button className="font-button mono">
                    <div className="font-header">Aa</div>
                    <div className="font-name">Mono</div>
                </button>
            </div>
        </div>
    )
}

function CustomizePage() {
    return (
        <section className="customize-page" id="customize-page">
            <LayoutContainer />
            <ColorContainer />
            <FontContainer />
        </section>
    )
}

export default CustomizePage;