import { Fragment, FC } from 'react';
import Divider from 'antd/es/divider';
import Flex from 'antd/es/flex';
import { Action, ActionProps } from './Action';

type Props = {
    items: ActionProps[];
};

export const Actions: FC<Props> = (props) => {
    const { items } = props;

    return (
        <Flex align="center">
            {items.map((item, index) => (
                <Fragment key={item.variant}>
                    {index > 0 && <Divider type="vertical" />}
                    <Action {...item} />
                </Fragment>
            ))}
        </Flex>
    );
};
