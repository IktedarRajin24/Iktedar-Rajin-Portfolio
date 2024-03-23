import React from "react";
import Input from "../Layouts/Input";
import Plan from "../Layouts/Plan";
import Button from "../Layouts/Button";

const plans = [
  {
    name: "Intro",
    price: "$29",
    features: [
      { name: "Interface Design", notProvided: false },
      { name: "Front-end Code", notProvided: false },
      { name: "Back-end Development", notProvided: false },
      { name: "Search Engine Optimization", notProvided: false },
      { name: "Awesome Support", notProvided: true },
      { name: "Responsive Site", notProvided: true },
      { name: "Easy in Use", notProvided: true },
      { name: "Useful Site", notProvided: true },
      { name: "Speedy Web", notProvided: true },
    ],
  },
  {
    name: "Base",
    price: "$49",
    features: [
      { name: "Interface Design", notProvided: false },
      { name: "Front-end Code", notProvided: false },
      { name: "Back-end Development", notProvided: false },
      { name: "Search Engine Optimization", notProvided: false },
      { name: "Awesome Support", notProvided: false },
      { name: "Responsive Site", notProvided: false },
      { name: "Easy in Use", notProvided: true },
      { name: "Useful Site", notProvided: true },
      { name: "Speedy Web", notProvided: true },
    ],
  },
  {
    name: "Popular",
    price: "$99",
    features: [
      { name: "Interface Design", notProvided: false },
      { name: "Front-end Code", notProvided: false },
      { name: "Back-end Development", notProvided: false },
      { name: "Search Engine Optimization", notProvided: false },
      { name: "Awesome Support", notProvided: false },
      { name: "Responsive Site", notProvided: false },
      { name: "Easy in Use", notProvided: false },
      { name: "Useful Site", notProvided: false },
      { name: "Speedy Web", notProvided: true },
    ],
  },
  {
    name: "Enterprise",
    price: "$199",
    features: [
      { name: "Interface Design", notProvided: false },
      { name: "Front-end Code", notProvided: false },
      { name: "Back-end Development", notProvided: false },
      { name: "Search Engine Optimization", notProvided: false },
      { name: "Awesome Support", notProvided: false },
      { name: "Responsive Site", notProvided: false },
      { name: "Easy in Use", notProvided: false },
      { name: "Useful Site", notProvided: false },
      { name: "Speedy Web", notProvided: false },
    ],
  },
];

const Pricing = () => {
  return (
    <section className="md:w-9/12 w-11/12 flex flex-col md:items-end mx-auto">
      <div className="md:w-[60%]">
        <h1 className="text-4xl font-semibold py-10">Pricing</h1>
        <div className="grid md:grid-cols-2 w-full gap-10 mb-10">
          {plans.map((plan) => (
            <Plan key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
