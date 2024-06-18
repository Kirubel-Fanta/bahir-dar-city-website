import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Link from "next/link";
import "../styles/home.css";
import dynamic from "next/dynamic";
import MultiActionAreaCard from "../components/mediaDiscription";

const City = () => {
  const media_1 = {
    title: 'Monastries',
    description: `Unveiling the mysteries of Ethiopia's rich past, Bahir Dar's historic monasteries, like 14th-century Gebriel Monastery (accessible to men only) rumored to hold the Ark of the Covenant, 
    stand sentinel on mystical islands dotting Lake Tana. Embark on a scenic boat trip to explore these architectural gems, each boasting intricate murals and religious treasures, offering a glimpse into monastic life and the vibrant local culture.`,
    image: '/static/media/monastries.jpg'
  }

  const media_2 = {
    title: 'Lodges',
    description: `Unveiling the tranquility of Bahir Dar, charming lodges with traditional Ethiopian architecture and breathtaking lakefront views offer a haven for relaxation.  Indulge in personalized service, rejuvenating spa treatments, 
    and unforgettable experiences like coffee ceremonies or boat tours, all while reconnecting with nature's beauty.`,
    image: '/static/media/kuriftu.jpg'
  }

  const media_3 = {
    title: 'Blue Nile Fall',
    description: `Experience the breathtaking grandeur of Ethiopia's Blue Nile Falls, the source of the legendary Nile River. Here, powerful cascades roar over a dramatic cliff, creating a mesmerizing and unforgettable sight. 
      Wander through the lush surroundings and feel the invigorating energy of nature's raw beauty, offering a profound connection to the natural world.`,
    image: '/static/media/Bahir-dar-5.jpg'
  }

  const media_4 = {
    title: 'Boat ride on Lake Tana',
    description: `Embark on a captivating boat trip on Ethiopia's Lake Tana, the source of the Blue Nile. Discover ancient monasteries on tranquil islands, observe diverse birdlife, and enjoy the stunning scenery. 
      Ideal for nature lovers and history enthusiasts, this adventure offers a unique blend of serenity and exploration. Book your trip today!`,
    image: '/static/media/boat-ride.jpg'
  }


  const media_5 = {
    title: 'Traditional dance shows',
    description: `Discover the vibrant nightlife of Ethiopia with dazzling cultural shows and traditional dances. Immerse yourself in lively performances that showcase Ethiopia’s rich heritage through music, dance, and colorful costumes. 
      Experience the rhythmic beats and joyful atmosphere, making for an unforgettable night out. Ideal for culture enthusiasts and adventure seekers alike!`,
    image: '/static/media/Checheho.jpg'
  }

  return (
    <div style={{ marginLeft: "-15rem", marginRight: "-15rem" }}>
      <Hero>
        <Banner
          title="BAHIR DAR CITY"
          subtitle="Ethiopia's Breathtaking Lakeside Paradise"
        ></Banner>
      </Hero>
      <section className="services">
        <div className="services-center">
          Unveiling Bahir Dar: Ethiopia's Captivating Lakeside Gem Kickstart
          your Ethiopian adventure in Bahir Dar, a captivating town nestled on
          the shores of Lake Tana, the country's largest. Often the gateway to
          Ethiopia's historical north, Bahir Dar offers a delightful escape,
          perfect for a short stay. Immerse yourself in tranquility with a boat
          trip on Lake Tana. Explore the archipelago of ancient monasteries,
          each adorned with stunning frescoes and religious paintings. Witness a
          powerful display of nature at the majestic Blue Nile Falls, especially
          during the dramatic rainy season (June-September) when they reach
          their peak.
        </div>
      </section>
      <div className="heighlight-box">
        <div>
          <div className="heighlights">What to visit in Bahir Dar</div>
          <MultiActionAreaCard media={media_1} />
          <MultiActionAreaCard media={media_3} />
        </div>
        <div>
          <MultiActionAreaCard media={media_2} />
          <MultiActionAreaCard media={media_4} />
          <MultiActionAreaCard media={media_5} />
        </div>
      </div>
    </div>
  );
};

export default City;
