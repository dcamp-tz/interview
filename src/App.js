/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useState, useEffect, useCallback } from "react";
import "./App.css";

import Editor from "react-simple-code-editor";
import { highlight, languages } from "./prism.js";
import "./prism.css"; // Code gormatting style sheet

import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [name, setName] = useState("");
  const [data, setData] = useState({ name: "" });
  const toastID = useRef(null);

  //Prism.hooks.add('line-numbers', function (env) {
  //	env.plugins = env.plugins || {};
  //	env.plugins.lineNumbers = true;
  //});

  const UpdateData = (key, value) => {
    let tmpData = data;
    tmpData[key] = value;
    setData(tmpData);
  };

  const UpdateName = (newName) => {
    setName(newName);
    UpdateData("name", newName);
  };

  const SendData = useCallback(() => {
    toastID.current = toast.info("Sending Responses...", {
      position: "top-center",
      hideProgressBar: true,
      autoClose: 3000,
      theme: "colored",
      draggable: false,
      closeOnClick: false,
      pauseOnHover: true,
    });

    fetch(
      "https://script.google.com/macros/s/AKfycbzPBRm2doUe0G-ZIy4ETA7FLN2MwdIftev0JOpG61sbxKQxsH1X4KkHkkzPvxf-8V8fCg/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify(data),
      }
    )
      .then((data) => {
        console.log(data)
        toast.update(toastID.current, {
          type: toast.TYPE.SUCCESS,
          render: "Responses Saved!",
        });
      })
      .catch((error) => {
        console.error(error)
        toast.update(toastID.current, {
          type: toast.TYPE.ERROR,
          render: "Couldn't Save Responses!",
        });
      });
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <div className="App-header-title">Technical Interview for </div>
        <input
          className="App-header-input"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            UpdateName(e.target.value);
          }}
        />
      </div>
      <div className="App-body">
        <div className="App-spacer"> 01</div>
        <div className="App-question">
          Using the #define statement, how would you declare a constant that
          evaluates to the number of seconds in a year? Disregard leap
          years/seconds in your answer.
        </div>
        <SingleLineEditor
          updateParentData={UpdateData}
          startVal={""}
          dataKey="q1"
        />

        <div className="App-spacer"> 02 </div>
        <div className="App-question">
          Write a code fragment that implements an infinite loop in C.
        </div>
        <MultiLineEditor
          updateParentData={UpdateData}
          startVal={""}
          dataKey="q2"
        />

        <div className="App-spacer"> 03 </div>
        <div className="App-question">
          Using the variable 'var', give definitions for the following:
        </div>
        <div className="App-sub-question">A: A signed 32-bit integer.</div>
        <SingleLineEditor
          updateParentData={UpdateData}
          startVal={""}
          dataKey="q3a"
        />
        <div className="App-sub-question">B: An unsigned 16-bit integer.</div>
        <SingleLineEditor
          updateParentData={UpdateData}
          startVal={""}
          dataKey="q3b"
        />
        <div className="App-sub-question">C: A pointer to an integer.</div>
        <SingleLineEditor
          updateParentData={UpdateData}
          startVal={""}
          dataKey="q3c"
        />
        <div className="App-sub-question">
          D: A pointer to a pointer to an integer.
        </div>
        <SingleLineEditor
          updateParentData={UpdateData}
          startVal={""}
          dataKey="q3d"
        />
        <div className="App-sub-question">E: An array of 10 integers.</div>
        <SingleLineEditor
          updateParentData={UpdateData}
          startVal={""}
          dataKey="q3e"
        />
        <div className="App-sub-question">
          F: An array of 10 pointers to integers.
        </div>
        <SingleLineEditor
          updateParentData={UpdateData}
          startVal={""}
          dataKey="q3f"
        />
        <div className="App-sub-question">
          G: A pointer to an array of 10 integers.
        </div>
        <SingleLineEditor
          updateParentData={UpdateData}
          startVal={""}
          dataKey="q3g"
        />
        <div className="App-sub-question">
          H: A pointer to a function that takes an integer as its only argument
          and returns an integer
        </div>
        <SingleLineEditor
          updateParentData={UpdateData}
          startVal={""}
          dataKey="q3h"
        />

        <div className="App-spacer"> 04 </div>
        <div className="App-question">
          What are the uses of the keyword 'static' in C?
        </div>

        <div className="App-spacer"> 05 </div>
        <div className="App-question">
          What are the uses of the keyword 'const' in C?
        </div>

        <div className="App-spacer"> 06 </div>
        <div className="App-question">
          What are the uses of the keyword 'volatile' in C?
        </div>

        <div className="App-spacer"> 07 </div>
        <div className="App-question">
          What is wrong with the following C function?
        </div>
        <MultiLineEditor
          updateParentData={UpdateData}
          startVal={
            "int square(volatile int *ptr)\n{\n  return (*ptr) * (*ptr);\n}"
          }
          dataKey="q7"
        />

        <div className="App-spacer"> 08 </div>
        <div className="App-question">
          Given an integer variable 'foo', write a code fragment that:
        </div>
        <div className="App-sub-question">A: Sets bit 5 of foo.</div>
        <SingleLineEditor
          updateParentData={UpdateData}
          startVal={""}
          dataKey="q8a"
        />
        <div className="App-sub-question">B: Clears bit 4 of foo.</div>
        <SingleLineEditor
          updateParentData={UpdateData}
          startVal={""}
          dataKey="q8b"
        />

        <div className="App-spacer"> 09 </div>
        <div className="App-question">
          Sometimes it is necessary to access a specific memory location in an
          embedded system. Write a code fragment in C to set the value of an
          integer variable at absolute address 0xbeef to the value 0xdead.
        </div>
        <MultiLineEditor
          updateParentData={UpdateData}
          startVal={""}
          dataKey="q9"
        />

        <div className="App-spacer"> 10 </div>
        <div className="App-question">
          Interrupts are essential to embedded systems. To support this
          functionality in C, many compilers offer extension keywords such as
          __interrupt__ to define an interrupt service routine (ISR). Comment on
          the following code:
        </div>
        <MultiLineEditor
          updateParentData={UpdateData}
          startVal={
            '__interrupt__ double compute_area(double radius)\n{\n  double area = PI * radius * radius;\n  printf("\\nArea = %f", area);\n  return area;\n}'
          }
          dataKey="q10"
        />

        <div className="App-spacer"> 11 </div>
        <div className="App-question">
          Comment on the following code fragment:
        </div>
        <MultiLineEditor
          updateParentData={UpdateData}
          startVal={
            "unsigned int zero = 0;\nunsigned int compZero = 0xFFFF;  // 1's complement of zero"
          }
          dataKey="q11"
        />

        <div className="App-spacer"> 12 </div>
        <div className="App-question">
          Although not as common as in non-embedded systems, embedded systems
          still dynamically allocate memory from the heap. What are the
          challenges with dynamic memory allocation in embedded systems?
        </div>

        <div className="App-spacer"> </div>

        <button className="App-save-button" onClick={SendData}>
          Save
        </button>
        <div className="App-spacer"> </div>
      </div>
      <ToastContainer transition={Slide} />
    </div>
  );
}

function SingleLineEditor({ updateParentData, dataKey, startVal }) {
  const [code, setCode] = useState(startVal);

  const updateCode = (newCode) => {
    newCode = newCode.replaceAll("\n", "");
    newCode = newCode.replaceAll("\r", "");
    setCode(newCode);
    updateParentData(dataKey, newCode);
  };

  useEffect(function initialUpdate() {
    updateCode(startVal);
  }, []);

  return (
    <div className="App-split-text">
      <div
        className="App-answer-lines"
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 16,
        }}
      >
        1|
      </div>
      <Editor
        className="App-answer-single"
        value={code}
        onValueChange={(code) => updateCode(code)}
        highlight={(code) => highlight(code, languages.arduino)}
        padding={5}
        ignoreTabKey={false}
        tabSize={2}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 16,
        }}
      />
    </div>
  );
}

function MultiLineEditor({ updateParentData, dataKey, startVal }) {
  const [code, setCode] = useState(startVal);
  const [lineNumbers, setLineNumbers] = useState("1");

  const updateCode = (newCode) => {
    setCode(newCode);
    updateParentData(dataKey, newCode);

    let lineText = "";
    let lines = newCode.split("\n");

    for (let i = 1; i <= Math.max(lines.length, 2); i++) {
      lineText = lineText + `${i}|\r\n`;
    }

    if (startVal === "") {
      lineText = lineText + "..";
    }

    setLineNumbers(lineText);
  };

  useEffect(function initialUpdate() {
    updateCode(startVal);
  }, []);

  return (
    <div className="App-split-text">
      <div
        className="App-answer-lines"
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 16,
        }}
      >
        {lineNumbers}
      </div>
      <Editor
        className="App-answer-multi"
        value={code}
        onValueChange={(code) => updateCode(code)}
        highlight={(text) => highlight(text, languages.arduino)}
        padding={5}
        ignoreTabKey={false}
        tabSize={2}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 16,
        }}
      />
    </div>
  );
}

export default App;
