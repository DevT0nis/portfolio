import React, { useEffect, useState } from "react";
import TrackVisibility from "react-on-screen";

const AnimatedText = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Desenvolvedor Full-Stack", "Desenvolvedor Cloud", "UI/UX Designer", "Analista de Dados"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum((loopNum) => loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <TrackVisibility>
      {({ isVisible }) => (
        <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
          <h1 className="text-7xl font-bold">Anthony Thomas</h1> <br />
          <div className="h-2">
            <span className="txt-rotate text-5xl font-bold" data-rotate={JSON.stringify(toRotate)}>
              <span className="wrap">{text}</span>
            </span>
          </div>
        </div>
      )}
    </TrackVisibility>
  );
};

export default AnimatedText;
