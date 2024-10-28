import { configureStore } from "@reduxjs/toolkit";
import { root_reducer } from "./";

export const store = configureStore({ reducer: root_reducer });
