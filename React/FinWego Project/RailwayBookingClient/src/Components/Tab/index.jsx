import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Form from '../Form';
import Wrapper from '../Wrapper';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function SimpleTabs(props) {
  const { form, handleClose } = props;
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Wrapper>
      <AppBar color="secondary" position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="User" />
          <Tab label="Admin" />
        </Tabs>
      </AppBar>
      {[1, 2].map((data) => (
        <Wrapper key={data}>
          <TabPanel value={value} index={data - 1}>
            <Form
              formType={form}
              closeModal={handleClose}
              currentValue={value}
            />
          </TabPanel>
        </Wrapper>
      ))}
    </Wrapper>
  );
}
