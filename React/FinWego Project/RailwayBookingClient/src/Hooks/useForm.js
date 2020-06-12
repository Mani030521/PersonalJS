import { useState, useEffect } from 'react';
import FormFields from '../Constants/FormFields';
import extendDeep from '../Helpers/DeepCopy';
import payloadCreator from '../Helpers/PayloadCreator';

export default function useForm({ formType, currentValue }) {
  const [formValues, setFormValues] = useState({});
  const [radioButtonValue, setRadioButtonValue] = useState(null);
  const formObject = Object.values(FormFields);

  useEffect(() => {
    const deepCopy = extendDeep(formObject, {});
    Object.keys(deepCopy[currentValue][formType]).map(() => setFormValues((prevState) => ({
      ...prevState,
      ...deepCopy[currentValue][formType],
    })));
    return () => {
      setFormValues(() => ({ }));
    };
  }, [formType, currentValue]);

  const handleBlur = (event, type, label) => {
    if (type === 'input') {
      const index = formValues[type].findIndex(
        (formData) => formData.label === label
      );
      const shallowCopy = { ...formValues };
      if (shallowCopy[type][index].value === '') {
        shallowCopy[type][index].error = true;
        shallowCopy[type][index].helperText = `${label} should not be empty`;
        setFormValues(() => ({
          ...shallowCopy,
        }));
      } else {
        shallowCopy[type][index].error = false;
        shallowCopy[type][index].helperText = '';
        setFormValues(() => ({
          ...shallowCopy,
        }));
      }
    }
  };

  const handleChange = (event, type, label) => {
    if (type === 'input') {
      const index = formValues[type].findIndex(
        (formData) => formData.label === label
      );
      const shallowCopy = { ...formValues };
      shallowCopy[type][index].value = shallowCopy[type][index].label === 'Age'
        ? parseInt(event.target.value, 10)
        : event.target.value;
      setFormValues(() => ({
        ...shallowCopy,
      }));
    } else {
      setRadioButtonValue(event.target.value);
    }
  };

  const handleSubmit = (dispatch, action, formTypes, role, callbackCloseModal) => {
    let submitFlag = false;
    const shallowCopy = { ...formValues };
    shallowCopy.input.map((data, index) => {
      if (data.value !== '' && index === formValues.input.length - 1) {
        if (formType === 'signup' && radioButtonValue) {
          submitFlag = true;
        } else if (formType === 'login') {
          submitFlag = true;
        }
      } else if (data.value === '') {
        data.error = true;
        data.helperText = `${data.label} should not be empty`;
      }
      return true;
    });
    if (!submitFlag) {
      setFormValues(() => ({
        ...shallowCopy,
      }));
    } else {
      let payload;
      if (radioButtonValue) {
        payload = payloadCreator(formValues.input, 'name');
        payload.Gender = radioButtonValue;
      } else {
        payload = payloadCreator(formValues.input, 'name');
      }
      if (role === 0) {
        if (formType === 'login') {
          const payloadDetail = { api: 'user/sign-in', payload };
          dispatch(action(payloadDetail));
          callbackCloseModal();
        } else if (formType === 'signup') {
          const payloadDetail = { api: 'user/sign-up', payload };
          dispatch(action(payloadDetail, 'user/sign-up'));
          callbackCloseModal();
        }
      } else if (role === 1) {
        if (formType === 'login') {
          const payloadDetail = { api: 'admin/sign-in', payload };
          dispatch(action(payloadDetail));
          callbackCloseModal();
        } else if (formType === 'signup') {
          const payloadDetail = { api: 'admin/sign-up', payload };
          dispatch(action(payloadDetail));
          callbackCloseModal();
        }
      }
    }
  };

  return [
    formValues,
    (event, type, label) => handleChange(event, type, label),
    (event, type, label) => handleBlur(event, type, label),
    radioButtonValue,
    (dispatch, action, formTypes, role, callbackCloseModal) => handleSubmit(dispatch, action, formTypes, role, callbackCloseModal),
  ];
}
