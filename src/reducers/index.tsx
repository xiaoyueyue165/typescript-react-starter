import { EnthusiasmAction } from '../actions';
import { StoreState } from '../types/index';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index';

const initState = { languageName: 'TypeScript', enthusiasmLevel: 1 };

// 定义 state 的初始化及输出
export default function(
  state = initState,
  action: EnthusiasmAction
): StoreState {
  switch (action.type) {
    // 增加热情
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      // 减少热情
      return {
        ...state,
        // 最少有一个热情
        enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)
      };
  }
  return state;
}
