import { Form } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from "antd";

const API_BASE_URL =
  "https://robertwilliams-portfolio-b3a1e27fa6b7.herokuapp.com/api";

function AdminAbout() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const onFinish = async (values) => {
    try {
      const tempSkills = values.skills.split(",");
      values.skills = tempSkills;
      dispatch(showLoading());
      const response = await axios.post(
        `${API_BASE_URL}/portfolio/update-about`,
        {
          ...values,
          _id: portfolioData.about._id,
        }
      );
      dispatch(hideLoading());
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      message.error(error.message);
    }
  };

  return (
    <div>
      <Form
        onFinish={onFinish}
        layout="vertical"
        initialValues={{
          ...portfolioData.about,
          skills: portfolioData.about.skills.join(", "),
        }}>
        <Form.Item
          name="lottieURL"
          label="Lottie URL">
          <input placeholder="Lottie URL" />
        </Form.Item>
        <Form.Item
          name="description1"
          label="Description 1">
          <textarea placeholder="Description 1" />
        </Form.Item>
        <Form.Item
          name="description2"
          label="Description 2">
          <textarea placeholder="Description 2" />
        </Form.Item>
        <Form.Item
          name="skills"
          label="Skills">
          <textarea placeholder="Skills" />
        </Form.Item>
        <div className="flex justify-end w-full">
          <button
            className="px-10 py-2 bg-primary text-white"
            type="submit">
            Save
          </button>
        </div>
      </Form>
    </div>
  );
}

export default AdminAbout;
