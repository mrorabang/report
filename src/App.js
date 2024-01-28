import Home from "./Home";
import ViewReport from "./ViewReport";
import Contact from "./Contact";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
function App() {
  const [openBasic, setOpenBasic] = useState(false);
  return (
    <div>
      <MDBNavbar sticky expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand>Minh Quân</MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenBasic(!openBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar open={openBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink active>
                  <Link to="/">Home</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink>
                  <Link to="/viewreport">View Report</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink>
                  <Link to="/contact">Contact</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
          
            </MDBNavbarNav>

          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viewreport" element={<ViewReport />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
