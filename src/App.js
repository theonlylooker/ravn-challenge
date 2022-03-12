import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Project from "./pages/Project/Project";
import Calendar from "./pages/Calendar/Calendar";
import Reports from "./pages/Reports/Reports";
import Settings from "./pages/Settings/Settings";
import Task from "./pages/Task/Task";
import TimeManage from "./pages/TimeManage/TimeManage";
import SideBar from "./components/SideBar/SideBar";
import { makeStyles } from "@mui/styles";
import {
  ApolloProvider,
  gql,
  ApolloClient,
  useQuery,
  InMemoryCache,
} from "@apollo/client";
const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});
function App() {
  const classes = useStyles();
  const client = new ApolloClient({
    uri: "https://syn-api-prod.herokuapp.com/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className={classes.root}>
          <SideBar></SideBar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/task" element={<Task />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/manage" element={<TimeManage />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
