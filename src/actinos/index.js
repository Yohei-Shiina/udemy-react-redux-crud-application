// in redux, function that returns action is called action creater

// these two consts will be used for reducer as well
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// action for increment
export const increment = () => ({
    type: INCREMENT
})

// decrement for increment
export const decrement = () => ({
    type: DECREMENT
})