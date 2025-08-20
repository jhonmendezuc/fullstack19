import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Checkbox from "@mui/icons-material/CheckBox";
import HomeIcon from "@mui/icons-material/Home";
import TextField from "@mui/material/TextField";
import styled from "styled-components";

const Title = styled.p`
  font-size: 1.5em;
  text-align: left;
  font-size: 15px;
  color: #bf4f74;
`;

const EstilosMui = () => {
  return (
    <>
      <h5>EJEMPLOS MUI</h5>
      <h6>componentes</h6>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button style={{ backgroundColor: "red", color: "white" }}>
          Outlined
        </Button>
        <Checkbox defaultChecked />
        <HomeIcon color="success" sx={{ fontSize: 20 }} />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <br />
      </Stack>
      <Title>ejemplo styled component</Title>
    </>
  );
};

export default EstilosMui;
