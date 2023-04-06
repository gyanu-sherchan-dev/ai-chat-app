import React from "react";
import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";
import CustomHeader from "@/components/customHeader/CustomHeader";

const projectId = "f95e2019-6679-4184-9aac-4772d389bc2e";
const username = "firstuser";
const secret = "42222";

const Chat = () => {
  const chatProps = useMultiChatLogic(projectId, username, secret);
  return (
    <div style={{ flexBasis: "100%" }}>
      <MultiChatWindow
        {...chatProps}
        style={{ height: "100vh" }}
        renderChatHeader={(chat) => <CustomHeader chat={chat} />}
      />
      <MultiChatSocket {...chatProps} />
    </div>
  );
};

export default Chat;
