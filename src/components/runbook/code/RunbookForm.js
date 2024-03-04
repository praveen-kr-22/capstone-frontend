import { useState } from "react";
import { useNavigation, redirect } from "react-router-dom";
import classes from "../css/RunbookForm.module.css";
import { getAuthToken } from "../../../util/Auth";

export default function RunbookForm() {
  const navigation = useNavigation();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [submittedData, setSubmittedData] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const isSubmitting = navigation.state === "submitting";

  const handleSelectChange = (event) => {
    const selectedValues = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectedOptions(selectedValues);
  };

  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "") {
      setSelectedFilters([]);
      setSubmittedData(null);
    } else {
      if (selectedFilters.includes(selectedValue)) {
        setSelectedFilters(
          selectedFilters.filter((filter) => filter !== selectedValue)
        );
      } else {
        setSelectedFilters([...selectedFilters, selectedValue]);
      }
    }
  };

  const handleSubmit = () => {
    const jsonData = {
      input: "new finding",
      task: {
        filter: selectedFilters.map((filter) => {
          if (filter === "tool") {
            return {
              type: "toolName",
              values: Array.from(
                document.querySelectorAll("#tool option:checked"),
                (option) => option.value
              ),
            };
          } else if (filter === "security") {
            return {
              type: "securityLevel",
              values: Array.from(
                document.querySelectorAll("#security option:checked"),
                (option) => option.value
              ),
            };
          } else if (filter === "product") {
            return {
              type: "productName",
              values: Array.from(
                document.querySelectorAll("#product option:checked"),
                (option) => option.value
              ),
            };
          }
        }),
        action: ["Create new jira ticket"],
      },
    };

    const taskString = JSON.stringify(jsonData.task);

    const Data = {
      input: jsonData.input,
      task: taskString,
    };

    const token = getAuthToken();
    if (!token) {
      return redirect("login");
    }

    const url = "http://127.0.0.1:8082/api/runbook";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(Data),
    })
      .then((response) => response.json())
      .then((data) => {
        setSelectedFilters([]);
        setMessage("Runbook successfully Created");
        console.log("Response from server:", data);
      })
      .catch((error) => {
        setError("Error while creating a runboook");
        // console.error("Error while creating a runboook", error);
      });
  };

  return (
    <div className={classes.formContainer}>
      {message && <h3 className={classes.message}>{message}</h3>}
      {error && <h3 className={classes.error}>{error}</h3>}
      <label>Trigger</label>
      <select>
        <option value="new finding">New Findings</option>
      </select>
      <div className={classes.filter}>
        <label>Filter On</label>
        <select onChange={handleFilterChange} value={selectedFilters} multiple>
          <option value="">None</option>
          <option value="tool">Tool Name</option>
          <option value="security">Security Level</option>
          <option value="product">Product Name</option>
        </select>
        {selectedFilters.includes("tool") && (
          <select multiple id="tool">
            <option value="">None</option>
            <option value="dependabot">Dependabot</option>
            <option value="code scan">Code Scan</option>
            <option value="secret scan">Secret Scan</option>
          </select>
        )}
        {selectedFilters.includes("security") && (
          <select multiple id="security">
            <option value="">None</option>
            <option value="Critical">Critical</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
            <option value="Info">Info</option>
            <option value="False Positive">False Positive</option>
          </select>
        )}
        {selectedFilters.includes("product") && (
          <select multiple id="product">
            <option value="">None</option>
            <option value="Demo App">Demo App</option>
            <option value="Demo App 1">Demo App 1</option>
            <option value="Demo App 2">Demo App 2</option>
          </select>
        )}
      </div>

      <label>Action</label>
      <select>
        <option value="create jira ticket">Create Jira Ticket</option>
      </select>
      <div className={classes.btn}>
        <button disabled={isSubmitting} onClick={handleSubmit}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
}
