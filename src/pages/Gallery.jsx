import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fallbackImage from "../assets/heroImg.jpg";
import BackgroundMusic from "../components/BackgroundMusic";

const GalleryContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #e1ddc6;
  padding: 0 2rem;
`;

const Title = styled(motion.h1)`
  color: #a4282e;
  font-size: 3.5rem;
  margin-bottom: 2rem;
  text-align: center;
  font-family: "Arial", sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
`;

const CarouselContainer = styled.div`
  width: 80%;
  height: 60%;
  max-width: 1200px;
  margin: 0 auto;

  .slick-slider {
    margin: 0 auto;
  }

  .slick-track {
    display: flex;
    align-items: center;
  }

  .slick-slide {
    opacity: 0.5;
    transform: scale(0.8);
    transition: all 0.3s ease;
  }

  .slick-center {
    opacity: 1;
    transform: scale(1);
  }

  .slick-prev,
  .slick-next {
    z-index: 1;
    width: 40px;
    height: 40px;
    background: rgba(164, 40, 46, 0.5) !important;
    border-radius: 50%;
    backdrop-filter: blur(5px);

    &:hover {
      background: rgba(164, 40, 46, 0.8) !important;
    }

    &:before {
      font-size: 20px;
    }
  }

  .slick-prev {
    left: -50px;
  }

  .slick-next {
    right: -50px;
  }

  .slick-dots {
    bottom: -40px;

    li button:before {
      color: #e1ddc6;
      opacity: 0.5;
    }

    li.slick-active button:before {
      color: #a4282e;
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    width: 95%;

    .slick-prev {
      left: -30px;
    }

    .slick-next {
      right: -30px;
    }
  }
`;

const Slide = styled.div`
  padding: 1rem;
  outline: none;
`;

const Image = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    height: 50vh;
  }
`;

const NavigationArrow = styled(motion.div)`
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  font-size: 2rem;
  cursor: pointer;
  z-index: 100;
  color: #e1ddc6;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  background: rgba(164, 40, 46, 0.5);
  border-radius: 50%;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(164, 40, 46, 0.8);
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    bottom: 1rem;
    left: 1rem;
  }
`;

const images = [
  "https://drive.google.com/thumbnail?id=173Fml1CTTY2-CoIYKC2h-IoD7NmirGdC&sz=w1000",
  "https://drive.google.com/thumbnail?id=16ZYA5AMJsQfNX2ut0rQuFSJad8alKJQB&sz=w1000",
  "https://drive.google.com/thumbnail?id=17mjQae5bvTf-_tEdicv1Gi2HlhzMUXTh&sz=w1000",
  "https://drive.google.com/thumbnail?id=16adHztilujrXetETdSrYVRLqmSm_Qr8N&sz=w1000",
  "https://drive.google.com/thumbnail?id=16yHRJ0BHy7ESMOESL6fJu5ZVMTz4JR3z&sz=w1000",
  "https://drive.google.com/thumbnail?id=17KAHwmf0Y-2fhUH9jMspKXGTihrtpu8g&sz=w1000",
  "https://drive.google.com/thumbnail?id=1801VxJEzIwIixaLrjbqk4HiANHOiMq4m&sz=w1000",
  "https://drive.google.com/thumbnail?id=170TTcrPsvI7N_QRzbG6lbWIZAzuaavk0&sz=w1000",
  "https://drive.google.com/thumbnail?id=17Aa5ip7usCFEJv22Bprcc9HsOvaI9602&sz=w1000",
  "https://drive.google.com/thumbnail?id=17d17NNWlHZmmSHgTb0dRlYLCE1PJgnqE&sz=w1000",
  "https://drive.google.com/thumbnail?id=181HjiYHkp5EIG6YoemZSRwxqCvNahQwN&sz=w1000",
  "https://drive.google.com/thumbnail?id=17nVoiL3Pit1cqnvIMJ98H3r_QOnHJPVQ&sz=w1000",
  "https://drive.google.com/thumbnail?id=17S6A870uucWpM-2UlTCe10HP6NaXUH3v&sz=w1000",
  "https://drive.google.com/thumbnail?id=17rbjyN8TeLYbTvEWoWwtWulZlejx9n1i&sz=w1000",
  "https://drive.google.com/thumbnail?id=17qNXLVqk3PxleuDAz16FOtxlCF32A2Ny&sz=w1000",
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0",
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        centerMode: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: true,
      },
    },
  ],
};

function Gallery() {
  const navigate = useNavigate();

  return (
    <div>
      <BackgroundMusic />
      <GalleryContainer>
        <Title
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Memories
        </Title>

        <CarouselContainer>
          <Slider {...settings}>
            {images.map((image, index) => (
              <Slide key={index}>
                <Image
                  src={image}
                  alt={`Memory ${index + 1}`}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = fallbackImage;
                  }}
                />
              </Slide>
            ))}
          </Slider>
        </CarouselContainer>

        <NavigationArrow
          onClick={() => navigate("/book")}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          ←
        </NavigationArrow>
      </GalleryContainer>
    </div>
  );
}

export default Gallery;
