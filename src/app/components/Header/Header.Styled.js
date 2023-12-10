import theme from "@/app/config/theme";
import styled from "@emotion/styled";

const HeaderWrapper = styled.div(() => ({
    '& .header_main_row': {
        backgroundColor: 'transparent',
        width: '100%',
        '& .header_main_col': {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '24px',
            '& .app_name': {
                fontSize: '24px',
                color: theme.text,
                fontWeight: 700,
                cursor: 'pointer',
                ':hover': {
                    textShadow: 'white 1px 0 10px',
                    transition: 'all 0.3s'
                },
            },
            '& .currancy_select': {
                minWidth: '80px',
                '& .ant-select-selector': {
                    backgroundColor: 'transparent',
                    borderColor: theme.border,
                    borderWidth: '2px solid',
                    color: theme.text,
                },
                '& .ant-select-arrow': {
                    color: theme.text,
                },
            },
        },
    },
}))

export default HeaderWrapper;