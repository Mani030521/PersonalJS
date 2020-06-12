import { shallowEqual, useSelector, useDispatch } from 'react-redux';

export default function useReduce(property) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  return property ? [dispatch, state[property]] : [dispatch, state];
}
