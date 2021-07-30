import React, { useState, Fragment } from "react";
import { Link, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../action/userSlice";
import FetchShow from "./FetchShow";
import { useSelector } from "react-redux";
import { selectUser } from "../action/userSlice";
import axios from "axios";
import "./FetchApi.css";

const FetchApi = () => {
  const [entry, setEntry] = useState([]);
  const dispatch = useDispatch();
  const fetchHandler = (event) => {
    axios
      .get("https://api.publicapis.org/entries")
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        const transformEntries = data.entries.map((apiData) => {
          return {
            api: apiData.API,
            description: apiData.Description,
            cors: apiData.Cors,
          };
        });
        setEntry(transformEntries);
      });
    dispatch(
      login({
        entry: entry,
      })
    );
  };
  const user = useSelector(selectUser);
  return (
    <Fragment>
      {!user && (
        <div className="center">
          <button onClick={fetchHandler}>
            <Link to="/fetch">Fetch Data</Link>
          </button>
        </div>
      )}
      <div>
        <Route path="/fetch">
          <FetchShow entries={entry} />
        </Route>
      </div>
    </Fragment>
  );
};

export default FetchApi;
