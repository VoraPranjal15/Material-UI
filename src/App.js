import "./App.css";
import { createTheme, colors, ThemeProvider } from "@mui/material";
// import { LocalizationProvider } from "@mui/lab";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import MuiCheckBox from "./Components/Inputs/MuiCheckBox";
// import { MuiTypography } from "./Components/Data Display/MuiTypography";
// import MuiButton from "./Components/Inputs/MuiButton";
// import MuiTextField from "./Components/Inputs/MuiTextField";
// import MuiSelect from "./Components/Inputs/MuiSelect";
// import MuiRadio from "./Components/Inputs/MuiRadio";
// import MuiSwitch from "./Components/Inputs/MuiSwitch";
// import MuiRating from "./Components/Inputs/MuiRating";
// import MuiAutoComplete from "./Components/Inputs/MuiAutoComplete";
// import MuiCard from "./Components/Surfaces/MuiCard";
// import MuiLayout from "./Components/Layouts/MuiLayout";
// import MuiAccordion from "./Components/Surfaces/MuiAccordion";
// import MuiImageList from "./Components/Layouts/MuiImageList";
// import MuiNavbar from "./Components/Navigation/MuiNavbar";
// import MuiLink from "./Components/Navigation/MuiLink";
// import MuiBreadcrumbs from "./Components/Navigation/MuiBreadcrumbs";
// import MuiDrawer from "./Components/Navigation/MuiDrawer";
// import MuiSpeedDial from "./Components/Navigation/MuiSpeedDial";
// import MuiBottomNavigation from "./Components/Navigation/MuiBottomNavigation";
// import MuiAvatar from "./Components/Data Display/MuiAvatar";
// import MuiBadge from "./Components/Data Display/MuiBadge";
// import MuiList from "./Components/Data Display/MuiList";
// import MuiChip from "./Components/Data Display/MuiChip";
// import MuiTooltip from "./Components/Data Display/MuiTooltip";
// import MuiTable from "./Components/Data Display/MuiTable";
// import MuiAlert from "./Components/Feedback/MuiAlert";
// import MuiSnackbar from "./Components/Feedback/MuiSnackbar";
// import MuiDialog from "./Components/Feedback/MuiDialog";
// import MuiProgress from "./Components/Feedback/MuiProgress";
// import MuiSkeleton from "./Components/Feedback/MuiSkeleton";
// import MuiLoadingButton from "./Components/Lab/MuiLoadingButton";
// import MuiDatePicker from "./Components/Lab/MuiDatePicker";
// import MuiTab from "./Components/Lab/MuiTab";
// import MuiTimeline from "./Components/Lab/MuiTimeline";
// import MuiMasonry from "./Components/Lab/MuiMasonry";
// import MuiResponsiveness from "./Components/MuiResponsiveness";
import MuiTheme from "./Components/MuiTheme";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    secondary: {
      main: colors.orange[500],
    },
    neutral:{
      main:colors.grey[500],
      darker:colors.grey[700]
    }
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* // <LocalizationProvider dataAdapter={AdapterDateFns}> */}
      <div className="App">
        {/* <MuiTypography /> */}
        {/* <MuiButton /> */}
        {/* <MuiTextField/> */}
        {/* <MuiSelect /> */}
        {/* <MuiRadio/> */}
        {/* <MuiCheckBox/> */}
        {/* <MuiSwitch/> */}
        {/* <MuiRating /> */}
        {/* <MuiAutoComplete />  */}
        {/* <MuiLayout /> */}
        {/* <MuiCard/> */}
        {/* <MuiAccordion/> */}
        {/* <MuiImageList /> */}
        {/* <MuiNavbar/> */}
        {/* <MuiLink/> */}
        {/* <MuiBreadcrumbs/> */}
        {/* <MuiDrawer/> */}
        {/* <MuiSpeedDial /> */}
        {/* <MuiBottomNavigation/> */}
        {/* <MuiAvatar/> */}
        {/* <MuiBadge/> */}
        {/* <MuiList/> */}
        {/* <MuiChip /> */}
        {/* <MuiTooltip/> */}
        {/* For complex table like sorting and performing other thing on table use react table package, this package also works well with material UI */}
        {/* <MuiTable /> */}
        {/* <MuiAlert/> */}
        {/* <MuiSnackbar/> */}
        {/* <MuiDialog/> */}
        {/* <MuiProgress/> */}
        {/* <MuiSkeleton/> */}
        {/* <MuiLoadingButton/> */}
        {/* <MuiDatePicker/> */}
        {/* <MuiTab/> */}
        {/* <MuiTimeline/> */}
        {/* <MuiMasonry/> */}
        {/* <MuiResponsiveness /> */}
        <MuiTheme />
      </div>
      {/* // </LocalizationProvider> */}
    </ThemeProvider>
  );
}

export default App;
