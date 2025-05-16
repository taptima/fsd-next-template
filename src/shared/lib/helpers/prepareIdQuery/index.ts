export const prepareIdQuery = (id?: string) => {
    const idQuery = Number(id);

    if (id === undefined || id === null || Number.isNaN(idQuery)) {
        return undefined;
    }

    return idQuery;
};
