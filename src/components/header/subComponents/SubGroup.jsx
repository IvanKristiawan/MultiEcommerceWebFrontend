import { Box, Typography } from "@mui/material";
import { FontFamily, Colors } from "../../../constants/styles";

function SubGroup({ arrayChildren }) {
  return (
    <Box sx={subGroupWrapper}>
      {arrayChildren &&
        arrayChildren.map((val) => (
          <>
            <Box sx={subGroupTextContainer}>
              <Typography sx={[FontFamily.caption, subGroupText]}>
                {val.name}
              </Typography>
            </Box>
          </>
        ))}
    </Box>
  );
}

export default SubGroup;

const subGroupWrapper = {
  flex: 2
};

const subGroupTextContainer = {
  marginLeft: 2,
  marginTop: 1
};

const subGroupText = {
  fontWeight: "500",
  color: Colors.white,
  cursor: "pointer",
  "&:hover": {
    color: Colors.brown200
  }
};
