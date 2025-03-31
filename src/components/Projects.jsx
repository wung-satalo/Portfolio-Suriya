import React from "react";
import {
  Box,
  Grid2 as Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Project Clo-Plo for AUN-QA",
    description:
      "A System for Relevent Pharse Checking of Course Learning Outcome (CLO) to Program Learning Outcome (PLO) for AUN-QA Assessment",
    image:
      "https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_1280.jpg",
    link: "https://github.com/wung-satalo/Project-Clo-Plo.git",
  },
  {
    title: "Information Stornge And Retrieval",
    description:
      "Search Premier Team History using python, BS4, pandas, nltk, TF-IDF",
    image:
      "https://cdn-5dc591f7f911c91c58a5564e.closte.com/wp-content/uploads/2024/01/image1-7.png",
    link: "https://github.com/wung-satalo/SearchEngine.git",
  },
];

function Projects() {
  return (
    <Box
      id='projects'
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "transition",
        color: "white",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography
          variant='h4'
          gutterBottom
          sx={{
            fontFamily: "'Great Vibes', cursive",
            textShadow: "4px 4px 4px rgba(0,0,0,0.99)",
          }}
        >
          My Projects
        </Typography>
        <Typography
          variant='body1'
          mb={4}
          sx={{ textShadow: "4px 4px 4px rgba(0,0,0,0.99)" }}
        >
          Here are some of the projects I have worked on.
        </Typography>
      </motion.div>

      <Grid container spacing={3} justifyContent='center'>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card
                sx={{
                  maxWidth: 300,
                  backgroundColor: "#333",
                  color: "white",
                }}
              >
                <CardActionArea
                  onClick={() =>
                    window.open(project.link, "_blank", "noopener,noreferrer")
                  }
                >
                  <CardMedia
                    component='img'
                    height='140'
                    image={project.image}
                    alt={project.title}
                    link={project.link}
                  />
                  <CardContent>
                    <Typography variant='h6'>{project.title}</Typography>
                    <Typography variant='body2' color='gray'>
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
