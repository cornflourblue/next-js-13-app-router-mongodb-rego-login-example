import { useRouter } from 'next/navigation';

export { useFetch };

function useFetch() {
    const router = useRouter();

    return {
        get: request('GET'),
        post: request('POST'),
        put: request('PUT'),
        delete: request('DELETE')
    };

    function request(method: string) {
        return (url: string, body?: any) => {
            const requestOptions: any = {
                method
            };
            if (body) {
                requestOptions.headers = { 'Content-Type': 'application/json' };
                requestOptions.body = JSON.stringify(body);
            }
            return fetch(url, requestOptions).then(handleResponse);
        }
    }

    // helper functions

    async function handleResponse(response: any) {
        const isJson = response.headers?.get('content-type')?.includes('application/json');
        const data = isJson ? await response.json() : null;

        // check for error response
        if (!response.ok) {
            if (response.status === 401) {
                // api auto logs out on 401 Unauthorized, so redirect to login page
                router.push('/account/login');
            }

            // get error message from body or default to response status
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    }
}