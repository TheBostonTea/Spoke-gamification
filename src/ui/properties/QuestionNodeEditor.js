import React from "react";
import NodeEditor from "./NodeEditor";
import { QuestionMark } from "styled-icons/boxicons-regular";

function QuestionNodeEditor(props) {
  return <NodeEditor {...props} description={QuestionNodeEditor.description} />;
}

QuestionNodeEditor.iconComponent = QuestionMark;

QuestionNodeEditor.description = "A question object.\nCurrently dummy";
