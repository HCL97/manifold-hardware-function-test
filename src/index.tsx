import React from "react";
import { createRoot } from "react-dom/client";
import "pikaday/css/pikaday.css";
import "./styles.css";
import { HotTable, HotColumn } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";

import { data1 } from "./data2/manifold-hardware-function-test-data1";
import { data2 } from "./data2/manifold-hardware-function-test-data2";
// import { ProgressBarRenderer } from "./renderers/ProgressBar";
// import { StarsRenderer } from "./renderers/Stars";

// import {
//   drawCheckboxInRowHeaders,
//   addClassesToRows,
//   changeCheckboxCell,
//   alignHeaders
// } from "./hooksCallbacks";

import "handsontable/dist/handsontable.min.css";

// register Handsontable's modules
registerAllModules();

const App1 = () => {
  return (
    <HotTable
      data={data1}
      height="auto"
      width="auto"
      colWidths={[600, 100, 100]}
      colHeaders={false}
      rowHeaders={false}
      licenseKey="non-commercial-and-evaluation"
    >
      <HotColumn data={0} readOnly={true} />
      <HotColumn data={1} />
      <HotColumn data={2} />
    </HotTable>
  );
};

const App2 = () => {
  return (
    <HotTable
      data={data2}
      height="auto"
      width="auto"
      // colWidths={[140, 126, 192, 100, 100, 90, 90, 110, 97, 200, 97, 110, 97]}
      autoColumnSize={true}
      colHeaders={true}
      rowHeaders={true}
      nestedHeaders={[
        // ["", { label: "B", colspan: 8 }, "C"],
        [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          { label: "1. 外觀檢驗", colspan: 3 },
          { label: "2. 功能/性能檢驗", colspan: 5 }
        ],
        [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "Result",
          "",
          "Fail處理方式",
          "",
          "",
          "",
          "1.1 外觀與檢驗方法一致且無損傷",
          "1.2 標籤內容符合檢驗方法",
          "1.3 配件無短少",
          "2.1 可正常作動",
          "2.2 input(open) flow",
          "2.3 input(close) flow",
          "2.4 膈膜與過濾器無黑色細屑",
          "2.5 真空計數值"
        ],
        [
          "Test Date",
          "檢測類別",
          "供應商",
          "進貨數量",
          "批號",
          "SN/量測序號",
          "廠商更換/維修次數",
          "Inspector",
          "檢測平台",
          "Pass/Fail/Conditional Approval",
          "Fail原因",
          "重工/更換/特採/報廢",
          "重工方法",
          "Remark",
          "Pass/Fail",
          "Pass/Fail",
          "Pass/Fail",
          "Pass/Fail",
          "≧ 15L/m",
          "≦ 0.2L/m",
          "Pass/Fail",
          "Pass/Fail"
        ]
      ]}
      collapsibleColumns={[
        // { row: -4, col: 1, collapsible: true },
        { row: -3, col: 1, collapsible: true },
        { row: -2, col: 1, collapsible: true },
        { row: -2, col: 3, collapsible: true }
      ]}
      hiddenColumns={true}
      dropdownMenu={true}
      // hiddenColumns={{
      //   indicators: true
      // }}
      contextMenu={true}
      multiColumnSorting={true}
      filters={true}
      // afterGetColHeader={alignHeaders}
      // beforeRenderer={addClassesToRows}
      // afterGetRowHeader={drawCheckboxInRowHeaders}
      // afterOnCellMouseDown={changeCheckboxCell}
      // manualRowMove={true}
      stretchH="all"
      className="custom-table"
      licenseKey="non-commercial-and-evaluation"
    >
      <HotColumn
        data={0}
        type="date"
        correctFormat={true}
        dateFormat="YYYY/MM/DD"
        className="htCenter"
      />
      <HotColumn data={1} className="htCenter" />
      <HotColumn data={2} className="htCenter" />
      {/* <HotColumn data={4} type="date" allowInvalid={false} /> */}
      <HotColumn data={3} className="htCenter" />
      {/* <HotColumn data={6} type="checkbox" className="htCenter" />
      <HotColumn data={7} type="numeric" /> */}
      <HotColumn data={4} className="htCenter" />
      <HotColumn data={5} className="htCenter" />
      <HotColumn data={6} className="htCenter" />
      <HotColumn data={7} className="htCenter" />
      <HotColumn data={8} className="htCenter" />
      {/* <HotColumn data={9} type="checkbox" className="htCenter" /> */}
      <HotColumn data={9} className="htCenter" />
      <HotColumn data={10} className="htCenter" />
      <HotColumn data={11} className="htCenter" />
      <HotColumn data={12} className="htCenter" />
      <HotColumn data={13} className="htCenter" />
      <HotColumn data={14} type="checkbox" className="htCenter" />
      <HotColumn data={15} type="checkbox" className="htCenter" />
      <HotColumn data={16} type="checkbox" className="htCenter" />
      <HotColumn data={17} type="checkbox" className="htCenter" />
      <HotColumn data={18} className="htCenter" />
      <HotColumn data={19} className="htCenter" />
      <HotColumn data={20} type="checkbox" className="htCenter" />
      <HotColumn data={21} type="checkbox" className="htCenter" />
    </HotTable>
  );
};

const container1 = document.getElementById("container1");
const root1 = createRoot(container1);

root1.render(<App1 />);

const container2 = document.getElementById("container2");
const root2 = createRoot(container2);

root2.render(<App2 />);

// const container3 = document.getElementById("container3");
// const root3 = createRoot(container3);

// root3.render(<App3 />);
