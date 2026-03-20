export default function Banner() {
  return (
    <div className="background-banner bottom-0 fixed h-16 items-center z-50 text-white md:text-2xl uppercase w-full">
      <div className="banner-text bg-gray-900 flex h-full items-center justify-end">
        <p>Registration Opens May 1, 2026</p>
        <svg className="fill-current ml-4 md:ml-6" height="12" width="15">
          <use xlinkHref="#icon-rightarrow" />
        </svg>
        <svg className="fill-current ml-4 md:ml-6" height="12" width="15">
          <use xlinkHref="#icon-rightarrow" />
        </svg>
        <svg className="fill-current mx-4 md:mx-6" height="12" width="15">
          <use xlinkHref="#icon-rightarrow" />
        </svg>
      </div>
    </div>
  )
}
