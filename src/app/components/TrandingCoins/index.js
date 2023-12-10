'use client'
import { Typography, notification } from 'antd'
import axios from 'axios'
import Image from 'next/image'
import React, { memo, useCallback, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const TrandingCoinsWrapper = dynamic(() => import('./TrandingCoins.Styled'), { ssr: false })
const TrandingCoins = () => {
    const [list, setList] = useState([])

    const fetchTrandingCoins = useCallback(async () => {
        try {
            const res = await axios.get('https://api.coingecko.com/api/v3/search/trending')
            if (res?.status === 200 && res?.data) {
                setList(res?.data?.coins)
            } else {
                notification.error({
                    message: 'something went wrong while fetching trading data on server side!',
                    key: 'something went wrong while fetching trading data on server side!'
                })
            }
        } catch (error) {
            notification.error({
                message: 'something went wrong while fetching trading data on client side!',
                key: 'something went wrong while fetching trading data on client side!'
            })
        }
    }, []
    )
    useEffect(() => {
        fetchTrandingCoins()
    }, [])

    return (
        <TrandingCoinsWrapper>
            {list?.map((e) =>

                <div>
                    <Image src={e?.item.large} width={120} height={120} placeholder='blur' blurDataURL={e?.item.large} alt='tranding_coin_img' />
                    <Typography.Text className='coin_name'>name</Typography.Text>
                </div>
            )}
        </TrandingCoinsWrapper>
    )
}

export default memo(TrandingCoins)