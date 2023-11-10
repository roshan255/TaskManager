import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  cardName?: String;
}

function Card({ children, cardName }: Props) {
  return (
    <div
      className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded"
      style={{ width: 400 }}
    >
      <h3 className="card-name" style={{ textAlign: "center" }}>
        {cardName}
      </h3>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
