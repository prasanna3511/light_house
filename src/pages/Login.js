import { Box, Button, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import backGround from "../images/Aboutpage-1.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://thelighthouseweb.co/login.php", {
        email,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem("isAuthenticated", true);
        alert("Login successful");
        navigate("/");
      }
    } catch (error) {
      if (error.response) {
        alert("Incorrect Email or Password");
      } else {
        alert("Incorrect Email or Password");

      }
    }
  };
  return (
    <div>
      <Box
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          backgroundImage: `url(${backGround})`, // Use the "url()" function
          backgroundSize: "cover", // Optional: Set background size as needed
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          style={{
            width: "30%",
            height: "auto",
            // backgroundColor: "white",
            borderRadius: "25px",
            // backgroundImage: `url(${backGround2})`, // Use the "url()" function
            display: "flex",
            flexDirection: "column",
            // justifyContent:"space-between",
            // alignItems: "center",
          }}
        >
          {/* <Box
            style={{
              display: "flex",
              flexDirection: "column",
              // justifyContent: "center",
            }}
          > */}
          <img
            style={{ width: "200px", height: "200px", margin: "auto" }}
            src={require("../images/logo.png")}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            placeholder="Email"
            style={{
              backgroundColor: "white",
              width: "60%",
              borderRadius: "45px",
              marginTop: "40px",
              margin: "auto",
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            placeholder="Password"
            style={{
              backgroundColor: "white",
              width: "60%",
              borderRadius: "45px",
              marginTop: "20px",
              margin: "auto",
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            style={{
              borderWidth: 1,
              borderColor: "white",
              height: "40px",
              borderRadius: "35px",
              backgroundColor: "#BE9E45",
              marginTop: "30px",
              color: "white",
              fontWeight: "bold",
              width:"160px",
              margin:"auto"
            }}
            onClick={handleSubmit}
          >
            Login
          </Button>

          {/* </Box> */}
        </Box>
      </Box>
    </div>
  );
}
