import React, { useState, useRef } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";
import emailjs from "@emailjs/browser";
import { message } from "antd";

//template_w96jqzt
//service_lcdywrx
//cIlSTZOovVrc062k2

function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { portfolioData } = useSelector((state) => state.root);
  const { contact } = portfolioData;
  const [messageApi, contextHolder] = message.useMessage();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_lcdywrx",
        "template_w96jqzt",
        {
          from_name: form.name,
          to_name: "Robert",
          from_email: form.email,
          to_email: "robertwilliams11450@gmail.com",
          message: form.message,
        },
        "cIlSTZOovVrc062k2"
      )
      .then(
        () => {
          messageApi.open({
            type: "success",
            content: "I will get back to you as soon a possible.",
          });
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error);
          messageApi.open({
            type: "error",
            content: "Something went wrong, please check criterial",
          });
        }
      );
  };

  return (
    <div>
      <SectionTitle title="Say Hello" />

      <div className="flex sm:flex-col items-center gap-2 justify-between">
        <div className="justify-center">
          <h1 className="bg-primary text-secondary text-xl">Get In Contact</h1>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-primary">
            <label className="flex flex-col">
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your Name"
                className="bg-[#1c2541] placeholder:text-tertiary outline-none border-none text-tertiary"
              />
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Your Email"
                className="bg-[#1c2541] placeholder:text-tertiary outline-none border-none text-tertiary"
              />
              <textarea
                rows="7"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Message"
                className="bg-[#1c2541] placeholder:text-tertiary outline-none border-none text-tertiary"
              />
            </label>
            {contextHolder}
            <button
              type="submit"
              className="bg-secondary text-semibold text-white p-2 gap-4">
              Send
            </button>
          </form>
        </div>

        <div className="flex flex-col">
          <h1 className="text-tertiary text-sm">{"{"}</h1>
          {Object.keys(contact).map(
            (key) =>
              key !== "_id" && (
                <h1 className="ml-5 text-sm">
                  <span className="text-tertiary">{key} : </span>
                  <span className="text-tertiary">{contact[key]}</span>
                </h1>
              )
          )}
          <h1 className="text-tertiary text-sm">{"}"}</h1>
        </div>
        <div className="h-[400px]">
          <dotlottie-player
            src="https://lottie.host/9d881f82-3788-44d3-afb8-d24db3d78919/C5VO4BzGfx.json"
            background="transparent"
            speed="1"
            autoplay></dotlottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;
