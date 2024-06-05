import bahir_dar_picture1 from "../../static/media/Bahir-dar-1.jpg";
import bahir_dar_picture2 from "../../static/media/Bahir-dar-2.jpg";
import bahir_dar_picture3 from "../../static/media/Bahir-dar-3.jpg";
import bahir_dar_picture4 from "../../static/media/Bahir-dar-4.jpg";
import bahir_dar_picture5 from "../../static/media/Bahir-dar-5.jpg";
import bahir_dar_picture6 from "../../static/media/Bahir-dar-6.jpg";
import bahir_dar_picture7 from "../../static/media/Bahir-dar-7.jpg";
import bahir_dar_picture8 from "../../static/media/Bahir-dar-8.jpg";
import bahir_dar_picture9 from "../../static/media/Bahir-dar-9.jpg";
import bahir_dar_picture10 from "../../static/media/Bahir-dar-10.jpg";
import bahir_dar_picture11 from "../../static/media/Bahir-dar-11.jpg";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "../styles/home.css";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const photos = [
  { src: bahir_dar_picture5, width: 6, height: 2 }, // Adjust width/height as needed
  { src: bahir_dar_picture1, width: 5, height: 3 }, // Assuming bahir_dar_picture4 is the intended picture
  { src: bahir_dar_picture3, width: 4, height: 3 },
  { src: bahir_dar_picture4, width: 6, height: 3 },
  { src: bahir_dar_picture7, width: 2, height: 3 },
  { src: bahir_dar_picture8, width: 4, height: 3 },
  { src: bahir_dar_picture9, width: 3, height: 3 },
  { src: bahir_dar_picture10, width: 4, height: 3 },
  { src: bahir_dar_picture11, width: 3, height: 3 },
];

const itemData = [
  {
    img: bahir_dar_picture5, // Replace with bahir_dar_picture5 URL
    title: "Bahir Dar", // Or a more specific title for the picture
    rows: 2, // Adjust rows and cols as needed for image dimensions
    cols: 3,
  },
  {
    img: bahir_dar_picture1, // Replace with bahir_dar_picture1 URL
    title: "Bahir Dar",
    rows: 3,
    cols: 1,
  },
  {
    img: bahir_dar_picture3, // Replace with bahir_dar_picture3 URL
    title: "Bahir Dar",
    rows: 2,
    cols: 2,
  },
  {
    img: bahir_dar_picture4, // Replace with bahir_dar_picture4 URL
    title: "Bahir Dar",
    rows: 2,
    cols: 1,
  },
  {
    img: bahir_dar_picture7, // Replace with bahir_dar_picture11 URL
    title: "Bahir Dar",
    rows: 3,
    cols: 1,
  },
  {
    img: bahir_dar_picture8, // Replace with bahir_dar_picture11 URL
    title: "Bahir Dar",
    rows: 3,
    cols: 1,
  },
  {
    img: bahir_dar_picture9, // Replace with bahir_dar_picture11 URL
    title: "Bahir Dar",
    rows: 3,
    cols: 1,
  },
  {
    img: bahir_dar_picture10, // Replace with bahir_dar_picture11 URL
    title: "Bahir Dar",
    rows: 3,
    cols: 1,
  },
  {
    img: bahir_dar_picture11, // Replace with bahir_dar_picture11 URL
    title: "Bahir Dar",
    rows: 3,
    cols: 1,
  },
];

const pictures = () => {
  return (
    <ImageList variant="quilted" cols={4} rowHeight={121}>
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default pictures;
