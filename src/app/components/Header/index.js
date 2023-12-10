'use client'
import React, { memo, useState } from 'react'
import { Col, Row, Select, Typography } from 'antd';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';


const HeaderWrapper = dynamic(() => import('./Header.Styled'), {
    ssr: false
})

const Header = () => {
    const { Text } = Typography;
    const router = useRouter()
    const [currency, setCurrency] = useState('inr')
    return (
        <HeaderWrapper>
            <Row className='header_main_row'>
                <Col xs={24} className='header_main_col'>
                    <Text className='app_name' onClick={() => router?.push('/')}>Crypto View</Text>
                    <Select
                        className='currancy_select'
                        defaultValue="inr"
                        value={currency}
                        options={[
                            { value: 'inr', label: 'INR' },
                            { value: 'usd', label: 'USD' },
                        ]}
                        onChange={(e) => setCurrency(e)}
                    />
                </Col>
            </Row>
        </HeaderWrapper>
    )
}

export default memo(Header)