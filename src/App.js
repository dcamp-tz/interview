/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import "./App.css";

import Editor from "react-simple-code-editor";
import { highlight, languages } from "./prism.js";
import "./prism.css"; //Example style, you can use another

function App() {
  const [name, setName] = useState("Name");
  const [data, setData] = useState({ name: "Name" });

  const UpdateData = (key, value) => {
    let tmpData = data;
    tmpData[key] = value;
    setData(tmpData);
  };

  const UpdateName = (newName) => {
    setName(newName);
    UpdateData("name", newName);
  };

  const DownloadData = () => {
    console.log(JSON.stringify(data));

    fetch(
      "https://script.google.com/macros/s/AKfycbylfREtYYpmCjnkC5_kHg4yj2tTNo_mmSf3b6ZwzTQOvgaebmlGoUVkaBfZAzB0mnWwmw/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify(data),
      }
    );
  };

  return (
    <div className="App">
      <div className="App-header">
        <div className="App-header-title">Technical Interview:</div>
        <input
          className="App-header-input"
          value={name}
          onChange={(e) => {
            UpdateName(e.target.value);
          }}
        />
        <button className="App-save-button" onClick={DownloadData}>
          ⇩
        </button>
      </div>
      <div className="App-body">
        <div className="App-spacer"> 1 </div>
        <div className="App-question">
          Using the #define statement, how would you declare a constant that
          returns the number of seconds in a year? Disregard leap years/seconds
          in your answer.
        </div>
        <SingleLineEditor
          updateParentData={UpdateData}
          startVal={""}
          dataKey="q1"
        />

        <div className="App-spacer"> 2 </div>
        <div className="App-question">
          Write a code fragment that implements an infinite loop in C.
        </div>
        <MultiLineEditor
          updateParentData={UpdateData}
          startVal={""}
          dataKey="q2"
        />

        <div className="App-spacer"> 3 </div>
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

        <div className="App-spacer"> 4 </div>
        <div className="App-question">
          What are the uses of the keyword 'static' in C?
        </div>

        <div className="App-spacer"> 5 </div>
        <div className="App-question">
          What are the uses of the keyword 'const' in C?
        </div>

        <div className="App-spacer"> 6 </div>
        <div className="App-question">
          What are the uses of the keyword 'volatile' in C?
        </div>

        <div className="App-spacer"> 7 </div>
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

        <div className="App-spacer"> 8 </div>
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

        <div className="App-spacer"> 9 </div>
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
            '__interrupt__ double compute_area(double radius)\n{\n   double area = PI * radius * radius;\n   printf("\\nArea = %f", area);\n   return area;\n}'
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
        <div className="App-spacer"> </div>
      </div>
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
    <Editor
      className="App-answer-single"
      value={code}
      onValueChange={(code) => updateCode(code)}
      highlight={(code) => highlight(code, languages.arduino)}
      padding={10}
      ignoreTabKey={true}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12,
      }}
    />
  );
}

function MultiLineEditor({ updateParentData, dataKey, startVal }) {
  const [code, setCode] = useState(startVal);

  const updateCode = (newCode) => {
    setCode(newCode);
    updateParentData(dataKey, newCode);
  };

  useEffect(function initialUpdate() {
    updateCode(startVal);
  }, []);

  return (
    <Editor
      className="App-answer-multi"
      value={code}
      onValueChange={(code) => updateCode(code)}
      highlight={(text) => highlight(text, languages.arduino)}
      padding={10}
      ignoreTabKey={true}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12,
      }}
    />
  );
}

export default App;
