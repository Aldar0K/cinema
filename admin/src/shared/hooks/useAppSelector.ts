import { StateSchema } from "@/app/providers/store-provider";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector;
