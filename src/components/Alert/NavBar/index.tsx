import AddIcon from "@mui/icons-material/Add";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import ListIcon from "@mui/icons-material/List";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LogoutIcon from "@mui/icons-material/Logout";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import BarChartIcon from "@mui/icons-material/BarChart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { IconButton, Tooltip } from "@mui/material";

export const NavBar = () => {
  return (
    <div>
      <nav className="z-20 flex shrink-0 grow-0 justify-around gap-2 border-t border-gray-400 p-1 shadow-lg backdrop-blur-lg fixed top-2/4 -translate-y-2/4 left-6 max-h-[80%] max-w-[52px] flex-col rounded-lg border">
        <Tooltip title="Profile" placement="right">
          <IconButton aria-label="Profile" size="large">
            <AccountCircleIcon className="text-gray-300" fontSize="inherit" />
          </IconButton>
        </Tooltip>

        <hr className="dark:border-gray-400/60" />
        <div className="overflow-y-scroll overflow-x-hidden invisible-scrollbar ml-[-2px]">
          <Tooltip title="Add template" placement="right">
            <IconButton aria-label="Profile" size="large">
              <AddIcon className="text-gray-300" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Finances" placement="right">
            <IconButton aria-label="Profile" size="large">
              <BarChartIcon className="text-gray-300" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Health" placement="right">
            <IconButton aria-label="Profile" size="large">
              <FitnessCenterIcon className="text-gray-300" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Tasks" placement="right">
            <IconButton aria-label="Profile" size="large">
              <ListIcon className="text-gray-300" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Habits" placement="right">
            <IconButton aria-label="Profile" size="large">
              <AutoAwesomeIcon className="text-gray-300" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Tasks" placement="right">
            <IconButton aria-label="Profile" size="large">
              <HowToRegIcon className="text-gray-300" />
            </IconButton>
          </Tooltip>
        </div>

        <hr className="dark:border-gray-400/60" />

        <Tooltip title="Log out" placement="right">
          <IconButton aria-label="Profile" size="large">
            <LogoutIcon className="text-gray-300" />
          </IconButton>
        </Tooltip>
      </nav>
    </div>
  );
};
