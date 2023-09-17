import BarChartIcon from "@mui/icons-material/BarChart";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";

export const Finances = (): JSX.Element => {
  const [alignment, setAlignment] = useState("month");

  function handleChange(
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ): void {
    setAlignment(newAlignment);
  }

  return (
    <div className={"ml-2 mr-2 my-2 mt-2 mb-2 h-full rounded transparent"}>
      <p className={"text-4xl roboto text-justify ml-2"}>
        {"Finances "}
        <BarChartIcon />
      </p>
      <ToggleButtonGroup
        className={"h-6 justify-items-end"}
        exclusive={true}
        onChange={handleChange}
        value={alignment}
      >
        <ToggleButton
          sx={{
            "&.Mui-selected, &.Mui-selected:hover": {
              backgroundColor: "rgb(226 232 240)",
              borderColor: "rgba(226 232 240)",
              color: "rgba(226, 232, 240, 0.3)",
              fontWeight: "bold",
            },
          }}
          value={"month"}
        >
          {"Month"}
        </ToggleButton>
        <ToggleButton
          sx={{
            "&.Mui-selected, &.Mui-selected:hover": {
              backgroundColor: "rgb(226 232 240)",
              color: "black !important",
              fontWeight: "bold",
            },
            borderColor: "rgba(226 232 240)",
            color: "rgba(226, 232, 240, 0.3)",
          }}
          value={"year"}
        >
          {"Year"}
        </ToggleButton>
      </ToggleButtonGroup>
      <div className={"w-64 h-16 rounded ml-0 mt-4 border border-inherit"}>
        <p className={"text-xl roboto text-right mr-6 mt-2"}>{"$4.560.966"}</p>
        <p className={"text-xs text-right mr-6"}>{"Income"}</p>
      </div>
      <div className={"w-64 h-16 rounded ml-0 mt-4 border border-inherit"}>
        <p className={"text-xl roboto text-right mr-6 mt-2"}>{"$2.500.875"}</p>
        <p className={"text-xs text-right mr-6"}>{"Expenses"}</p>
      </div>
      <div className={"w-64 h-80 rounded ml-0 mt-4"}>
        <p className={"text-xl roboto text-justify"}>{"Recent Activities"}</p>
        <List sx={{ bgcolor: "transparent", width: "100%" }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={"Album photos"} secondary={"Jan 9, 2014"} />
            <ListItemText primary={"$16.000"} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={"Work"} secondary={"Jan 7, 2014"} />
            <ListItemText primary={"$29.850"} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={"Vacation"} secondary={"July 20, 2014"} />
            <ListItemText primary={"$500.000"} />
          </ListItem>
        </List>
      </div>
    </div>
  );
};
