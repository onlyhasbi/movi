type Props = {
  title: string;
};

const Empty = ({ title }: Props) => {
  return (
    <div
      style={{ fontSize: "1.6rem", color:"#475569" }}
    >{`You don't have ${title} movie yet`}</div>
  );
};

export default Empty;
