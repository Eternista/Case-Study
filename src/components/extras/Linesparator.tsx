interface SeparatorProps {
  color: string;
}

const LineSeparator = ({ color }: SeparatorProps) => {
  return <div className={`lineseparator lineseparator-${color}`}></div>;
};

export default LineSeparator;
