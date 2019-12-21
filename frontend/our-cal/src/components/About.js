import React from "react";

const About = () => {
  return (
    <div className="About">
      <h2>About OurCal</h2>
      <p>
        OurCal is a community-generated Crochet-Along (CAL). Anyone can design a
        block using the graphghan generator and submit it to our database. Users
        can then view one another's blocks and implement their favorites in a
        one-of-a-kind blanket!
      </p>
      <h2>Future Features</h2>
      <p>
        Before we launch, there are a few more odds and ends to tie up:
        <ul>
          <li>Add user sessions</li>
          <li>Add the ability to edit one's submitted patterns</li>
          <li>Add the ability to view patterns by designer</li>
        </ul>
        After launch, we'll add some additional features:
        <ul>
          <li>View other's patterns in your color scheme</li>
          <li>Arrange selected blocks on a blanket template</li>
          <li>Generate written instructions for patterns</li>
          <li>Add a print-friendly view of patterns with instructions</li>
          <li>
            Have an idea?{" "}
            <a href={"https://github.com/AudTheCodeWitch/OurCAL/issues/new"}>
              Submit a feature request!
            </a>
          </li>
        </ul>
      </p>
    </div>
  );
};

export default About;
