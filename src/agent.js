/**
 * Created by giapt on 5/25/2017.
 */

import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'https://conduit.productionready.io/api';

const responseBody = res => res.body;

const requests = {
    get: url =>
        superagent.get(`${API_ROOT}${url}`).then(responseBody)
};

const Articles = {
    all: () =>
        requests.get('/articles?limit=10')
};

export default {
    Articles
};