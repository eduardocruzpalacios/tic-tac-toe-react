interface MovesCount {
  count: number
}

interface Action {
  type: string
}

export function movesCountReducer(state: MovesCount, action: Action): MovesCount {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error();
  }
}
