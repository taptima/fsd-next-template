import type { FC, SVGProps } from 'react';
import LogoIcon from 'shared/assets/icons/next.svg';
import colors from 'shared/styles/colors.module.scss';

type Props = SVGProps<SVGSVGElement>;

export const Logo: FC<Props> = (props) => {
    const { width = 51, height = 51, fill = colors.primary900, ...restProps } = props;

    return (
        <LogoIcon aria-label="Логотип" width={width} height={height} fill={fill} {...restProps} />
    );
};
