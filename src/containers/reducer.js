import { ACTIONS } from './actions'
export function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.SHOW_SEARCH_PAGE:
            return { show_search_page: true }
        case ACTIONS.HIDE_SEARCH_PAGE:
            return { show_search_page: true }
        default:
            return state;
    }
}

