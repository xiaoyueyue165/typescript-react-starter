import * as React from "react";

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}
class HelloC extends React.Component<Props, object> {
  render() {
    const { name, enthusiasmLevel = 1 } = this.props;

    if (enthusiasmLevel <= 0) {
      throw new Error("You could be a little more enthusiastic. :D");
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
      </div>
    );
  }
}
export default HelloC;

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join("!"); // 自动减 1 的特点
}
