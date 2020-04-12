import React from "react";
import { storiesOf } from "@storybook/react";

import Modal from "./modal";
import Button from "./../Button";
import { action } from "@storybook/addon-actions";

import { useState } from "@storybook/addons";

const title = <div>这是个标题</div>;

const DefaultModal = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button
        onClick={(e) => {
          e.stopPropagation();
          setVisible(true);
        }}
      >
        显示Modal
      </Button>
      <Modal
        visible={visible}
        onCancel={() => {
          action("点击了取消");
          setVisible(false);
        }}
      >
        <div>显示的内容</div>
      </Modal>
    </>
  );
};

const TitleContentModal = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button
        onClick={(e) => {
          e.stopPropagation();
          setVisible(true);
        }}
      >
        显示Title-Content-Footer
      </Button>
      <Modal
        title={title}
        visible={visible}
        okText="确认"
        cancelText="取消"
        onCancel={() => {
          action("点击了取消");
          setVisible(false);
        }}
        onOk={() => {
          action("点击了确认");
          setVisible(false);
        }}
      >
        <div>显示的内容</div>
      </Modal>
    </>
  );
};

storiesOf("Modal Component", module)
  .add("defaultModal", DefaultModal)
  .add("有titile,content,button的modal", TitleContentModal);