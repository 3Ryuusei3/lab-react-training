import './Random.css';

const Random = ({ min, max }) => {
  let randomNumber = Math.floor(Math.random() * (max - min) + min);

  return (
    <div className="Random">
      <p>
        Random value between {min} and {max} === <b>{randomNumber}</b>
      </p>
    </div>
  );
};

export default Random;
