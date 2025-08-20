import * as React from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";

const Tareas = (props) => {
  const { titulo, estado } = props;
  return (
    <>
      <Box sx={{ color: "white" }}>
        <Badge color="secondary" variant="dot">
          <MailIcon />
          {titulo} - {estado ? "✅" : "❌"}
        </Badge>
      </Box>
    </>
  );
};

export default Tareas;
