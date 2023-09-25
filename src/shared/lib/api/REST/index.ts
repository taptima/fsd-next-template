import AbstractAxiosClient from 'shared/lib/api/axios';

export default class REST extends AbstractAxiosClient {
    public post = this._client.post;

    public get = this._client.get;
}
