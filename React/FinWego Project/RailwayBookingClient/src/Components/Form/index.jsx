import React from 'react';
import {
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
} from '@material-ui/core';
import useForm from '../../Hooks/useForm';
import Wrapper from '../Wrapper';
import useReduce from '../../Hooks/useReduce';
import { loginUser } from '../../Store/reducers/Users';
import '../../CSS/Form.css';

export default function BasicTextFields(props) {
  const [
    formValues,
    handleChange,
    handleBlur,
    currentRadioValue,
    handleSubmit,
  ] = useForm(props);
  const { closeModal } = props;
  const [dispatch] = useReduce();
  console.log(formValues,'coming====')
  const textFieldGenerator = (arrayData) => {
    let textFieldArray = [];
    textFieldArray = arrayData.map((fieldData) => (
      <TextField
        fullWidth
        onBlur={(e) => handleBlur(e, 'input', fieldData.label)}
        onChange={(e) => handleChange(e, 'input', fieldData.label)}
        id="standard-error-helper-text"
        {...fieldData}
      />
    ));
    return textFieldArray;
  };

  const radioButton = (radioValue) => radioValue.map((radioData) => (
    <RadioGroup
      row
      aria-label="position"
      value={currentRadioValue}
      onBlur={(e) => handleBlur(e, 'radio', null)}
      onChange={(e) => handleChange(e, 'radio', null)}
    >
      <FormControlLabel
        value={radioData}
        control={<Radio color="primary" />}
        label={radioData}
      />
    </RadioGroup>
  ));

  return (
    <Wrapper>
      {Object.keys(formValues).map((fieldsData) => (fieldsData === 'input'
        ? textFieldGenerator(formValues[fieldsData])
        : fieldsData === 'radio'
          ? radioButton(formValues[fieldsData])
          : null))}
      <div className="Button">
        <Button
          onClick={() => handleSubmit(
            dispatch,
            loginUser,
            props.formType,
            props.currentValue,
            closeModal,
          )}
          variant="contained"
          color="secondary"
        >
          Submit
        </Button>
      </div>
    </Wrapper>
  );
}
