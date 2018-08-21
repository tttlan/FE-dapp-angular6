import * as _ from 'lodash';

export class HttpHelper {
    buildParams(qrs, removePrefix) {
        var query = '',
            beginningPrefix = removePrefix ? '' : '?';

        qrs = (typeof qrs === 'object') ? qrs : {};

        if (Object.keys(qrs).length > 0) {
            _.each(qrs, function(val, key) {
                if (val !== undefined && val !== '') {
                    var prefix = query.length ? '&' : beginningPrefix;
                    query += prefix + key + '=' + val;
                }
            });
        }

        return query;
    };

    convertArrayToString(data: number[]) {
        if(data.length > 0) {
            return data.toString();
        }

        return null;
    }
}