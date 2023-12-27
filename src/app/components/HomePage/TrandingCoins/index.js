'use client'
import { Typography, notification } from 'antd'
import axios from 'axios'
import Image from 'next/image'
import React, { memo, useCallback, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
// import required modules
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import useWindowSize from '../../../Helpers/Hooks/useWindowSize'

const TrandingCoinsWrapper = dynamic(() => import('./TrandingCoins.Styled'), { ssr: false })

const TrandingCoins = () => {
    // state for TrandingCoins list
    const [list, setList] = useState([])
    // for window size
    const wWidth = useWindowSize().width

    // API call for TrandingCoins from CoinGecko Platform start
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
    // API call for TrandingCoins from CoinGecko Platform end

    return (
        <TrandingCoinsWrapper>
            <Typography.Text className='tranding_text'>Today's Tranding Coins</Typography.Text>
            <Swiper
                slidesPerView={wWidth > 576 ? 3 : 1}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: true,
                    pauseOnMouseEnter: true,
                }}
                spaceBetween={30}
                freeMode={true}
                modules={[EffectCoverflow, Autoplay]}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                loop
                className="mySwiper"
            >
                {list?.map((e) =>
                    <SwiperSlide>
                        <Image src={e?.item.large} width={120} height={120} placeholder='blur' blurDataURL={e?.item.large} alt='tranding_coin_img' />
                        <Typography.Text className='coin_name'>{e?.item?.name}</Typography.Text>
                    </SwiperSlide>
                )}
            </Swiper>
        </TrandingCoinsWrapper>
    )
}

export default memo(TrandingCoins)