import React from "react";
import { Form, Input, Button, Card, Row, DatePicker } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
const layout = { labelCol: { span: 4 }, wrapperCol: { span: 8 } };

export const OtherScreen = () => {
  const items = [
    {
      id: 1,
      titleItem: "Certification",
      titleActivity: "Certificacion on Java SE",
      description: "Proceso de certificación en JavaSE por parte de Oracle",
      initDate: "2019-02-05",
      finishDate: "2019-02-11"
    },
    {
      id: 2,
      titleItem: "Certification",
      titleActivity: "Certificacion on Java SE",
      description: "Proceso de certificación en JavaSE por parte de Oracle",
      initDate: "2019-02-05",
      finishDate: "2019-02-11"
    },
    {
      id: 3,
      titleItem: "Certification",
      titleActivity: "Certificacion on Java SE",
      description: "Proceso de certificación en JavaSE por parte de Oracle",
      initDate: "2019-02-05",
      finishDate: "2019-02-11"
    },
    {
      id: 4,
      titleItem: "Certification",
      titleActivity: "Certificacion on Java SE",
      description: "Proceso de certificación en JavaSE por parte de Oracle",
      initDate: "2019-02-05",
      finishDate: "2019-02-11"
    },
    {
      id: 5,
      titleItem: "Certification",
      titleActivity: "Certificacion on Java SE",
      description: "Proceso de certificación en JavaSE por parte de Oracle",
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
          name="titleItem"
          rules={[
            {
              required: true,
              message: "Please input your title item!",
            },
          ]}
        >
          <Input name="titleItem" placeholder="Enter your title item!" />
        </Form.Item>

        <Form.Item
          name="titleActivity"
          rules={[
            {
              required: true,
              message: "Please input your title activity!",
            },
          ]}
        >
          <Input
            name="titleActivity"
            placeholder="Enter your title activity!"
          />
        </Form.Item>

        <Form.Item
          name="description"
          rules={[
            {
              required: true,
              message: "Please input your description activity!",
            },
          ]}
        >
          <Input
            name="description"
            placeholder="Enter your description activity!"
          />
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
          <DatePicker name="initDate" placeholder="Enter your init date activity!"/>
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
          <DatePicker name="finishDate"  placeholder="Enter your finish date activity!"/>
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
            title={item.titleItem}
            bordered={false}
            style={{ width: 300, margin: "5px" }}
            actions={iconsList}
          >
            <p>{item.titleActivity}</p>
            <p>
              {item.initDate} - {item.finishDate}
            </p>
          </Card>
        ))}
      </Row>
    </>
  );
};
