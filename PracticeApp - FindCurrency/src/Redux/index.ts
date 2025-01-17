import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

export * from "./store";
export * as actionCreators from "./action-creators";

export const useAppDispatch : () => AppDispatch = useDispatch;
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;