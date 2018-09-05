// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

export const HttpStatusCode = {
    SuccessResposes: {
        OK: 200,
        created: 201,
        Accepted: 202,
        Non_Authoritative_Information: 203,
        No_Content: 204
    },
    RedirectionMessages: {
        Multiple_Choice: 300
    },
    ClientErrorResponses: {
        Bad_Request: 400,
        Unauthorized: 401,
        Forbidden: 403,
        Not_Found: 404,
        Method_Not_Allowed: 405,
        Request_Timeout: 408
    },
    ServerErrorResponses: {
        Internal_Server_Error: 500,
        Bad_Gateway: 502,
        Service_Unavailable: 503,
        Gateway_Timeout: 504
    }
};