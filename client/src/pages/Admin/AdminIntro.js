import { Form } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from "antd";

const API_BASE_URL =
  "https://robertwilliams-portfolio-b3a1e27fa6b7.herokuapp.com/api";

function AdminIntro() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        `${API_BASE_URL}/portfolio/update-intro`,
        {
          ...values,
          _id: portfolioData.intro._id,
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
        initialValues={portfolioData.intro}>
        <Form.Item
          name="welcomeText"
          label="welcome Text">
          <input placeholder="welcome Text" />
        </Form.Item>
        <Form.Item
          name="firstName"
          label="First Name">
          <input placeholder="First Name" />
        </Form.Item>
        <Form.Item
          name="lastName"
          label="Last Name">
          <input placeholder="Last Name" />
        </Form.Item>
        <Form.Item
          name="caption"
          label="Caption">
          <input placeholder="Caption" />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description">
          <textarea placeholder="Description" />
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

export default AdminIntro;
