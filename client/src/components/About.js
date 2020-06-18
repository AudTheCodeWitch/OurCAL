import React from "react";

// Functional component - about page

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
      <h2>Coming Soon...</h2>
      <p>
        We hope to add a few new features in our next release:
        <ul>
          <li>Add user accounts/sessions</li>
          <li>Add the ability to edit one's submitted patterns</li>
          <li>Add the ability to view patterns by designer</li>
          <li>View other patterns in your color scheme</li>
          <li>Arrange selected blocks on a blanket template</li>
          <li>Generate written instructions for patterns</li>
          <li>Add a print-friendly view of patterns with instructions</li>
        </ul>
      </p>
      <p>
        Have an idea?{" "}
        <a href={"https://github.com/AudTheCodeWitch/OurCAL/issues/new"}>
          Submit a feature request!
        </a>
      </p>
    </div>
  );
};

export default About;
