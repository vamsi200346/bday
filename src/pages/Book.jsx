import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fallbackImage from "../assets/heroImg.jpg";

const BookContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #e1ddc6;
  padding: 2rem;
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
  max-width: 1200px;
  height: 85vh;
  margin: 0 auto;

  .slick-slider {
    margin: 0 auto;
    height: 100%;
  }

  .slick-track {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .slick-slide {
    opacity: 0.5;
    transform: scale(0.8);
    transition: all 0.3s ease;
    height: 100%;
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
    height: 75vh;

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
  height: 100%;
`;

const SlideContent = styled.div`
  display: flex;
  gap: 2rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  height: 100%;
  max-height: 80vh;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    max-height: 70vh;
  }
`;

const TextSection = styled.div`
  flex: 1;
  color: #a4282e;
  font-family: "Georgia", serif;
  font-size: 1.4rem;
  line-height: 1.8;
  text-align: justify;
  overflow-y: auto;
  padding: 1rem;
  max-height: 100%;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    line-height: 1.6;
    max-height: 40%;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 15px;
  height: 100%;
  max-height: 100%;
  background: rgba(0, 0, 0, 0.05);
  padding: 0.5rem;

  @media (max-width: 768px) {
    max-height: 60%;
  }
`;

const PageImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
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

const RightNavigationArrow = styled(NavigationArrow)`
  left: auto;
  right: 2rem;

  @media (max-width: 768px) {
    right: 1rem;
  }
`;

const bookContent = [
  {
    text: "On this special day, I want to celebrate the amazing person you are. Your smile brightens up my world, and your love makes every day worth living.",
    image:
      "https://drive.google.com/thumbnail?id=16SgXpWjO6wiRhhl5T6JphqZN_-KFAMeN&sz=w1000",
  },
  {
    text: "Every moment with you is a treasure. Your kindness, your warmth, and your beautiful soul make you the most wonderful person I know.",
    image:
      "https://drive.google.com/thumbnail?id=18EmZ0U40dHRVP3sJr0vLqS5YXSW4ne-S&sz=w1000",
  },
  {
    text: "You are my best friend, my confidant, and my greatest love. I cherish every memory we've created together and look forward to many more.",
    image:
      "https://drive.google.com/thumbnail?id=18N8ztxwTvvrG0hlNHQvg_yuG0udAk4Kk&sz=w1000",
  },
  {
    text: "Your love has transformed my life in ways I never thought possible. You make me want to be a better person every day.",
    image:
      "https://drive.google.com/thumbnail?id= 18h41HOIT-koBGwGTUqUgd6Ew3glEbrbq&sz=w1000",
  },
  {
    text: "I promise to love you more with each passing day, to support your dreams, and to be there for you through all of life's adventures.",
    image:
      "https://drive.google.com/thumbnail?id=18Ha0eA58MlXyT5OGiOXk25U_unk7Nq0J&sz=w1000",
  },
  {
    text: "Happy Birthday, my love. May this year bring you all the happiness, success, and love that you deserve. I love you more than words can express.",
    image:
      "https://drive.google.com/thumbnail?id=16cpSIMUZUAX_spsUohld53xp7EYE8Mhf&sz=w1000",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0",
  autoplay: true,
  autoplaySpeed: 10000,
  cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
  fade: true,
  adaptiveHeight: true,
  beforeChange: (current, next) => {
    const slides = document.querySelectorAll(".slick-slide");
    slides.forEach((slide, index) => {
      if (index === next) {
        slide.style.transform = "rotateY(0deg)";
        slide.style.opacity = "1";
      } else {
        slide.style.transform = "rotateY(90deg)";
        slide.style.opacity = "0";
      }
    });
  },
};

function Book() {
  const navigate = useNavigate();

  return (
    <BookContainer>
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Story
      </Title>

      <CarouselContainer>
        <Slider {...settings}>
          {bookContent.map((content, index) => (
            <Slide key={index}>
              <SlideContent>
                <TextSection>{content.text}</TextSection>
                <ImageSection>
                  <PageImage
                    src={content.image}
                    alt={`Page ${index + 1}`}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = fallbackImage;
                    }}
                  />
                </ImageSection>
              </SlideContent>
            </Slide>
          ))}
        </Slider>
      </CarouselContainer>

      <NavigationArrow
        onClick={() => navigate("/")}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        ←
      </NavigationArrow>

      <RightNavigationArrow
        onClick={() => navigate("/gallery")}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        →
      </RightNavigationArrow>
    </BookContainer>
  );
}

export default Book;
