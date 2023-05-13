const Dropdown = ({
  data,
  isOpen,
  setIsOpen,
  selectedOption,
  onOptionClicked,
  name,
  handelOpenDropdown,
  activeDropdown,
}: {
  data: any;
  isOpen: boolean;
  setIsOpen: any;
  selectedOption: any;
  onOptionClicked: any;
  name: string;
  handelOpenDropdown: any;
  activeDropdown: number;
}) => {
  return (
    <div>
      <button
        id='dropdownDefaultButton'
        data-dropdown-toggle='dropdown'
        className='text-black border flex items-center justify-between  border-slate-200 bg-white rounded-[5px] w-[164px] px-2.5 py-2.5'
        type='button'
        onClick={handelOpenDropdown}
      >
        <div className='flex flex-col items-start'>
          <span className='text-xs text-[#444444] '> {name}</span>
          <span className='text-sm text-black tracking-tighter text-justify'>
            {selectedOption}
          </span>
        </div>
        <svg
          className='w-4 h-4 ml-2'
          aria-hidden='true'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M19 9l-7 7-7-7'
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div
          id='dropdown'
          className='z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700'
        >
          {data.map((data: any) => (
            <ul
              className='py-2 text-sm text-gray-700 dark:text-gray-200'
              aria-labelledby='dropdownDefaultButton'
              key={Math.random()}
            >
              <li onClick={onOptionClicked(data.name)}>
                <a
                  href='#'
                  className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  {data.name}
                </a>
              </li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
