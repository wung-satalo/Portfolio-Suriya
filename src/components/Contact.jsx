import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  Box,
  TextField,
  Button,
  Typography,
  Grid2 as Grid,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_gzl220j",
        "template_ddr74nf",
        formData,
        "RYpFzj6iaeTmUpMuS"
      )
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("Failed to send message."));
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 3,
        bgcolor: "transiton",
        color: "white",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography
          variant='h4'
          gutterBottom
          sx={{
            letterSpacing: 2,
            textShadow: "4px 4px 4px rgba(0,0,0,0.99)",
            fontFamily: "cursive",
          }}
        >
          Contact
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <Box
          component='form'
          onSubmit={handleSubmit}
          sx={{ maxWidth: 500, width: "100%", mt: 3 }}
        >
          <TextField
            fullWidth
            label='Your Name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            variant='outlined'
            margin='normal'
            sx={{ bgcolor: "white", borderRadius: 1 }}
          />
          <TextField
            fullWidth
            label='Your Email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            variant='outlined'
            margin='normal'
            sx={{ bgcolor: "white", borderRadius: 1 }}
          />
          <TextField
            fullWidth
            label='Message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={4}
            variant='outlined'
            margin='normal'
            sx={{ bgcolor: "white", borderRadius: 1 }}
          />
          <Button
            type='submit'
            variant='contained'
            sx={{ mt: 2, bgcolor: "#333", "&:hover": { bgcolor: "#555" } }}
          >
            Send Message
          </Button>
          {status && <Typography sx={{ mt: 2 }}>{status}</Typography>}
        </Box>
      </motion.div>

      <Grid container justifyContent='center' spacing={2} sx={{ mt: 4 }}>
        {[
          {
            icon: <FacebookIcon />,
            link: "https://www.facebook.com/ambutder7up",
          },
          { icon: <GitHubIcon />, link: "https://github.com/wung-satalo" },
          { icon: <EmailIcon />, link: "mailto:Wongaiyara.Suriya@gmail.com" },
        ].map((item, index) => (
          <Grid item key={index}>
            <IconButton
              component='a'
              href={item.link}
              target='_blank'
              rel='noopener noreferrer'
              sx={{ color: "Black" }}
            >
              {item.icon}
            </IconButton>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Contact;
