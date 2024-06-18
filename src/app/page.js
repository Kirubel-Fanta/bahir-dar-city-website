import Grid from "@mui/material/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import MainFeaturedPost from "./components/MainFeaturedPost";
import FeaturedPost from "./components/FeaturedPost";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import image1 from "../static/media/Bahir-dar-1.jpg";
import { Paper } from "@mui/material";

const mainFeaturedPost = {
  title: "Welcome to Bahir Dar City community website",
  description: "Connecting Bahir Dar: A Global Community Hub",
  image: "../static/media/Bahir-dar-5.jpg",
  imageText: "main image description",
};

const secondMainFeaturedPost = {
  title: "Welcome to Bahir Dar City community websites",
  description: "Connecting Bahir Dar: A Global Community Hub",
  imageText: "main image description",
};

const featuredPosts = [
  {
    title: "Give back to the community",
    date: "May 4",
    description:
      "Want to make a difference but feeling overwhelmed?  Forget capes and tights – everyday acts of giving back can be your superpower!  This post will show you how simple actions can create ripples of positive change in your community.",
    image: "../static/media/Bahir-dar-3.jpg",
    imageLabel: "Image Text",
  },
  {
    title: "What to visit in Bahir Dar",
    date: "May 4",
    description: `Bahir Dar's stunning scenery, with Lake Tana shimmering under the midday sun, leaves you speechless. But this city offers so much more! Venture beyond the picture-perfect views to discover a rich tapestry of history, culture, and adventure.`,
    image: "../static/media/Bahir-dar-1.jpg",
    imageLabel: "Image Text",
  },
];

const posts = ["post1", "post2", "post3"];

const sidebar = {
  title: "About",
  description:
    "Welcome to our non-profit community website, dedicated to connecting individuals born in Bahir Dar, now residing around the globe. Our mission is to facilitate swift information exchange, foster collaboration, and support one another. Join us in building a stronger, united community.",
  archives: [{ title: "Coming soon...", url: "#" }],
  social: [
    { name: "X (Coming soon)", icon: XIcon },
    { name: "Facebook (Coming soon)", icon: FacebookIcon },
  ],
};

export default function Home() {
  return (
    <main>
      <MainFeaturedPost post={mainFeaturedPost} />
      {/* <Paper
        sx={{
          position: "relative",
          backgroundColor: "grey.800",
          color: "#fff",
          mb: 4,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: "white",
          color: "black",
        }}
      >
        Unveil the Enchanting Ethiopian Gem: Bahir Dar Ethiopia's Breathtaking
        Lakeside Paradise Discover Bahir Dar, Ethiopia's captivating
        third-largest city, nestled on the shores of the legendary Lake Tana,
        Africa's largest freshwater lake. Explore a treasure trove of
        experiences: Historic Monasteries: Unearth the secrets of ancient
        monasteries on mystical islands dotting the lake. Charming Lodges:
        Immerse yourself in tranquility at charming lodges overlooking the
        serene waters. Vivid Fish Markets: Delve into the vibrant culture at
        bustling fish markets brimming with exotic finds. Majestic Blue Nile
        Falls: Witness the raw power of the Blue Nile Falls, the source of the
        mighty Nile River. Beyond the City Limits: Bahir Dar is your gateway to
        breathtaking natural wonders and rich cultural heritage. Explore the
        UNESCO Biosphere Reserve around Lake Tana, embark on birdwatching
        adventures, or delve into the fascinating history of the Amhara region.
        Start Planning Your Bahir Dar Escape Today!
      </Paper> */}
      <Grid container spacing={4}>
        {featuredPosts.map((post) => (
          <FeaturedPost key={post.title} post={post} />
        ))}
      </Grid>
      <Grid container spacing={5} sx={{ mt: 3 }}>
        <Main title="News and Updates" posts={posts} />
        <Sidebar
          title={sidebar.title}
          description={sidebar.description}
          archives={sidebar.archives}
          social={sidebar.social}
        />
      </Grid>
    </main>
  );
}
