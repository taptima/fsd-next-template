import { print } from 'graphql/language/printer';
// import extractFiles from 'extract-files/extractFiles.mjs';
// import isExtractableFile from 'extract-files/isExtractableFile.mjs';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import type { DocumentNode } from 'graphql/language/ast';
import AbstractAxiosClient from 'shared/lib/api/axios';
import { handleError } from 'shared/config/logger';

type QueryVariables = {
    [key: string]: unknown;
};

const getGraphQLParams = (query: DocumentNode): AxiosRequestConfig['params'] => {
    if (process.env.NODE_ENV === 'development') {
        return {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            operation: query.definitions[0]?.name?.value,
        };
    }

    return {};
};

export default class GraphQL extends AbstractAxiosClient {
    public async query<ResponseType = unknown, Variables = QueryVariables>(
        query: DocumentNode,
        variables?: Variables,
    ): Promise<AxiosResponse<ResponseType>> {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const response = await this.client.post<ResponseType, any>(
            '',
            {
                query: print(query),
                variables,
            },
            {
                params: getGraphQLParams(query),
            },
        );

        return this.withHandleErrors(response);
    }

    // public async queryFormData<
    //     ResponseType = unknown,
    //     Variables extends QueryVariables = QueryVariables,
    // >(query: DocumentNode, variables: Variables): Promise<AxiosResponse<ResponseType>> {
    //     const { files, clone: variablesWithoutFiles } = extractFiles(
    //         variables,
    //         isExtractableFile,
    //         'variables',
    //     );
    //
    //     const map: Record<number, string[]> = {};
    //     const mappedFiles: Record<number, Blob | File> = {};
    //     let i = 0;
    //     files.forEach((paths, file) => {
    //         map[i] = paths;
    //         mappedFiles[i] = file;
    //         ++i;
    //     });
    //
    //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //     const response = await this.client.post<ResponseType, any>(
    //         '',
    //         {
    //             operations: JSON.stringify({
    //                 query: print(query),
    //                 variables: variablesWithoutFiles,
    //             }),
    //             map: JSON.stringify(map),
    //             ...mappedFiles,
    //         },
    //         {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data',
    //             },
    //         },
    //     );
    //
    //     return this.withHandleErrors(response);
    // }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any,class-methods-use-this
    private withHandleErrors(response: any) {
        if (response?.data?.errors) {
            handleError('GraphQL error', response.data.errors);
        }

        return response;
    }
}
