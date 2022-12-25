import React, { useState, createContext, useEffect } from "react";
import "./styles/LandingPage.scss";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const ThemeContext = createContext(null);
const LandingPage = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  const [isToggled, setIsToggled] = React.useState(false);
  function handleChangee() {
    setIsToggled((prevIsToggled) => !prevIsToggled);
  }

  const [value, setValue] = useState(16);
  const [Year, setYear] = useState(144);
  const [ValueDown, setValueDown] = useState(false);
  const [ValueYear, setValueYear] = useState(false);
  const [Open, setOpen] = useState(true);
  const [Close, setClose] = useState(false);
  const [ValueOpen, setValueOpen] = useState(true);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const textScrollVariants = {
    visible: { opacity: 1, top: 0 },
    hidden: { opacity: 0 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme} className="Landing_main">
        <div id={theme} className="Landing_Page_2">
          <div id={theme} className="Landing_Page_2_border">
            <div id={theme} className="traffic_text">
              <h1 className="Simple">Simple, traffic-based pricing</h1>
              <p className="Sign_up">
                Sign-up for our 30-day trial. No credit card required.
              </p>
              <svg
                className="Venn"
                xmlns="http://www.w3.org/2000/svg"
                width="146"
                height="145"
              >
                <g fill="none" fill-rule="evenodd" stroke="#CFD8EF">
                  <circle cx="63" cy="82" r="62.5" />
                  <circle cx="105" cy="41" r="40.5" />
                </g>
              </svg>
            </div>
          </div>
          <motion.div
            ref={ref}
            variants={textScrollVariants}
            initial="hidden"
            className="Landing_Page_3"
            animate={controls}
          >
            <div id={theme} className="Page_Views">
              <p className="Pagvews">100K PAGEVIEWS</p>
              {ValueOpen && (
                <div className="Landing_Page_4_phone">
                  <input
                    min={16}
                    max={144}
                    className="range-sliderr"
                    type="range"
                    defaultValue={value}
                    onChange={handleChange}
                  />
                </div>
              )}
              <div className="Price_div">
                <h1 className="Price">
                  {ValueOpen && (
                    <div>
                      ${value}.00
                      <span className="month"> / month</span>
                    </div>
                  )}
                  {ValueYear && (
                    <div>
                      ${Year}.00
                      <span className="month"> / Year</span>
                    </div>
                  )}
                  {ValueDown && (
                    <div>
                      ${Year}.00
                      <span className="month"> / Year</span>
                    </div>
                  )}
                </h1>
              </div>
            </div>
            {ValueOpen && (
              <div className="Landing_Page_4">
                <input
                  min={16}
                  max={144}
                  className="range-sliderr"
                  type="range"
                  defaultValue={value}
                  onChange={handleChange}
                />
              </div>
            )}
            <div className="Landing_Page_5">
              <p>Monthlty Billing</p>
              {Open && (
                <>
                  <label
                    onClick={() => {
                      setValueYear(true);
                      setValueDown(false);
                      setValueOpen(false);
                      setOpen(false);
                      setClose(true);
                    }}
                    className="toggle"
                  >
                    <input
                      type="checkbox"
                      checked={isToggled}
                      onChange={handleChangee}
                    />
                    <span className="slider round" />
                  </label>
                </>
              )}
              {Close && (
                <>
                  <label
                    onClick={() => {
                      setValueYear(false);
                      setValueDown(false);
                      setValueOpen(true);
                      setOpen(true);
                      setClose(false);
                    }}
                    className="toggle"
                  >
                    <input
                      type="checkbox"
                      checked={isToggled}
                      onChange={handleChangee}
                    />
                    <span className="sliderr round" />
                  </label>
                </>
              )}
              <div className="switch">
                <div>
                  <input type="checkbox" class="checkbox" />
                  <label for="checkbox" class="labell"></label>
                </div>
              </div>
              <p className="discount">
                -25% <span className="Dicount_text">dicount</span>
              </p>
            </div>
            <div className="Border"></div>
            <div className="Landing_Page_6">
              <ul className="Check_text_main">
                <div className="Check_text">
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8">
                    <path
                      fill="none"
                      stroke="#10D8C4"
                      stroke-width="2"
                      d="M1 4.134l1.907 1.908L7.949 1"
                    />
                  </svg>
                  <li>Unlimited websites</li>
                </div>
                <div className="Check_text">
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8">
                    <path
                      fill="none"
                      stroke="#10D8C4"
                      stroke-width="2"
                      d="M1 4.134l1.907 1.908L7.949 1"
                    />
                  </svg>
                  <li>100% data ownership</li>
                </div>
                <div className="Check_text">
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8">
                    <path
                      fill="none"
                      stroke="#10D8C4"
                      stroke-width="2"
                      d="M1 4.134l1.907 1.908L7.949 1"
                    />
                  </svg>
                  <li>Email reports</li>
                </div>
              </ul>
              <div>
                <div className="Trial">Start my trial</div>
              </div>
            </div>
            <div className="switch">
              <div>
                <input
                  type="checkbox"
                  id="checkbox"
                  class="checkbox"
                  onChange={toggleTheme}
                  checked={theme === "dark"}
                />
                <label for="checkbox" class="label">
                  <svg
                    className="fa-moon"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="18"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 31 2 C 22 2 13.511719 5.824219 9.078125 13.5 C 5.941406 18.9375 5.125 25.515625 6.84375 31.542969 C 8.5 37.355469 12.277344 42.09375 17.488281 44.890625 C 21.425781 47 26 48 30 48 C 34.585938 48 38.570313 46.671875 42.574219 43.921875 C 42.953125 43.660156 43.117188 43.191406 42.984375 42.753906 C 42.847656 42.316406 42.445313 42.019531 41.988281 42.015625 C 38.351563 41.996094 34.378906 40.195313 31.175781 38.035156 C 29.011719 38.171875 24.042969 38.648438 21.5 38 C 19.789063 37.5625 17.089844 36.296875 15.984375 33.0625 C 19.742188 35.8125 24.402344 35.085938 27.402344 35.003906 C 26.414063 34.046875 25.664063 33.140625 25.265625 32.40625 L 27.535156 30.890625 C 27.839844 30.691406 28.011719 30.339844 27.980469 29.980469 C 27.949219 29.617188 27.726563 29.296875 27.394531 29.148438 C 27.378906 29.140625 26.535156 28.742188 25.558594 27.808594 C 25.855469 27.488281 26.109375 27.09375 26.292969 26.644531 C 26.742188 25.558594 26.980469 24.070313 27 22.011719 C 27.003906 21.742188 26.898438 21.484375 26.710938 21.296875 C 26.523438 21.105469 26.265625 21 26 21 L 23 21 L 23 23 L 22.808594 23 C 22.804688 23 22.808594 23 22.808594 23 L 21.9375 23 C 21.722656 26.332031 20.546875 28.058594 18.984375 28.058594 C 17.457031 28.058594 16.230469 26.371094 16.027344 23 L 12 23 C 11.449219 23 11 22.550781 11 22 C 11 21.445313 11.449219 21 12 21 L 23.03125 21 C 23 12.453125 28.761719 5.808594 31.566406 3.925781 C 31.933594 3.679688 32.105469 3.226563 31.996094 2.796875 C 31.882813 2.367188 31.441406 2.035156 31 2 Z"></path>
                  </svg>
                  <svg
                    className="fa-sun"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="18"
                    viewBox="0 0 30 30"
                  >
                    <path d="M 14.984375 0.98632812 A 1.0001 1.0001 0 0 0 14 2 L 14 5 A 1.0001 1.0001 0 1 0 16 5 L 16 2 A 1.0001 1.0001 0 0 0 14.984375 0.98632812 z M 5.796875 4.7988281 A 1.0001 1.0001 0 0 0 5.1015625 6.515625 L 7.2226562 8.6367188 A 1.0001 1.0001 0 1 0 8.6367188 7.2226562 L 6.515625 5.1015625 A 1.0001 1.0001 0 0 0 5.796875 4.7988281 z M 24.171875 4.7988281 A 1.0001 1.0001 0 0 0 23.484375 5.1015625 L 21.363281 7.2226562 A 1.0001 1.0001 0 1 0 22.777344 8.6367188 L 24.898438 6.515625 A 1.0001 1.0001 0 0 0 24.171875 4.7988281 z M 15 8 A 7 7 0 0 0 8 15 A 7 7 0 0 0 15 22 A 7 7 0 0 0 22 15 A 7 7 0 0 0 15 8 z M 2 14 A 1.0001 1.0001 0 1 0 2 16 L 5 16 A 1.0001 1.0001 0 1 0 5 14 L 2 14 z M 25 14 A 1.0001 1.0001 0 1 0 25 16 L 28 16 A 1.0001 1.0001 0 1 0 28 14 L 25 14 z M 7.9101562 21.060547 A 1.0001 1.0001 0 0 0 7.2226562 21.363281 L 5.1015625 23.484375 A 1.0001 1.0001 0 1 0 6.515625 24.898438 L 8.6367188 22.777344 A 1.0001 1.0001 0 0 0 7.9101562 21.060547 z M 22.060547 21.060547 A 1.0001 1.0001 0 0 0 21.363281 22.777344 L 23.484375 24.898438 A 1.0001 1.0001 0 1 0 24.898438 23.484375 L 22.777344 21.363281 A 1.0001 1.0001 0 0 0 22.060547 21.060547 z M 14.984375 23.986328 A 1.0001 1.0001 0 0 0 14 25 L 14 28 A 1.0001 1.0001 0 1 0 16 28 L 16 25 A 1.0001 1.0001 0 0 0 14.984375 23.986328 z"></path>
                  </svg>
                  <i class="fas fa-sun"></i>
                  <div class="ball"></div>
                </label>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default LandingPage;
