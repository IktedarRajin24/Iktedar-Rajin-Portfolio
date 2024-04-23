import React, { useRef } from "react";
import Input from "../Layouts/Input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_rcqgy6w", "template_vfk2wd7", form.current, {
        publicKey: "MueBkffdsz2fvsnd_",
      })
      .then(
        () => {
          toast.success("Message sent.");
        },
        (error) => {
          toast.warn("Failed with", error);
        }
      );
  };
  return (
    <section className="md:w-9/12 w-11/12 flex flex-col md:items-end mx-auto">
      <form ref={form} action="#" className="md:w-[60%]" onSubmit={sendEmail}>
        <h1 className="text-4xl font-semibold py-5">Contact</h1>
        <p className="pb-5 text-xs">
          <i>Send me a message. Let's Talk.</i>
        </p>
        <div className="grid md:grid-cols-2 w-full gap-10 mb-10">
          <Input label={"Email"} type={"email"} width={"100%"} name={"email"} />
          <Input label={"Name"} type={"text"} width={"100%"} name={"name"} />
        </div>
        <Input
          label={"Subject"}
          type={"text"}
          width={"100%"}
          name={"subject"}
        />

        <div className="pt-10">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            className="px-2 py-1 mt-5 w-full h-[100px] rounded-[10px] bg-black border-[0.1px] border-[#f89222] focus:outline-none focus:ring-2 focus:ring-[#f5bd4d] transition-all duration-500 ease-out"
          ></textarea>
        </div>
        <input
          type="submit"
          value={"Send Message"}
          className="h-10 w-full my-10 rounded-[10px] bg-gradient-to-r from-[#f5bd4d] to-[#f89222] bg-clip-content hover:bg-clip-text text-white hover:text-transparent  border-[1px] border-[#f89222] bg-transparent transition-all duration-300 cursor-pointer"
        />
      </form>
      <ToastContainer pauseOnHove theme="dark" transition:Bounce />
    </section>
  );
};

export default Contact;
