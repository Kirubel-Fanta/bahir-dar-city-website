import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function Main(props) {
  const { posts, title } = props;

  const post = {
    title: "First welcome blog",
    date: "May 4",
    description:
      "Want to make a difference but feeling overwhelmed?  Forget capes and tights – everyday acts of giving back can be your superpower!  This post will show you how simple actions can create ripples of positive change in your community.",
    image: "bahir_dar_picture_1",
    imageLabel: "Image Text",
  };

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        "& .markdown": {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {/* {posts.map((post) => (
        <Markdown className="markdown" key={post.substring(0, 40)}>
          {post}
        </Markdown>
      ))} */}
      <Card sx={{ display: "flex" }}>
        <CardContent sx={{ flex: 1, padding: '40px'}}>
          <Typography component="h2" variant="h5">
            {post.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {post.date}
          </Typography>
            <div className="introduction">
              <h1>
                Bahir Dar Calling: A Community Hub for the Heart of Ethiopia
              </h1>
              <p>
                Welcome to the Bahir Dar City Community website! We're a
                non-governmental initiative fueled by a passion for connecting
                Bahir Dar's vibrant community – both locally and across the
                globe. This platform is your one-stop shop for everything Bahir
                Dar. Whether you call this beautiful city home, have fond
                memories of visiting, or are simply curious to explore its
                wonders, we invite you to join our growing community.
              </p>
              <ul style={{padding: '10px', paddingLeft: '25px'}}>
                <li>
                  <b>Stay Connected:</b> Get the latest updates on Bahir Dar's
                  happenings. From city development projects to cultural events,
                  we'll keep you informed and engaged.
                </li>
                <li>
                  <b>Spark Conversations:</b> We believe in open dialogue. Our
                  forum provides a platform to discuss everything under the
                  Bahir Dar sun – from sharing local insights to brainstorming
                  solutions for the city's future.
                </li>
                <li>
                  <b>Empower Local Businesses:</b> Showcase your Bahir Dar
                  business to a wider audience! Our directory helps potential
                  customers discover the unique offerings of local
                  entrepreneurs.
                </li>
                <li>
                  <b>Unleash Your Potential:</b> Are you brimming with a
                  brilliant business idea? Our platform provides a stage to
                  pitch your vision to potential investors. We believe in
                  nurturing Bahir Dar's entrepreneurial spirit.
                </li>
                <li>
                  <b>Investment Opportunities:</b> Seeking promising avenues for
                  investment? Look no further! We connect investors with
                  exciting opportunities in Bahir Dar, fueling the city's growth
                  and development.
                </li>
                <li>
                  <b>Land Your Dream Job:</b> Local businesses can post job
                  openings, while job seekers can browse opportunities and
                  connect with potential employers. We aim to bridge the gap
                  between talent and opportunity in Bahir Dar.
                </li>
                <li>
                  <b>Plan Your Bahir Dar Adventure:</b> Dreaming of an Ethiopian
                  adventure? We've got you covered! Our visitor's guide provides
                  insider tips on must-see attractions, cultural experiences,
                  and hidden gems to make your Bahir Dar trip unforgettable.
                </li>
              </ul>
              <p>
                This website is a testament to the power of community. By
                connecting Bahir Dar's diaspora with residents and fostering a
                platform for local businesses and entrepreneurs to thrive, we
                aim to celebrate the city's rich spirit and propel it towards a
                brighter future.
              </p>
              <p>
                Join us, reconnect with Bahir Dar, and be a part of its
                incredible story!
              </p>
            </div>
        </CardContent>
      </Card>
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Main;
