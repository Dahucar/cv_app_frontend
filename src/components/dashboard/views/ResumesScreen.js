import React, { useState } from 'react';
import { Affix, Button } from 'antd';
import { PlusOutlined } from "@ant-design/icons";
import { ResumesList } from '../resumes/ResumesList';

export const ResumesScreen = () => {
    const [top, setTop] = useState(10);
    return (
        <>
            <Affix offsetTop={top}>
                <Button type="primary" onClick={() => setTop(top + 10)} icon={ <PlusOutlined /> }>
                    Create new resume
                </Button>
            </Affix>
            <ResumesList />
        </>
    )
}
