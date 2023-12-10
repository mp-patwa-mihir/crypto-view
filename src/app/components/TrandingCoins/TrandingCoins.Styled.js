import theme from "@/app/config/theme";
import styled from "@emotion/styled";

const TrandingCoinsWrapper = styled.div(() => ({
    display: 'flex',
    gap: '48px',
    overflowX: 'auto',
    '::-webkit-scrollbar': {
        display: 'none',
    },
    div: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '16px',
        width: 'max-content !important',
        '& .coin_name': {
            fontSize: '16px',
            fontWeight: 500,
            color: theme.text,
        },
    },
}))

export default TrandingCoinsWrapper;