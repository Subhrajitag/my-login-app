import React from "react";

const Email = (props) => {
  return (
    <div>
      <div>
        Email or Phone <br />
        <input
          type="text"
          placeholder="Already Given "
          className="relative
                w-full
                 px-3
                  py-2
                   rounded-md
                    border border-slate-400"
                    value={props.data.email}
          readOnly
        />
      </div>
    </div>
  );
};

export default Email;
