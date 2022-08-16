import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@mui/material";
import styles from "./CountryPicker.module.css";
import { fetchCountrysAPI } from "../../api";
import { v4 as uuidv4 } from "uuid";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchCountrys, setfetchCountrys] = useState([]);
  useEffect(() => {
    const fetchsCountrys = async () => {
      setfetchCountrys(await fetchCountrysAPI());
    };
    fetchsCountrys();
  }, [setfetchCountrys]);
  return [
    <FormControl key={uuidv4()} className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="global">Global</option>
        {fetchCountrys.map((country) => (
          <option value={country} key={uuidv4()}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>,
  ];
};

export default CountryPicker;
