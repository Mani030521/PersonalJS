const formDetails = {
  user: {
    signup: {
      input: [
        {
          label: 'UserName',
          name: 'userName',
          type: 'string',
          value: '',
          helperText: '',
          error: false,
        },
        {
          label: 'Password',
          type: 'password',
          name: 'password',
          value: '',
          error: false,
          helperText: '',
        },
        {
          label: 'Age',
          type: 'number',
          name: 'Age',
          value: '',
          error: false,
          helperText: '',
        },
        {
          label: 'FirstName',
          type: 'string',
          value: '',
          error: false,
          name: 'firstName',
          helperText: '',
        },
        {
          label: 'SecondName',
          type: 'string',
          value: '',
          name: 'secondName',
          error: false,
          helperText: '',
        },
      ],
      radio: ['Male', 'Female'],
    },
    login: {
      input: [
        {
          label: 'UserName',
          type: 'string',
          value: '',
          name: 'userName',
          error: false,
          helperText: '',
        },
        {
          label: 'Password',
          type: 'password',
          value: '',
          error: false,
          name: 'password',
          helperText: '',
        },
      ],
    },
  },
  admin: {
    signup: {
      input: [
        {
          label: 'UserName',
          type: 'string',
          value: '',
          name: 'userName',
          error: false,
          helperText: '',
        },
        {
          label: 'Password',
          type: 'password',
          name: 'password',
          value: '',
          error: false,
          helperText: '',
        },
      ],
    },
    login: {
      input: [
        {
          label: 'UserName',
          type: 'any',
          value: '',
          error: false,
          name: 'userName',
          helperText: '',
        },
        {
          label: 'Password',
          type: 'password',
          name: 'password',
          value: '',
          error: false,
          helperText: '',
        },
      ],
    },
  },
};

export default formDetails;
