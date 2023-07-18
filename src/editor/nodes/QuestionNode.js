import { Model } from "three";
import EditorNodeMixin from "./EditorNodeMixin";

export default class QuestionNode extends EditorNodeMixin(Model) {
  static componentName = "question";

  static nodeName = "Question";

  serialize() {
    return super.serialize({
      question: {}
    });
  }
}
