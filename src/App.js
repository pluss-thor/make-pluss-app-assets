import PropTypes from "prop-types";
import "./App.css";

function App({ logo, backgroundColor }) {
  return (
    <div className="App" style={{ backgroundColor }}>
      <img src={logo} className="logo" alt="logo" />
    </div>
  );
}

App.propTypes = {
  logo: PropTypes.string,
  backgroundColor: PropTypes.string,
};

App.defaultProps = {
  logo: "https://i0.wp.com/plusscommunities.com/wp-content/uploads/2021/01/Untitled.png?fit=172%2C70&ssl=1",
  backgroundColor: "#fff",
};

export default App;
