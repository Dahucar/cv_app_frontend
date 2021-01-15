import React from "react";
import { Form, Input, Button, Card, Row, DatePicker } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
const layout = { labelCol: { span: 4 }, wrapperCol: { span: 8 } };

export const EducationScreen = () => {
  const items = [
    {id: 1, title: 'Item 01', college: 'Item 01', initDate: '2020-01-01', finishDate: '2021-02-02'},
    {id: 2, title: 'Item 02', college: 'Item 02', initDate: '2020-01-01', finishDate: '2021-02-02'},
    {id: 3, title: 'Item 03', college: 'Item 03', initDate: '2020-01-01', finishDate: '2021-02-02'},
    {id: 4, title: 'Item 04', college: 'Item 04', initDate: '2020-01-01', finishDate: '2021-02-02'},
    {id: 5, title: 'Item 05', college: 'Item 05', initDate: '2020-01-01', finishDate: '2021-02-02'}
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
              message: "Please input your education title!",
            },
          ]}
        >
          <Input name="title" placeholder="Enter your education title!" />
        </Form.Item>

        <Form.Item
          name="college"
          rules={[
            {
              required: true,
              message: "Please input your college name!",
            },
          ]}
        >
          <Input name="college" placeholder="Enter your college name!" />
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
            <p>{item.college}</p>
            <p>{item.initDate} - {item.finishDate}</p>
          </Card>
        ))}
      </Row>
    </>
  );
};
