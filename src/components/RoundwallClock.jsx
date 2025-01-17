import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/fa"; // برای فارسی
import jMoment from "moment-jalaali";

const RoundwallClock = () => {
  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // محاسبه زاویه هر عقربه
  const secondsAngle = currentTime.seconds() * 6; // 360° / 60
  const minutesAngle =
    currentTime.minutes() * 6 + currentTime.seconds() * 0.1; // 360° / 60 + اثر ثانیه‌ها
  const hoursAngle =
    (currentTime.hours() % 12) * 30 + currentTime.minutes() * 0.5; // 360° / 12 + اثر دقیقه‌ها

  return (
    <div className="clock-container">
      <div className="clock h-28 w-28">
        {/* نمایش اعداد ساعت */}
        {[...Array(12)].map((_, i) => {
          const angle = (i + 1) * 30; // محاسبه زاویه برای هر عدد
          const x = 50 + 40 * Math.sin((angle * Math.PI) / 180); // موقعیت X
          const y = 50 - 40 * Math.cos((angle * Math.PI) / 180); // موقعیت Y
          return (
            <div
              key={i}
              className="clock-number"
              style={{
                position: "absolute",
                left: `${x}%`,
                top: `${y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {i + 1}
            </div>
          );
        })}

        {/* تاریخ و روز هفته */}
        <div className="center-text">
          <div>{jMoment(currentTime).locale("fa").format("jYYYY / jMM / jDD")}</div>
          <div>{jMoment(currentTime).locale("fa").format("dddd")}</div>
        </div>

        {/* عقربه‌ها */}
        <div
          className="hand second-hand"
          style={{
            transform: `rotate(${secondsAngle}deg)`,
          }}
        ></div>
        <div
          className="hand minute-hand"
          style={{
            transform: `rotate(${minutesAngle}deg)`,
          }}
        ></div>
        <div
          className="hand hour-hand"
          style={{
            transform: `rotate(${hoursAngle}deg)`,
          }}
        ></div>

        {/* نقطه مرکزی */}
        <div className="center-dot"></div>
      </div>
    </div>
  );
};

export default RoundwallClock;
