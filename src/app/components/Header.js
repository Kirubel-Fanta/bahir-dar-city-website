"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "calc(100vw - 40px)", // Set max-width based on viewport width
  maxHeight: "calc(100vh - 80px)", // Set max-height based on viewport height
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 6,
  borderRadius: 2,
  overflowY: "auto",
};

function Header(props) {
  const { sections, title } = props;
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [county, setCounty] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        email,
        firstName,
        lastName,
        address: county,
      };

      fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log({ data });
          clearModal()
        })
        .catch((error) => {
          clearModal()
          console.error("something went wrong", error);
        });
    } catch (error) {
      clearModal()
      console.error("something went wrong", error);
    }
  };

  const clearModal = () => {
    setOpen(false);
    setEmail('')
    setFirstName('')
    setLastName('')
  }

  const isAllFieldsFilled = firstName && lastName && email;

  return (
    <div>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Button size="small" onClick={handleOpen}>
          Subscribe
        </Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          <div style={{ width: "100px", display: "contents" }}>
            <Link href={"/"} style={{ color: "black", textDecoration: "none" }}>
              {title}
            </Link>
          </div>
        </Typography>
        <Button variant="outlined" size="small" href={"/"}>
          Home
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0, fontSize: "large" }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            variant="h6"
            id="modal-title"
            style={{ paddingBottom: "10px" }}
          >
            Subscribe to our Newsletter
          </Typography>
          <div>
            <Grid
              container
              spacing={2}
              sx={{ width: "100%", gridTemplateColumns: "1fr", gridTemplateRows: "1fr 1fr 1fr" }}
              style={{ display: "grid" }}
            >
              <Grid item xs={12} style={{display: 'grid', gridTemplateColumns: "1fr 1fr", gap: '15px'}}>
                <TextField
                  label="First Name"
                  fullWidth
                  name="firstName"
                  type="text"
                  variant="outlined"
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField
                  label="Last Name"
                  fullWidth
                  name="lastName"
                  type="text"
                  variant="outlined"
                  required
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <TextField
                  label="County"
                  fullWidth
                  name="county"
                  type="text"
                  variant="outlined"
                  onChange={(e) => setCounty(e.target.value)}
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  fullWidth
                  name="email"
                  type="email"
                  variant="outlined"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} style={{alignSelf: 'center', justifySelf: 'center'}}>
                <Button
                  variant="contained"
                  type="submit"
                  size="large"
                  color={isAllFieldsFilled ? "primary" : 'secondary'}
                  style={{ height: "53px", width: '200px' }}
                  onClick={e => handleSubmit(e)}
                  disabled={!isAllFieldsFilled}
                >
                  Subscribe
                </Button>
              </Grid>
            </Grid>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
