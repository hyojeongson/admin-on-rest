export const CRUD_SHOW_FILTER = 'CRUD_SHOW_FILTER';
export const CRUD_HIDE_FILTER = 'CRUD_HIDE_FILTER';
export const CRUD_SET_FILTER = 'CRUD_SET_FILTER';

export const showFilter = (resource, field) => ({
    type: CRUD_SHOW_FILTER,
    payload: { field },
    meta: { resource },
});

export const hideFilter = (resource, field) => ({
    type: CRUD_HIDE_FILTER,
    payload: { field },
    meta: { resource },
});

export const setFilter = (resource, field, value) => ({
    type: CRUD_SET_FILTER,
    payload: { field, value },
    meta: { resource },
});
