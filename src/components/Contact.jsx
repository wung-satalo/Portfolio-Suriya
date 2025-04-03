import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid2 as Grid,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { motion } from "framer-motion";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setLoading(true); // เริ่มแสดง Loading

    try {
      await emailjs.send(
        "service_gzl220j",
        "template_ddr74nf",
        formData,
        "RYpFzj6iaeTmUpMuS"
      );
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email sending error:", error);
      setStatus("Failed to send message.");
    }

    setLoading(false); // ปิด Loading หลังจากส่งเสร็จ
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
        bgcolor: "transition",
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
            error={!!errors.name}
            helperText={errors.name}
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
            error={!!errors.email}
            helperText={errors.email}
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
            error={!!errors.message}
            helperText={errors.message}
          />

          <Button
            type='submit'
            variant='contained'
            sx={{ mt: 2, bgcolor: "#333", "&:hover": { bgcolor: "#555" } }}
            disabled={loading} // ปิดการใช้งานปุ่มขณะส่ง
          >
            {loading ? (
              <CircularProgress size={24} sx={{ color: "white" }} />
            ) : (
              "Send Message"
            )}
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
          {
            icon: <LinkedInIcon />,
            link: "https://www.linkedin.com/in/suriya-wongaiyara-7a1ba0359/",
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
