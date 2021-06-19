import defaultLogo from '.././logo.svg';

export default function Note({ logo, logoAlt, name, value }) {
  return (
    <div className="my-3">
      <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div class="flex-shrink-0">
          <img
            class="h-12 w-12"
            src={logo || defaultLogo}
            alt={logo ? logoAlt : 'React Logo'}
          />
        </div>
        <div>
          <div class="text-xl font-medium text-black">{name}</div>
          <p class="text-gray-500">{value}</p>
        </div>
      </div>
    </div>
  );
}
