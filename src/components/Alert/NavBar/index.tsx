import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/Add";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import BarChartIcon from "@mui/icons-material/BarChart";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import ListIcon from "@mui/icons-material/List";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton, Tooltip } from "@mui/material";

export const NavBar = () => {
  return (
    <div>
      <nav
        className={
          "z-20 flex shrink-0 grow-0 justify-around gap-2 border-t border-gray-400 p-1 shadow-lg backdrop-blur-lg fixed top-2/4 -translate-y-2/4 left-6 max-h-[80%] max-w-[52px] flex-col rounded-lg border"
        }
      >
        <Tooltip placement={"right"} title={"Profile"}>
          <IconButton aria-label={"Profile"} size={"large"}>
            <AccountCircleIcon
              className={"text-gray-300"}
              fontSize={"inherit"}
            />
          </IconButton>
        </Tooltip>

        <hr className={"dark:border-gray-400/60"} />
        <div
          className={
            "overflow-y-scroll overflow-x-hidden invisible-scrollbar ml-[-2px]"
          }
        >
          <Tooltip placement={"right"} title={"Add template"}>
            <IconButton aria-label={"Profile"} size={"large"}>
              <AddIcon className={"text-gray-300"} />
            </IconButton>
          </Tooltip>

          <Tooltip placement={"right"} title={"Finances"}>
            <IconButton aria-label={"Profile"} size={"large"}>
              <BarChartIcon className={"text-gray-300"} />
            </IconButton>
          </Tooltip>

          <Tooltip placement={"right"} title={"Health"}>
            <IconButton aria-label={"Profile"} size={"large"}>
              <FitnessCenterIcon className={"text-gray-300"} />
            </IconButton>
          </Tooltip>

          <Tooltip placement={"right"} title={"Tasks"}>
            <IconButton aria-label={"Profile"} size={"large"}>
              <ListIcon className={"text-gray-300"} />
            </IconButton>
          </Tooltip>

          <Tooltip placement={"right"} title={"Habits"}>
            <IconButton aria-label={"Profile"} size={"large"}>
              <AutoAwesomeIcon className={"text-gray-300"} />
            </IconButton>
          </Tooltip>

          <Tooltip placement={"right"} title={"Tasks"}>
            <IconButton aria-label={"Profile"} size={"large"}>
              <HowToRegIcon className={"text-gray-300"} />
            </IconButton>
          </Tooltip>
        </div>

        <hr className={"dark:border-gray-400/60"} />

        <Tooltip placement={"right"} title={"Log out"}>
          <IconButton aria-label={"Profile"} size={"large"}>
            <LogoutIcon className={"text-gray-300"} />
          </IconButton>
        </Tooltip>
      </nav>
    </div>
  );
};
