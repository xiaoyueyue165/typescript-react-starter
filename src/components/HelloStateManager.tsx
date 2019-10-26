import * as React from 'react';
import './style.css';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

function HelloStateManager({
  name,
  enthusiasmLevel = 1,
  onIncrement,
  onDecrement
}: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error('你需要更多的热情!');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
}

export default HelloStateManager;
function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!'); // 自动减 1 的特点
}
