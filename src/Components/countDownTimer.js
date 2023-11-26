import React, { useEffect, useState } from "react";
import "./countDownTimer.css";

const CountdownTimer = ({ team }) => {
  const { teamName, lastWon, color } = team;
  const [logo, setLogo] = useState(null);
  const targetDate = lastWon !== "N/A" ? new Date(lastWon) : null;

  const calculateTimeRemaining = () => {
    const currentDate = new Date();
    const timeDifference = currentDate - targetDate;
    const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
    const days = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24)
    );
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { years, days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(
    targetDate ? calculateTimeRemaining() : null
  );

  useEffect(() => {
    import(`../Images/${teamName.toLowerCase().replace(/\s+/g, "")}.png`)
      .then((logoModule) => {
        setLogo(logoModule.default);
      })
      .catch((error) => {
        console.error(`Error loading logo for ${teamName}:`, error);
      });

    const interval = setInterval(() => {
      setTimeRemaining(targetDate ? calculateTimeRemaining() : null);
    }, 1000);

    return () => clearInterval(interval);
  }, [teamName, targetDate]);

  return (
    <div className="countdown-container">
      {logo && (
        <img src={logo} alt={`${teamName} Logo`} className="team-logo" />
      )}
      <h1 style={{ paddingBottom: "30px", paddingTop: "10px" }}>
        Time since <span style={{ color: color }}>{teamName}</span> last won the
        Premier League:{" "}
      </h1>
      {targetDate ? (
        <div className="countdown-items">
          {timeRemaining.years > 0 && (
            <div className="countdown-item">
              <div
                className="countdown-value"
                style={{ backgroundColor: color }}
              >
                {timeRemaining.years}
              </div>
              <div className="countdown-label">Years</div>
            </div>
          )}
          <div className="countdown-item">
            <div className="countdown-value" style={{ backgroundColor: color }}>
              {timeRemaining.days}
            </div>
            <div className="countdown-label">Days</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-value" style={{ backgroundColor: color }}>
              {timeRemaining.hours}
            </div>
            <div className="countdown-label">Hours</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-value" style={{ backgroundColor: color }}>
              {timeRemaining.minutes}
            </div>
            <div className="countdown-label">Minutes</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-value" style={{ backgroundColor: color }}>
              {timeRemaining.seconds}
            </div>
            <div className="countdown-label">Seconds</div>
          </div>
        </div>
      ) : (
        <div
          className="countdown-item no-title"
          style={{ backgroundColor: color }}
        >
          Never won the league title
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
