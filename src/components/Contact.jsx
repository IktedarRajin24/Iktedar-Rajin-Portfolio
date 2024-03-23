import React from "react";
import Input from "../Layouts/Input";
import Button from "../Layouts/Button";

const Contact = () => {
  return (
    <section className="md:w-9/12 w-11/12 flex flex-col md:items-end mx-auto">
      <form action="#" className="md:w-[60%]">
        <h1 className="text-4xl font-semibold py-10">Contact</h1>
        <div className="grid md:grid-cols-2 w-full gap-10 mb-10">
          <Input label={"First Name"} type={"text"} width={"100%"} />
          <Input label={"Last Name"} type={"text"} width={"100%"} />
          <Input label={"Email"} type={"email"} width={"100%"} />
          <Input label={"Phone"} type={"phone"} width={"100%"} />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            className="px-2 py-1 mt-5 w-full h-[100px] rounded-[10px] bg-black border-[0.1px] border-[#f89222] focus:outline-none focus:ring-2 focus:ring-[#f5bd4d] transition-all duration-300"
          ></textarea>
        </div>
        <Button children={"Send Message"} width={"100%"} />
      </form>
    </section>
  );
};

export default Contact;
