export const ADD_ITEM = 'ADD_ITEM'
export const DEL_ITEM = 'DEL_ITEM'

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