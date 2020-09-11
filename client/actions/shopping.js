export const ADD_ITEM = 'ADD_ITEM'
export const DEL_ITEM = 'DEL_ITEM'
export const INIT_ITEM = 'INIT_ITEM'



export function initItem (item) {
    return {
        type: INIT_ITEM,
        item: item
    }
}

export function addItem (item) {
    return {
        type: ADD_ITEM,
        item: item
    }
}

export function deleleItem (item) {
    return {
        type: DEL_ITEM,
        item: item
    }
}