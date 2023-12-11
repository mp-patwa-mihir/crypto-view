import theme from "@/app/config/theme";
import styled from "@emotion/styled";

const CoinSearchAndListWrapper = styled.div(() => ({
    padding: '24px',
    '& .main_row': {
        '& .main_col': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 8,
            '& .input': {
                padding: '8px',
                borderRadius: '4px',
                borderColor: theme.border,
                maxWidth: '80%',
                color: theme.title,
                fontSize: '16px',
            },
            '& .search_btn': {
                padding: '8px',
                backgroundColor: theme.background,
                border: `1px solid ${theme.border}`,
                borderRadius: '4px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 'auto',
                flex: '1',
                color: theme.text,
                ':hover': {
                    color: theme.title,
                    transition: 'all 0.3s',
                }
            },
        },
    },
}))

export default CoinSearchAndListWrapper