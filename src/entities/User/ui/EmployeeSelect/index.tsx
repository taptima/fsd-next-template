import { filterNonNullable } from 'shared/lib/helpers/filterNonNullable';
import { InfiniteSelect, InfiniteSelectProps } from 'shared/ui/inputs/InfiniteSelect';
import { useEmployeeOptions } from 'entities/User/api/swr/useEmployeeOptions';
import { mapUserToOption } from 'entities/User/model/mapper/mapUserToOption';

type Props<Form> = Partial<InfiniteSelectProps<Form>>;

export function EmployeeSelect<Form>(props: Props<Form>) {
    const {
        data = [],
        isLoading,
        // fetchMore
    } = useEmployeeOptions();

    return (
        <InfiniteSelect<Form>
            loading={isLoading}
            options={filterNonNullable(data.map(mapUserToOption))}
            // onScrollToBottom={fetchMore}
            {...props}
        />
    );
}
