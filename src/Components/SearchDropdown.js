import React, { useState } from "react";
import Select from "react-select";

export default function SearchDropdown(props) {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [props.options];

  return (
    <div className="App">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
}