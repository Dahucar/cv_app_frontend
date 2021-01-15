import React from "react";
import { Form, Input, Button, Card, Row, DatePicker } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
const layout = { labelCol: { span: 4 }, wrapperCol: { span: 8 } };

export const ExperienceScreen = () => {
  const items = [
    {
      id: 1,
      title: "Desarrollador Freelance",
      description: "Desarrollo de app de contabilidad usando Nodejs/Express y ReactJS",
      contactJob: "+569 25346895",
      initDate: "2019-02-05",
      finishDate: "2019-02-11"
    },
    {
      id: 2,
      title: "Desarrollador Freelance",
      description: "Desarrollo de app de contabilidad usando Nodejs/Express y ReactJS",
      contactJob: "+569 25346895",
      initDate: "2019-02-05",
      finishDate: "2019-02-11"
    },
    {
      id: 3,
      title: "Desarrollador Freelance",
      description: "Desarrollo de app de contabilidad usando Nodejs/Express y ReactJS",
      contactJob: "+569 25346895",
      initDate: "2019-02-05",
      finishDate: "2019-02-11"
    },
    {
      id: 4,
      title: "Desarrollador Freelance",
      description: "Desarrollo de app de contabilidad usando Nodejs/Express y ReactJS",
      contactJob: "+569 25346895",
      initDate: "2019-02-05",
      finishDate: "2019-02-11"
    },
    {
      id: 5,
      title: "Desarrollador Freelance",
      description: "Desarrollo de app de contabilidad usando Nodejs/Express y ReactJS",
      contactJob: "+569 25346895",
      initDate: "2019-02-05",
      finishDate: "2019-02-11"
    },
  ];
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleEdit = () => {
    console.log("Edit skill");
  };
  const hanldeDelete = () => {
    console.log("Delete skill");
  };

  const iconsList = [
    <EditOutlined key="edit" onClick={handleEdit} />,
    <DeleteOutlined key="delete" onClick={hanldeDelete} />,
  ];
 
  return (
    <>
      <Form
        {...layout}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="title"
          rules={[
            {
              required: true,
              message: "Please input your experience title!",
            },
          ]}
        >
          <Input name="title" placeholder="Enter your experience title!" />
        </Form.Item>

        <Form.Item
          name="description"
          rules={[
            {
              required: true,
              message: "Please input your description name!",
            },
          ]}
        >
          <Input name="description" placeholder="Enter your description experience!" />
        </Form.Item>

        <Form.Item
          name="contactJob"
          rules={[
            {
              required: true,
              message: "Please input your contactJob!",
            },
          ]}
        >
          <Input name="description" placeholder="Enter your contactJob!" />
        </Form.Item>

        <Form.Item
          name="initDate"
          rules={[
            {
              required: true,
              message: "Please input your init date!",
            },
          ]}
        >
          <DatePicker name="initDate" />
        </Form.Item>

        <Form.Item
          name="finishDate"
          rules={[
            {
              required: true,
              message: "Please input your finish date!",
            },
          ]}
        >
          <DatePicker name="finishDate" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {items.map((item) => (
          <Card
            hoverable
            key={item.id}
            title={item.title}
            bordered={false}
            style={{ width: 300, margin: "5px" }}
            actions={iconsList}
          >
            <p>{item.description}</p>
            <p>
              {item.initDate} - {item.finishDate}
            </p>
          </Card>
        ))}
      </Row>
    </>
  );
};
