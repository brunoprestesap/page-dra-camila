import React from 'react'

function CardContent({ id, imgContent, title, text, link, color }) {
  return (
    <div
      key={id}
      className="mx-auto group shadow-2xl pb-8 rounded-b-2xl transform duration-500 hover:-translate-y-2 bg-white dark:bg-gray-800"
    >
      <img
        className="object-cover w-full rounded-2xl h-64"
        src={imgContent}
        alt={title}
      />
      <div className="p-5">
        <div className="pl-5 pr-5">
          <h5 className="text-2xl font-bold tracking-tight">{title}</h5>
          <p className="pt-5">{text}</p>
        </div>
        <div className="p-5 flex flex-row justify-between items-baseline">
          <p className="font-bold text-2xl"></p>
          <div>
            <a href={link}>
              <button
                className="rounded-full p-2 w-36 font-bold text-gray-50"
                style={{ background: color }}
              >
                Assista agora
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardContent;
