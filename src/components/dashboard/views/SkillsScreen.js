import React from "react";
import { Form, Input, Button, Card, Row } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
const layout = { labelCol: { span: 4, }, wrapperCol: { span: 8, }, };

export const SkillsScreen = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleEdit = () => {
    console.log('Edit skill');
  }
  const hanldeDelete = () => {
    console.log('Delete skill');
  }
  
  const iconsList = [
    <EditOutlined key="edit" onClick={ handleEdit }/>,
    <DeleteOutlined key="delete" onClick={ hanldeDelete } />,
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
          name="skill"
          rules={[
            {
              required: true,
              message: "Please input your skill name!",
            },
          ]}
        >
          <Input name="skill" placeholder="Enter your skill name!" />
        </Form.Item>

        <Form.Item
          name="experience"
          rules={[
            {
              required: true,
              message: "Please input your experience name!",
            },
          ]}
        >
          <Input name="experience" placeholder="Enter your skill experience" />
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
            key={item}
            title="JavaScript"
            bordered={false}
            style={{ width: 300, margin: "5px" }}
            actions={iconsList}
          >
            <p>Advences</p>
          </Card>
        ))}
      </Row>
    </>
  );
};
