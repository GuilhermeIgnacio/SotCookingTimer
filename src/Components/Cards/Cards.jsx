import { Countdown } from "../Countdown/Countdown";
import "./style.css";

export const Card = ({ title, image, alt, minute, seconds }) => {
  return (
    <div className="card">
      <section className="card-header">
        <h3>{title}</h3>
      </section>
      <section className="card-image">
        <img src={image} alt={alt} />
      </section>
      <section className="card-body">
        <Countdown hr={0} min={minute} sec={seconds} />
      </section>
      <section className="card-footer"></section>
    </div>
  );
};
