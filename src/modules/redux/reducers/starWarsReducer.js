const initialState = {
    data: [],
    inputValue: '',
    lable: '',
    loading: false
}

const SAVE_LIST = 'SAVE_LIST'
const SAVE_VALUE = 'SAVE_VALUE'
const SER_LOADING = 'SER_LOADING'
const SAVE_LABEL = 'SAVE_LABEL'

export const starWarsReducers = (state= initialState, action) => {
    switch (action.type) {
        case SAVE_LIST:
            return {
                ...state, data: action.payload
            }
        case SAVE_LABEL:
            return {...state, lable: action.payload}
        case SAVE_VALUE:
            return {...state, inputValue: action.payload}
        case SER_LOADING:
            return {...state, loading: action.payload}
        default:
            return state
    }
}
