import React from 'react'
import { Card, Avatar } from "antd";
import {
    EditOutlined,
    DeleteOutlined,
    EyeOutlined
} from "@ant-design/icons";
const { Meta } = Card;

export const ResumesItem = () => {
    const iconsList = [
        <EyeOutlined key="see"/>,
        <EditOutlined key="edit" />,
        <DeleteOutlined key="delete"/>
    ];
    return (
        <Card
            hoverable
            style={{ width: 300, marginBottom: '15px' }}
            cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
            }
        actions={ iconsList }
        >
        <Meta
            avatar={ <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /> }
            title="Card title"
            description="This is the description"
        />
        </Card>
    )
}


