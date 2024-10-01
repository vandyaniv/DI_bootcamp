import { useDispatch, useSelector } from 'react-redux';

const DatePicker = () => {
  const dispatch = useDispatch();
  const setSelectedDay = useSelector((state) => state.tasks.setSelectedDay);

  const handleDateChange = (e) => {
    dispatch(setSelectedDay(e.taget.value));
  };

  return <input type="date" value={setSelectedDay || ''} onChange={handleDateChange}></input>;
};

export default DatePicker;
