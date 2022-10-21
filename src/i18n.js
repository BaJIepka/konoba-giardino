import state from '@/state'

export default (sr, en, ru, it) => ({ sr, en, ru, it }[state.lang])
