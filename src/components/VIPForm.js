import React from "react";

const VIPForm = () => {

    return (
        <form className="col-6 VIPForm">
        <label>
            {" "}
            Name:
            <input type="text" name="name" />
        </label>
        <label>
            {" "}
            Email:
            <input type="text" name="email" />
        </label>
        <label>
            {" "}
            Phone:
            <input type="text" name="phone" />
        </label>
        <input type="submit" value="Submit" />
        </form>
    );
    }


export default VIPForm;