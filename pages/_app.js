import "bulma/css/bulma.min.css";
import "../styles/globals.css";

function MainApp({ Component, prageProps }) {
  return (
    <Component {...prageProps} />
  )
}

export default MainApp;