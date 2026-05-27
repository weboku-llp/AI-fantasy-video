export function pagination(page = 1, pageSize = 10) { return { skip: (page - 1) * pageSize, take: pageSize }; }
