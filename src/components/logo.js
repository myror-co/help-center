/** @jsx jsx */
import { jsx } from "theme-ui"
import logoText from "../../assets/logo-text-white.png"

const Logo = (props) => (
  <img src={logoText} alt="logo-myror" width="150px" style={{marginBottom:0}} />
)

Logo.defaultProps = {
  color: "white",
}

export default Logo
