import React from "react";
import { storiesOf } from "@storybook/react";

import Tooltip from "./tooltip";

const style = {
  margin: "20px 60px",
  width: "200px",
};

const defaultTooltip = () => (
  <div style={style}>
    <Tooltip title={<span>tooltip title</span>}>
      <span style={{ margin: "10px" }}>默认 Tooltip</span>
    </Tooltip>
  </div>
);

const triggerTooltip = () => (
  <section>
    <div style={style}>
      <Tooltip title={<span>tooltip title</span>}>
        <span>hover Tooltip</span>
      </Tooltip>
    </div>
    <div style={style}>
      <Tooltip title={<span>tooltip title</span>} trigger="click">
        <span>click Tooltip</span>
      </Tooltip>
    </div>
  </section>
);

const placementTooltip = () => (
  <section>
    <div style={style}>
      <Tooltip title={<span>tooltip title</span>}>
        <span style={{ margin: "10px" }}>bottom placement Tooltip</span>
      </Tooltip>
    </div>
    <div style={style}>
      <Tooltip title={<span>tooltip title</span>} placement="top">
        <span style={{ margin: "10px" }}>top placement Tooltip</span>
      </Tooltip>
    </div>
    <div style={style}>
      <Tooltip title={<span>tooltip title</span>} placement="left">
        <span style={{ margin: "10px" }}>left placement Tooltip</span>
      </Tooltip>
    </div>
    <div style={style}>
      <Tooltip title={<span>tooltip title</span>} placement="right">
        <span style={{ margin: "10px" }}>right placement Tooltip</span>
      </Tooltip>
    </div>
  </section>
);

const timeDelayTooltip = () => (
  <section>
    <div style={style}>
      <Tooltip title={<span>tooltip title</span>} mouseEnterDelay={1000}>
        <span style={{ margin: "10px" }}>延迟出现 Tooltip</span>
      </Tooltip>
    </div>
    <div style={style}>
      <Tooltip title={<span>tooltip title</span>} mouseLeaveDelay={1000}>
        <span style={{ margin: "10px" }}>延迟消失 Tooltip</span>
      </Tooltip>
    </div>
  </section>
);
const themeTooltip = () => (
  <section>
    <div style={style}>
      <Tooltip title={<span>tooltip title</span>} theme="dark">
        <span style={{ margin: "10px" }}>深色 Tooltip</span>
      </Tooltip>
    </div>

    <div style={style}>
      <Tooltip title={<span>tooltip title</span>} theme="light">
        <span style={{ margin: "10px" }}>浅色 Tooltip</span>
      </Tooltip>
    </div>
  </section>
);
storiesOf("Tooltip Component", module)
  .add("Tooltip", defaultTooltip)
  .add("不同触发方式的Tooltip", triggerTooltip)
  .add("不同位置的Tooltip", placementTooltip)
  .add("自定义延迟的Tooltip", timeDelayTooltip)
  .add("不同主题的Tooltip", themeTooltip);
