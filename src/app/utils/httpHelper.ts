import * as _ from 'lodash';

export class HttpHelper {
    buildParams(qrs, removePrefix: boolean = false) {
        let query = '';
        const beginningPrefix = removePrefix ? '' : '?';

        qrs = (typeof qrs === 'object') ? qrs : {};

        if (Object.keys(qrs).length > 0) {
            _.each(qrs, function (val, key) {
                if (val !== undefined && val !== '') {
                    const prefix = query.length ? '&' : beginningPrefix;
                    query += prefix + key + '=' + val;
                }
            });
        }

        return query;
    }

    /**
     * 
     * @param data 
     * 
     * example: data = [1,2,3]
     * result: 1,2,3
     */
    convertArrayToString(data: number[]) {
        if (data.length > 0) {
            return data.toString();
        }

        return null;
    }
}