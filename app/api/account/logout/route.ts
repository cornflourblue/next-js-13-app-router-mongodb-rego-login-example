import { cookies } from 'next/headers';

import { apiHandler } from '_helpers/server/api';

module.exports = apiHandler({
    POST: logout
});

function logout() {
    cookies().delete('authorization');
}