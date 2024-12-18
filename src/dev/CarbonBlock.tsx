type Props = {
  children: React.ReactNode;
  style: React.CSSProperties;
};

export const CarbonBlock = ({ children, style }: Props) => {
  return (
    <div style={style}>
      <p>Carbon</p>
      {children}
    </div>
  );
};
