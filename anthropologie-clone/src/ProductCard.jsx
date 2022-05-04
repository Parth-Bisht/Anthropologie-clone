export const ProductCard = (props) => {
  return (
    <div>
      <div className="item">
        <div className="card">
          <img className="img1" src={props.cardData.img1} />
          <img className="img2" src={props.cardData.img2} />
          <p>{props.cardData.title}</p>
        </div>
      </div>
    </div>
  );
};
