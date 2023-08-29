function Contact({ imgSrc = "../baseline_perm_identity_black_48dp.png", name, telNumber, email }) {
    return (
      <figure className="w-56 flex flex-col items-center bg-gray-50  rounded-xl p-8 space-y-2 shadow-xl m-8">
        <div>
          <img className="w-28 h-28 rounded-full" src={imgSrc} />
        </div>
        <h1 className="text-lg font-semibold ">{name}</h1>
        <p className="font-light text-gray-500 ">{telNumber}</p>
        <p className="font-light text-gray-500">{email}</p>
      </figure>
    );
  }