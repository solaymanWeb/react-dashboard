import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

const CountrySelector = () => {

    const [selected, setSelected] = useState("ES"); // Default to Spanish

    const onSelect = (code) => {
        setSelected(code);
        console.log("Selected country:", code);
    };

    const customLabels = {
        US: { secondary: "US" },
        ES: { secondary: "ES" },
    };


    const customBtn = "!border !border-[#919eab]"
    return (
        <div className="demo-wrapper h-[100%]">

            <ReactFlagsSelect
                selected={selected || "ES"} // Ensure a default value
                onSelect={onSelect}
                showSelectedLabel={true}
                showSecondarySelectedLabel={true}
                showOptionLabel={true}
                showSecondaryOptionLabel={true}
                customLabels={customLabels}
                countries={["US", "ES"]}
                searchable={false}
                selectButtonClassName={customBtn}
            />
        </div>
    );
};

export default CountrySelector;

