import React from "react";
import HomeBanner from "./ui/HomeBanner";
import HomeIntro from "./ui/HomeIntro";
import HomeAbout from "./ui/HomeAbout";
import HomeServices from "./ui/HomeServices";
import HomeClients from "./ui/HomeClients";
import HomeProjects from "./ui/HomeProjects";
import HomeTeam from "./ui/HomeTeam";
import HomeReviews from "./ui/HomeReviews";
import HomeFaq from "./ui/HomeFaq";
import HomeBlog from "./ui/HomeBlog";
import HomeFollow from "./ui/HomeFollow";

const homePage = () => {
  return (
    <main>
      <HomeBanner/>
      <HomeIntro/>
      <HomeAbout/>
      <HomeServices/>
      <HomeClients/>
      <HomeProjects/>
      <HomeTeam/>
      <HomeReviews/>
      <HomeFaq/>
      <HomeBlog/>
      <HomeFollow/>
    </main>
  );
};

export default homePage;
