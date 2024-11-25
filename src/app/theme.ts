import type { ThemeConfig } from 'antd';

export const theme: ThemeConfig = {
    token: {
        fontFamily: 'inherit',
        fontSize: 14,
        colorPrimary: '#285ba4',
        colorText: 'var(--neture-900)',
    },
    components: {
        Avatar: {
            colorTextPlaceholder: 'var(--primary-900)',
        },
        Button: {
            paddingBlock: 8,
            paddingInline: 16,
            colorText: 'var(--primary-900)',
            borderColorDisabled: 'transparent',
            motionDurationMid: 'var(--transition-fast)',
        },
        Collapse: {
            headerBg: 'var(--neture-0)',
            colorBorder: 'var(--neture-100)',
        },
        Drawer: {
            padding: 0,
            paddingLG: 0,
            paddingMD: 0,
            paddingSM: 0,
            paddingXL: 0,
            paddingXS: 0,
            paddingXXS: 0,
            footerPaddingBlock: 16,
            footerPaddingInline: 24,
            colorSplit: 'var(--neture-100)',
            colorBgMask: 'rgba(17, 25, 40, 0.2)',
        },
        Form: {
            itemMarginBottom: 0,
        },
        Input: {
            paddingBlock: 10,
            paddingInline: 16,
            paddingXXS: 16, // OTP
            colorBorder: 'var(--neture-100)',
            colorBgContainerDisabled: 'var(--neture-50)',
        },
        DatePicker: {
            paddingBlock: 10,
            paddingInline: 16,
            paddingBlockSM: 16,
            paddingBlockLG: 16,
            colorBorder: 'var(--neture-100)',
            colorBgContainerDisabled: 'var(--neture-50)',
        },
        Layout: {
            headerBg: 'var(--neture-0)',
            headerHeight: 'auto',
            headerPadding: '12px 20px',
            bodyBg: 'var(--neture-50)',
        },
        List: {
            itemPadding: '8px 0',
        },
        Modal: {
            padding: 0,
            paddingLG: 0,
            paddingMD: 0,
            paddingSM: 0,
            paddingXL: 0,
            paddingXS: 0,
            paddingXXS: 0,
            colorBgMask: 'rgba(17, 25, 40, 0.2)',
        },
        Select: {
            colorBorder: 'var(--neture-100)',
            colorBgContainerDisabled: 'var(--neture-50)',
            optionPadding: '8px 12px',
            optionSelectedColor: 'var(--primary-900)',
            optionSelectedBg: 'var(--neture-0)',
            optionSelectedFontWeight: 400,
        },
        Skeleton: {
            gradientFromColor: 'var(--neture-100)',
            gradientToColor: 'var(--neture-300)',
        },
        Spin: {
            colorBgContainer: 'transparent',
        },
        Table: {
            headerBg: 'var(--neture-0)',
            headerBorderRadius: 0,
            headerSortHoverBg: 'var(--neture-50)',
            headerSortActiveBg: 'var(--neture-50)',
            headerFilterHoverBg: 'var(--neture-100)',
            rowHoverBg: 'var(--neture-50)',
        },
        Timeline: {
            dotBg: 'var(--neture-300)',
            colorPrimary: 'var(--neture-300)',
            tailColor: 'var(--neture-300)',
        },
        Pagination: {
            itemSize: 44,
            itemSizeSM: 34,
        },
    },
};
