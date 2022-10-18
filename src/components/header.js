import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { AppBar, Typography, Container, Toolbar } from "@mui/material"

const Header = ({ siteTitle }) => (
  <AppBar position="static">
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Typography variant="h2" component="p">
          {siteTitle}
        </Typography>
      </Toolbar>
    </Container>
  </AppBar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
