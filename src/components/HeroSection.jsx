import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Avatar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";
import CloudDownloadSharpIcon from "@mui/icons-material/CloudDownloadSharp";
import { motion } from "framer-motion";

function HeroSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
      <motion.video
        autoPlay
        loop
        muted
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <source src='/BG-Cloud.mp4' type='video/mp4' />
      </motion.video>

      <Container sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 30,
          }}
        >
          <motion.div
            animate={{
              y: [3, 2, 3, -2, 3],
              x: [3, 2, 3, -1, 3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <Avatar
              src='/Image/SuriyaW.JPG'
              alt='Avatar'
              sx={{
                width: isMobile ? 80 : 150,
                height: isMobile ? 80 : 150,
                border: "3px solid",
                boxShadow: "0px 0px 10px ",
              }}
            />
          </motion.div>
          <Typography
            variant={isMobile ? "h4" : "h2"}
            fontWeight='bold'
            sx={{
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              fontSize: isMobile ? "2.5rem" : "4rem",
              fontFamily: "'Great Vibes', cursive",
              letterSpacing: 2,
            }}
          >
            Suriya Wongaiyara
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{
              marginTop: 2,
              opacity: 0.8,
              textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
              fontSize: isMobile ? "1.2rem" : "1.5rem", // ปรับขนาดตัวอักษร
            }}
          >
            Portfolio@2025
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
}

export default HeroSection;
