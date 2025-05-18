import React from "react";

function Bubbles() {
  const bubbleCount = 50;

  const bubbles = Array.from({ length: bubbleCount }).map((_, index) => {
    const radius = Math.floor(Math.random() * 9) + 2; // 2vw - 10vw

    // ✅ Min and max durations
    const minFloatDuration = 15; // seconds
    const maxFloatDuration = 25;

    const minSwayDuration = 12;
    const maxSwayDuration = 20;

    // ✅ Ensure minimum speed regardless of size
    const floatDuration = Math.max(
      minFloatDuration,
      Math.floor(Math.random() * (maxFloatDuration - minFloatDuration)) +
        minFloatDuration
    );

    const swayDuration = Math.max(
      minSwayDuration,
      Math.floor(Math.random() * (maxSwayDuration - minSwayDuration)) +
        minSwayDuration
    );

    return (
      <div
        key={index}
        className="bubble"
        style={{
          "--bubble-left-offset": `${Math.random() * 140 - 20}%`,
          "--bubble-bottom-offset": `${Math.random() * 100}vh`,
          "--bubble-radius": `${radius}vw`,
          "--bubble-float-duration": `${floatDuration}s`,
          "--bubble-sway-duration": `${swayDuration}s`,
          "--bubble-float-delay": `${Math.random() * 10}s`,
          "--bubble-sway-delay": `${Math.random() * 10}s`,
          "--bubble-sway-type":
            Math.random() > 0.5 ? "sway-left-to-right" : "sway-right-to-left",
        }}
      />
    );
  });

  return <div className="bubbles">{bubbles}</div>;
}

export default Bubbles;
