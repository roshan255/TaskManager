import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  cardName?: String;
}

function Card({ children, cardName }: Props) {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded mt-4"
        style={{ width: 500 }}
      >
        <h3 className="card-name" style={{ textAlign: "center" }}>
          {cardName}
        </h3>
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
}

export default Card;
