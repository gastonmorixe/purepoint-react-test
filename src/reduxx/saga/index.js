import { spawn } from "redux-saga/effects"

import search from "./search"

export default function* main() {
  yield spawn(search)
}
