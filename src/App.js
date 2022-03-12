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
import { setContext } from "@apollo/client/link/context";
import {
  ApolloProvider,
  gql,
  ApolloClient,
  useQuery,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});
function App() {
  const classes = useStyles();
  const API_Token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwb3NpdGlvbklkIjoiOTNhNTk5YTFkMmQ4IiwicHJvamVjdElkIjoiNWRiYjVjYjgtYjI2ZS00ZTA5LThkZDctNDJjZjI4YTFjMjkyIiwiZnVsbE5hbWUiOiJFZHVhcmRvIFJvbGFuZG8gQmFzdXJjbyBDYXlsbGFodWEiLCJlbWFpbCI6ImViYXN1cmNvY0BnbWFpbC5jb20iLCJpYXQiOjE2NDY3NTU0Nzl9.RujsZ46Tymv_pickk1okimeSKf6SJOubkxhX1eYIb_0";
  const httpLink = createHttpLink({
    uri: "https://syn-api-prod.herokuapp.com/graphql",
  });
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${API_Token}`,
      },
    };
  });
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
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
