import { usersRepo } from '_helpers/server';
import { apiHandler } from '_helpers/server/api';

module.exports = apiHandler({
    GET: getCurrent
});

async function getCurrent() {
    return await usersRepo.getCurrent();
}