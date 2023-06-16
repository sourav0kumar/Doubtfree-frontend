import { React, useState, useEffect } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

// import HomeContent from "../../components/HomeContent"
import { items, services_home } from "./constants";
import { TypeAnimation } from "react-type-animation";
import {
  BranchesOutlined,
  CodeFilled,
  GithubFilled,
  UserOutlined,
} from "@ant-design/icons";

const Home = () => {
  const [textColor, setTextColor] = useState("black");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScrollTop = documentHeight - windowHeight;
      const scrollPercentage = (scrollTop / maxScrollTop) * 100;
      setScrollPercentage(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const colorInterval = setInterval(() => {
      const items = [
        "aqua",
        "deeppink",
        "darkkhaki",
        "blue",
        "green",
        "purple",
        "pink",
        "brown",
        "darkmagenta",
        "darksalmon",
        "dodgerblue",
        "firebrick",
        "darkviolet",
      ];
      const randomColor = items[Math.floor(Math.random() * items.length)];
      setTextColor(randomColor);
    }, 1000); // Change color every 3 seconds

    return () => {
      clearInterval(colorInterval);
    };
  }, []);

  return (
    <>
      <section className="bg-blue-50 min-h-100" style={{ minHeight: "100vh" }}>
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="text-slate-900 max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl ">
              Code, Create,
              <div className="animation-container" style={{ color: textColor }}>
                <TypeAnimation
                  sequence={[
                    "Conquer!",
                    900,
                    "Conquer!",
                    900,
                    "Conquer!",
                    900,
                    "C",
                    900,
                  ]}
                  repeat={Infinity}
                  cursor={false}
                />
              </div>
            </h1>
            <h4 className="text-gray-700 mb-2">
              Join the Coding Revolution at DoubtFree
            </h4>
            <h5 className="mb-2">
              <strong className="text-green-700">
                Discover the best coding course for your kids.
              </strong>
            </h5>
            <p className="mb-2">Learn Coding from basics.</p>
            <p className="max-w-2xl mb-6  text-gray-600 lg:mb-8 md:text-lg lg:text-xl "></p>
            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <Link
                to="/"
                className="bg-gray-800 inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-700 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                <CodeFilled className="mr-2" />
                Playground
              </Link>
              <Link
                to="/"
                className="bg-gray-800 inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-700 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                <UserOutlined className="mr-2" />
                Dashboard
              </Link>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/dizzyeducation-1@2x.png" alt="hero image" />
          </div>
        </div>
      </section>

      <div className="container-home">
        <div className="home-left">
          <div className="text-4xl md:text-6xl font-bold">
            Code, Create,
            <div className="animation-container" style={{ color: textColor }}>
              <TypeAnimation
                sequence={[
                  "Conquer!",
                  900,
                  "Conquer!",
                  900,
                  "Conquer!",
                  900,
                  "C",
                  900,
                ]}
                repeat={Infinity}
                cursor={false}
              />
            </div>
            {/* <div className="animation-placeholder" /> */}
          </div>

          <div className="text-xl inline-block  md:text-3xl mt-4 font-semibold text-green-800 animation-text">
            Join the Coding Revolution at DoubtFree
          </div>
        </div>
        <div className="home-right">
          <img
            src="/dizzyeducation-1@2x.png"
            className="md:max-w-[50%] md:h-[60%]   sm:max-w-[40%] sm:h-[50%]  max-w-[30%] h-[40%] floating-image  mr-4 mt-6"
          />
        </div>
      </div>
      <div className="text-gray py-4 px-6 text-left container-home1">
        <div className="text-lg font-bold mb-2">
          Discover the best coding course for your kids.
        </div>
        <div className="text-base">Learn Coding from basics.</div>
        <div className="btn-div my-5">
          <Link
            to="/dashboard/courses"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg text-lg"
          >
            Explore
          </Link>

          <Link
            to="https://doubtfree.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg text-lg mx-3"
          >
            Learn More
          </Link>
        </div>
      </div>

      <section className="py-8 bg-gray-100 pb-16 mt-15 md:mt-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center font-bold mb-14">
            WHY CHOOSE
            <span className="text-3xl  font-bold text-blue-600"> US?</span>
          </h2>
          <div className="relative h-2 mb-6 overflow-hidden m-4">
            <div
              className="absolute h-full w-full bg-blue-400 rounded-3xl"
              style={{ width: `${scrollPercentage}%` }}
            ></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {services_home &&
              services_home?.map((service, index) => {
                return (
                  <div
                    className="px-4 user-select-none cursor-pointer"
                    key={index}
                  >
                    <div className="bg-gray-800 hover:bg-white rounded-lg shadow-lg p-6 text-gray-300 hover:text-gray-600">
                      <h3 className="text-xl font-bold mb-4 text-blue-400 hover:text-blue-600 flex align-items-center align-middle">
                        <span className="mr-2 mb-1">{service.child}</span>
                        {service.title}
                      </h3>
                      <p className="">{service.description}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      <div className="mt-1">
        <Footer />
      </div>
    </>
  );
};

export default Home;
