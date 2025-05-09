import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useEffect } from "react";
import confetti from "canvas-confetti";
import cakeImg from "../assets/cake2.png";
import heroImage from "../assets/heroImg.jpg";
const HomeContainer = styled.div`
  height: 100vh;
  background: #e1ddc6;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 100px;

  @media (max-width: 768px) {
    min-height: 100vh;
    height: auto;
  }
`;

const HangingDecorations = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 120px;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  z-index: 100;

  &::before {
    content: "";
    position: absolute;
    top: 20px;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(
      90deg,
      #ff69b4 0%,
      #ff1493 20%,
      #ff69b4 40%,
      #ff1493 60%,
      #ff69b4 80%,
      #ff1493 100%
    );
    clip-path: path(
      "M 0 20 Q 100 0 200 20 Q 300 40 400 20 Q 500 0 600 20 Q 700 40 800 20 Q 900 0 1000 20"
    );
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  }
`;

const DecorationItem = styled(motion.div)`
  font-size: 2rem;
  margin-top: 20px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: -20px;
    left: 50%;
    width: 2px;
    height: 20px;
    background: linear-gradient(to bottom, #ff69b4, #ff1493);
    transform: translateX(-50%);
  }
`;

const RainbowText = styled(motion.div)`
  text-align: center;
  font-family: "Arial", sans-serif;
  font-size: clamp(1.2rem, 4vw, 2.5rem);
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2), 0 0 10px rgba(255, 105, 180, 0.5),
    0 0 20px rgba(255, 20, 147, 0.3);
  z-index: 60;
  padding: 0.5rem;
  width: 100%;
  overflow: hidden;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
    margin-bottom: 0.5rem;
  }
`;

const TextLine = styled(motion.div)`
  color: #a4282e;
  display: flex;
  justify-content: center;
  gap: 0.2em;
`;

const NameText = styled(motion.div)`
  background: linear-gradient(45deg, #ff1493, #ff69b4, #ffb6c1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.2em;
  display: flex;
  justify-content: center;
  gap: 0.2em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2), 0 0 10px rgba(255, 105, 180, 0.5),
    0 0 20px rgba(255, 20, 147, 0.3);
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 1rem 4rem;
  margin-top: auto;
  margin-bottom: 1rem;
  height: calc(100vh - 280px);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0.25rem;
    justify-content: center;
    height: auto;
    gap: 0.5rem;
  }
`;

const AnimationContainer = styled(motion.div)`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  position: relative;
`;

const FloatingImage = styled(motion.img)`
  width: 200px;
  height: 200px;
  object-fit: contain;
  filter: drop-shadow(0 10px 20px rgba(164, 40, 46, 0.3));

  @media (min-width: 769px) {
    animation: float 2s ease-in-out infinite;
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }
`;

const Card = styled(motion.div)`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 30px rgba(164, 40, 46, 0.3);
  backdrop-filter: blur(10px);
  z-index: 50;
  padding: 1rem;
  overflow: hidden;
  border: 4px solid #a4282e;
  outline: none;

  @media (min-width: 769px) {
    max-height: 100%;
    width: auto;
    aspect-ratio: 1;
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
    margin-top: 0.25rem;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const NavigationArrow = styled(motion.div)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  font-size: 2rem;
  cursor: pointer;
  z-index: 100;
  color: #a4282e;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  background: #e1ddc6;
  border-radius: 50%;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  border: 2px solid rgba(164, 40, 46, 0.3);
  outline: none;

  &:hover {
    background: #a4282e;
    color: #e1ddc6;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    bottom: 1rem;
    right: 1rem;
    padding: 0.75rem;
  }
`;

function Home() {
  const navigate = useNavigate();
  const decorations = [
    "🎈",
    "🎉",
    "🎈",
    "🎁",
    "🎈",
    "🎊",
    "🎈",
    "🎂",
    "🎈",
    "🎉",
    "🎈",
    "🎁",
    "🎈",
    "🎉",
    "🎈",
    "🎁",
    "🎈",
    "🎊",
  ];

  // Calculate positions for decorations to follow the sine wave
  const getDecorationStyle = (index) => {
    const totalDecorations = decorations.length;
    const position = (index / (totalDecorations - 1)) * 100; // 0 to 100
    const waveOffset = Math.sin(position * 0.1) * 15; // Adjust amplitude as needed
    return {
      position: "absolute",
      left: `${position}%`,
      top: `${20 + waveOffset}px`,
      transform: "translateX(-50%)",
    };
  };

  // Function to split text into letters for animation
  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: index * 0.1,
          ease: "easeOut",
        }}
      >
        {char}
      </motion.span>
    ));
  };

  useEffect(() => {
    // Confetti effect
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        zIndex: 0,
        particleCount,
        origin: { x: randomInRange(0.1, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <HomeContainer>
      <HangingDecorations
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        {decorations.map((item, index) => (
          <DecorationItem
            key={index}
            style={getDecorationStyle(index)}
            initial={{ y: -20, rotate: -10 }}
            animate={{
              y: 0,
              rotate: 0,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              type: "spring",
            }}
          >
            {item}
          </DecorationItem>
        ))}
      </HangingDecorations>

      <RainbowText>
        <TextLine>{splitText("Happy Birthday")}</TextLine>
        <NameText>{splitText("KAVYA")}</NameText>
      </RainbowText>

      <ContentWrapper>
        <AnimationContainer>
          <FloatingImage
            src={cakeImg}
            alt="Birthday Cake"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
          />
        </AnimationContainer>

        <Card
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <CardImage
            src="https://drive.google.com/uc?export=view&id=16odg5mEi_1x-TxvrwkSi5aA6G9MrIF5o"
            alt="Birthday Card"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = heroImage;
              // Fallback to local image if Google Drive fails
            }}
          />
        </Card>
      </ContentWrapper>

      <NavigationArrow
        onClick={() => navigate("/book")}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        →
      </NavigationArrow>
    </HomeContainer>
  );
}

export default Home;
