import React, { useEffect, useMemo } from 'react';
import useReduce from '../Hooks/useReduce';
import SearchInput from '../Components/SearchInput';
import Train from '../Components/Train';
import { searchTrain, trainAPIs } from '../Store/reducers/Trains';

export default function HomePage() {
  const [dispatch, state] = useReduce('Train');
  const { trainData, isFetched } = state;
  useMemo(() => {
    dispatch(trainAPIs({ payload: null, api: 'trains/train-list' }));
  }, [isFetched]);
  // useEffect(() => {
  //   dispatch(trainAPIs({ payload: null, api: 'trains/train-list' }));
  // }, []);

  const handleChange = (event) => {
    dispatch(searchTrain({ event: event.target.value, trainData }));
  };
  return (
    <div className="PageContent">
      <SearchInput onChange={handleChange} />
      <Train />
    </div>
  );
}
