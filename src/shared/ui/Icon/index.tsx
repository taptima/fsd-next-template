interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = ({ className, Svg, ...restProps }: IconProps) => (
    <Svg className={className} {...restProps} />
);
