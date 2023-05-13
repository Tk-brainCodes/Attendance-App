const DatePicker = () => {
  return (
    <div>
      <div className='relative max-w-sm'>
        <input
          type='date'
          className='text-black border flex items-center justify-between  border-slate-200 bg-white rounded-[5px] w-[164px] px-2.5 py-2.5'
          placeholder='Select date'
        />
      </div>
    </div>
  );
};

export default DatePicker;
