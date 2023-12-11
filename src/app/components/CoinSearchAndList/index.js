'use client'
import { Button, Col, Input, Row, notification } from 'antd'
import React, { memo, useCallback, useEffect, useState } from 'react'
import CoinSearchAndListWrapper from './CoinSearchAndListWrapper.Styled'
import axios from 'axios'

const CoinSearchAndList = () => {
    // state for inpur text store
    const [coinsName, setCoinsName] = useState('')
    // state for store search coins list
    const [searchCoin, setSearchCoin] = useState([])
    console.log(searchCoin)

    // API call for search coins list with search options and set search options for search coins list start
    const fetchCoins = useCallback(async () => {
        if (coinsName) {
            try {
                const res = await axios.get(`https://api.coingecko.com/api/v3/search?query=${coinsName}`)
                if (res?.status === 200) {
                    if (res?.data?.coins?.length > 0) {
                        setSearchCoin(res?.data?.coins)
                    } else {
                        notification.error({
                            message: 'Invalid coin search!',
                            key: 'Invalid coin search!',
                        })
                    }
                } else {
                    notification.error({
                        message: 'Something went wrong while fetching coins on server side!',
                        key: 'Something went wrong while fetching coins on server side!',
                    })
                }
            } catch (error) {
                notification.error({
                    message: 'Something went wrong while fetching coins on client side!',
                    key: 'Something went wrong while fetching coins on client side!',
                })
            }
        } else {
            notification.info({
                message: 'Please search atleast one coin!',
                key: 'Please search atleast one coin!',
            })
        }
    }, [coinsName])
    // API call for search coins list with search options and set search options for search coins list end

    return (
        <CoinSearchAndListWrapper>
            <Row className='main_row'>
                <Col xs={24} className='main_col'>
                    <Input placeholder='Search coins' className='input' onChange={(e) => setCoinsName(e?.target?.value)} value={coinsName} />
                    <Button className='search_btn' onClick={fetchCoins}>Search</Button>
                </Col>
            </Row>
        </CoinSearchAndListWrapper>
    )
}

export default memo(CoinSearchAndList)