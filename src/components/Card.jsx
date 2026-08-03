function Card({ image = null, title, subtitle, onlyText = false }) {
  if (onlyText) {
    return (
      <div className="flex flex-col bg-sky-100 text-sky-900 px-3 py-4 justify-center items-center gap-2">
        <p className="font-lead font-bold mb-0.5 text-2xl leading-6 text-center mt-6">
          {title}
        </p>
        <a href="#">{subtitle}</a>
      </div>
    );
  } else {
    return (
      <div className="bg-sky-100 text-sky-900 px-3 py-4">
        <div className="mb-4">
          <img src={image} alt="" />
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
