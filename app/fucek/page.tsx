"use client";

import React, { useState } from "react";

let a = {
  value: 0,
  foo: "asd",
  items: [1, 2, 3, 4],
  buyer: {
    name: "ime",
    age: 19,
  },
  t: "a",
};

export default function Form() {
  let [obj, setObj] = useState<{ [key: string]: any }>({ ...a });

  return (
    <>
      <FormThing obj={obj} setState={setObj} />
      <button onClick={() => console.log(obj)}> Export </button>
    </>
  );
}

const FormThing = ({ obj, setState }) => {
  if (typeof obj === "object") {
    let keys = [];
    if (Array.isArray(obj)) {
      keys = obj.map((_, i) => i);
    } else {
      keys = Object.keys(obj);
    }

    return (
      <div style={{ marginLeft: 20 }}>
        <code>{JSON.stringify(obj)}</code>
        {Array.isArray(obj) && (
          <>
            <br />
            <button onClick={() => setState([...obj, obj.at(-1) || ""])}>Add</button>
            <button onClick={() => setState(obj.slice(0, -1))}>Remove</button>
          </>
        )}

        {keys.map((key, index) => (
          <div key={index}>
            <h2 style={{ display: "inline-block", marginRight: "12px" }}>{key}</h2>
            <FormThing
              obj={obj[key]}
              setState={(value) => {
                const tmp = JSON.parse(JSON.stringify(obj));
                tmp[key] = value;
                setState(tmp);
              }}
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <input
      style={{ display: "inline" }}
      value={obj}
      onChange={(e) => {
        setState(typeof obj === "number" ? Number(e.target.value) : e.target.value);
      }}
    />
  );
};
