import { Form, Modal, message } from "antd";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showLoading, hideLoading, ReloadData } from "../../redux/rootSlice";
import axios from "axios";

const API_BASE_URL =
  "https://robertwilliams-portfolio-b3a1e27fa6b7.herokuapp.com/api";

function AdminOrganizations() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { organizations } = portfolioData;
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
  const [type, setType] = useState("add");

  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      let response;
      if (selectedItemForEdit) {
        response = await axios.post(
          `${API_BASE_URL}/portfolio/update-organization`,
          {
            ...values,
            _id: selectedItemForEdit._id,
          }
        );
      } else {
        response = await axios.post(
          `${API_BASE_URL}/portfolio/add-organization`,
          values
        );
      }
      dispatch(hideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        setShowAddEditModal(false);
        setSelectedItemForEdit(null);
        dispatch(hideLoading());
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      message.error(error.message);
    }
  };

  const onDelete = async (item) => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        `${API_BASE_URL}/portfolio/delete-organization`,
        {
          _id: item._id,
        }
      );
      dispatch(hideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        dispatch(hideLoading());
        dispatch(ReloadData(true));
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
      <div className="flex justify-end">
        <button
          className="bg-primary px-5 py-2 text-white"
          onClick={() => {
            setSelectedItemForEdit(null);
            setShowAddEditModal(true);
          }}>
          Add Organization
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-5 sm:grid-cols-1">
        {organizations.map((organization) => (
          <div className="shadow border p-5 border-gray-400 flex flex-col">
            <h1 className="text-primary text-xl font-bold">
              {organization.period}
            </h1>
            <hr />
            <h1>Organization: {organization.company}</h1>
            <h1>Position: {organization.position}</h1>
            <h1>{organization.description}</h1>
            <div className="flex justify-end gap-5 mt-5">
              <button
                className="bg-red-500 text-white px-5 py-2"
                onClick={() => {
                  onDelete(organization);
                }}>
                Delete
              </button>
              <button
                className="bg-primary text-white px-5 py-2"
                onClick={() => {
                  setSelectedItemForEdit(organization);
                  setShowAddEditModal(true);
                  setType("edit");
                }}>
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {(type === "add" || selectedItemForEdit) && (
        <Modal
          visible={showAddEditModal}
          title={
            selectedItemForEdit ? "Edit Organization" : "Add Organization"
          }
          footer={null}
          onCancel={() => {
            setShowAddEditModal(false);
            setSelectedItemForEdit(null);
          }}>
          <Form
            layout="vertical"
            onFinish={onFinish}
            initialValues={selectedItemForEdit}>
            <Form.Item
              name="period"
              label="Period">
              <input placeholder="Period" />
            </Form.Item>
            <Form.Item
              name="company"
              label="Organization">
              <input placeholder="Organization" />
            </Form.Item>
            <Form.Item
              name="position"
              label="Position">
              <input placeholder="Position" />
            </Form.Item>
            <Form.Item
              name="description"
              label="Description">
              <textarea placeholder="Description" />
            </Form.Item>

            <div className="flex justify-end">
              <button
                className="border-primary text-primary px-5 py-2"
                onClick={() => {
                  setShowAddEditModal(false);
                  setSelectedItemForEdit(null);
                }}>
                Cancel
              </button>
              <button className="bg-primary text-white px-5 py-2">
                {selectedItemForEdit ? "Update" : "Add"}
              </button>
            </div>
          </Form>
        </Modal>
      )}
    </div>
  );
}

export default AdminOrganizations;
