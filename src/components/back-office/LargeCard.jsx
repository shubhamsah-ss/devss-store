const LargeCard = ({ icon, title, price, className, otherDetails }) => {
  return (
    <div
      className={`flex flex-col items-center gap-3 
    shadow-md p-5 rounded-xl text-white ${className}`}
    >
      {icon}
      <h4 className="lg:text-xl">{title}</h4>
      <h2 className="text-xl lg:text-2xl font-bold">
        &#x20B9; {Number(price ? price : 0).toFixed(2)}
      </h2>
      <div className="grid grid-cols-3 gap-5 text-center">
      {otherDetails &&
        otherDetails.map((detail, i) => (
            <div key={i} className="text-sm">
              <h3>{detail.title}</h3>
              <small>
              &#x20B9; {Number(detail.price ? detail.price : 0).toFixed(2)}
              </small>
            </div>
        ))}
        </div>
    </div>
  );
};

export default LargeCard;
