import { Schema } from "mongoose";
import { Option } from "../types/quiz/option";

const Option = new Schema<Option>({
  id: { type: Number, required: true },
  option: { type: String, required: true },
  isCorrect: Boolean,
  checked: Boolean,
});
export default Option;
