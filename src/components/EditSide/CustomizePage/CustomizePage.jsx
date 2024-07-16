import "./CustomizePage.css";

function LayoutContainer( {activeFontColor} ) {
  const layoutBox1Style = {
    background: `linear-gradient(180deg, ${activeFontColor} 50%, #fff 50%)`
  };

  const layoutBox2Style = {
    background: `linear-gradient(90deg, ${activeFontColor} 50%, #fff 50%)`
  };

  const layoutBox3Style = {
    background: `linear-gradient(90deg, #fff 50%, ${activeFontColor} 50%)`
  };

  return (
    <div className="layout-container">
      <h1>Layout</h1>
      <div className="layout-buttons">
        <button className="layout-btn">
          <div className="layout-box1" style={layoutBox1Style}></div>
          <p>Top</p>
        </button>
        <button className="layout-btn">
          <div className="layout-box2" style={layoutBox2Style}></div>
          <p>Left</p>
        </button>
        <button className="layout-btn">
          <div className="layout-box3" style={layoutBox3Style}></div>
          <p>Right</p>
        </button>
      </div>
    </div>
  );
}

function ColorContainer({ activeFontColor, setActiveFontColor }) {
  function handleInput(event) {
    setActiveFontColor(event.target.value)
  }
  return (
    <div className="color-container">
      <h1>Color</h1>
      <label className="color-option">
        <p className="color-text">Accent Color</p>
        <input className="color-button" type="color" value={activeFontColor} onChange={handleInput}></input>
      </label>
    </div>
  );
}

function FontContainer({ activeFontButton, setActiveFontButton }) {
  function handleClick(buttonName) {
    setActiveFontButton(buttonName);
  }
  return (
    <div className="font-container">
      <h1>Fonts</h1>
      <div className="font-options">
        <button
          className={`font-button serif ${activeFontButton === "serif" ? "font-active" : ""}`}
          onClick={() => handleClick("serif")}
        >
          <div className="font-header">Aa</div>
          <div className="font-name">Serif</div>
        </button>
        <button
          className={`font-button sans ${activeFontButton === "sans-serif" ? "font-active" : ""}`}
          onClick={() => handleClick("sans-serif")}
        >
          <div className="font-header">Aa</div>
          <div className="font-name">Sans</div>
        </button>
        <button
          className={`font-button mono ${activeFontButton === "monospace" ? "font-active" : ""}`}
          onClick={() => handleClick("monospace")}
        >
          <div className="font-header">Aa</div>
          <div className="font-name">Mono</div>
        </button>
      </div>
    </div>
  );
}

function CustomizePage({
  activeFontButton,
  setActiveFontButton,
  activeFontColor,
  setActiveFontColor,
}) {
  return (
    <section className="customize-page" id="customize-page">
      <LayoutContainer 
        activeFontColor={activeFontColor}
      />
      <ColorContainer
        activeFontColor={activeFontColor}
        setActiveFontColor={setActiveFontColor}
      />
      <FontContainer
        activeFontButton={activeFontButton}
        setActiveFontButton={setActiveFontButton}
      />
    </section>
  );
}

export default CustomizePage;
