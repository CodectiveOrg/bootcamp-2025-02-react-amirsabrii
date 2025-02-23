import { ReactNode } from "react";

import styles from "./Toolbar.module.css";
import TextInput from "../Text-input/Text-input.tsx";
import MingcuteSearch2Line from "../../icons/MingcuteSearch2Line.tsx";

import Select from "../Select/Select.tsx";
import Button from "../Button/button.tsx";
import SolarMoonBold from "../../icons/SolarMoonBold.tsx";

function Toolbar(): ReactNode {
  return (
    <div className={styles.toolbar}>
      <TextInput
        placeholder="Search Note..."
        suffixIcon={<MingcuteSearch2Line />}
      />

      <Select
        options={[
          { value: "all", label: "all" },
          { value: "work", label: "work" },
          { value: "frindly", label: "frindly" },
          { value: "family", label: "family" },
        ]}
      ></Select>
      <Button
        size="medium"
        variant="otlined"
        shape="circle"
        suffixIcon={<SolarMoonBold />}
      ></Button>
    </div>
  );
}

export default Toolbar;
