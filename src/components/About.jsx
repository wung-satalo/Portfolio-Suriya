import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import { motion } from "framer-motion";
import LockOpenIcon from "@mui/icons-material/LockOpen";

const images = [
  "/Image/SuriyaW1.JPG",
  "/Image/SuriyaW2.JPG",
  "/Image/SuriyaW3.JPG",
];

function About() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // เคลียร์เมื่อ component ถูก unmount
  }, []);
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        color: "white",
        padding: 3,
      }}
    >
      <motion.div
        initial={{ scaleY: 0, scale: 0.8 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{
          originY: 0,
          position: "relative",
          overflow: "hidden",
          width: "100%",
          maxWidth: 600,
        }}
      >
        <motion.div
          animate={{
            x: [0, 3, 0, -3, 0],
            y: [0, 4, 0, -2, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <Typography
            variant='h4'
            color='White'
            gutterBottom
            sx={{
              letterSpacing: 2,
              textShadow: "4px 4px 4px rgba(0,0,0,0.99)",
              fontFamily: "'Great Vibes', cursive",
            }}
          >
            ABOUT ME 🔓
          </Typography>
        </motion.div>
        <Card
          sx={{
            position: "relative",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            p: 3,
            boxShadow: 2,
            maxWidth: "100%",
            margin: "0 auto",
            borderRadius: 5,
          }}
        >
          <CardContent>
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <Avatar
                src={images[currentImage]}
                alt='Earth'
                sx={{
                  width: 200,
                  height: 200,
                  mx: "auto",
                  mb: 2,
                  boxShadow: 2,
                }}
              />
            </motion.div>

            <Typography variant='h6' color='White' gutterBottom>
              Hello! I'm Earth ☀️🌍
            </Typography>
            <Typography variant='body1' color='#FFF5EB' gutterBottom>
              Looking For Work. 👨🏻‍💻
            </Typography>
            <Typography variant='body1' color='#FFF5EB' gutterBottom>
              I’ m a passionate IT Graduate with expertise in Web Application
              Development and Natural Language Processing (NLP). With strong
              Analytical Skills and Leadership Experience as the Vice President
              of the Student Union, I am eager to apply my Technical Knowledge
              and Teamwork Abilities in a Dynamic Organization.
            </Typography>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Button
                variant='contained'
                sx={{
                  mt: 3,
                  backgroundColor: "#333",
                  color: "white",
                  "&:hover": { backgroundColor: "#555" },
                }}
                href='/files/Resume-Suriya.pdf'
                target='_blank'
                rel='noopener noreferrer'
              >
                View Resume
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
}

export default About;
