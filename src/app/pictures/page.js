import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const photos = [
  { src: "/static/media/Bahir-dar-5.jpg", width: 3, height: 3 }, // Adjust paths if needed
  { src: "/static/media/Bahir-dar-7.jpg", width: 1, height: 3 },
  { src: "/static/media/Bahir-dar-3.jpg", width: 2, height: 6 },
  { src: "/static/media/Bahir-dar-4.jpg", width: 2, height: 3 },
  { src: "/static/media/Bahir-dar-1.jpg", width: 2, height: 3 },
  { src: "/static/media/Bahir-dar-8.jpg", width: 4, height: 3 },
  { src: "/static/media/Bahir-dar-9.jpg", width: 2, height: 3 },
  { src: "/static/media/Bahir-dar-10.jpg", width: 2, height: 3 },
];

const itemData = photos.map((photo) => ({
  img: photo.src,
  title: "Bahir Dar", // Or a more specific title for the picture
  rows: photo.height,
  cols: photo.width,
}));

const Pictures = () => {
  return (
    <>
      <ImageList variant="quilted" cols={4} rowHeight={121}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols} rows={item.rows}>
            <img
              src={`${item.img}?w=${121 * item.cols}&h=${121 * item.rows}&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};

export default Pictures;