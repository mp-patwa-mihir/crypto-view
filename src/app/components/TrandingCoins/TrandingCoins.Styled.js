import theme from "@/app/config/theme";
import styled from "@emotion/styled";

const TrandingCoinsWrapper = styled.div(() => ({
    padding: '24px',
    '& .tranding_text': {
        fontSize: '38px',
        color: theme.title,
        fontWeight: 500,
        textAlign: 'center',
    },
    '& .mySwiper': {
        border: `1px solid ${theme.border}`,
        borderRadius: '4px',
        padding: '24px',
        marginTop: '10px',
        '& .swiper-wrapper': {
            '& .swiper-slide': {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: 'fit-content',
                gap: '16px',
                '& .coin_name': {
                    fontSize: '16px',
                    fontWeight: 500,
                    color: theme.text,
                },
            },
        },
    },
}))

export default TrandingCoinsWrapper;