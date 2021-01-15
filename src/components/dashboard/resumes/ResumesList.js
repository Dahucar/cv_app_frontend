import React from 'react';
import { Row } from "antd";
import { ResumesItem } from './ResumesItem';

export const ResumesList = () => {
    const items = [1,2,3,4,5,6];
    return (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {
                items.map( item => (
                    <ResumesItem key={ item } />
                ))
            }
        </Row>
    )
}
