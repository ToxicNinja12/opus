function Card({
  image = null,
  title,
  subtitle,
  onlyText = false,
  small = false,
}) {
  if (onlyText) {
    return (
      <div className="h-full flex flex-col bg-primary-light-2 text-primary-dark px-3 py-4 justify-center items-center gap-2">
        <p className="font-lead font-bold mb-0.5 text-xl sm:text-2xl leading-6 text-center mt-6">
          {title}
        </p>
        <a href="#">{subtitle}</a>
      </div>
    );
  } else if (small) {
    return (
      <div className="h-full flex flex-col bg-primary-light-2 text-primary-dark px-2 py-3">
        <div className="mb-4">
          <img
            src={image}
            alt=""
            className="w-full aspect-square object-cover"
          />
        </div>
        <div>
          <p className="font-bold leading-tight">{title}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="h-full flex flex-col bg-primary-light-2 text-primary-dark px-3 py-4">
        <div className="mb-4">
          <img
            src={image}
            alt=""
            className="w-full aspect-square object-cover"
          />
        </div>
        <div>
          <p className="font-bold mb-0.5">{title}</p>
          <p className="text-sm">{subtitle}</p>
        </div>
      </div>
    );
  }
}

export default Card;
