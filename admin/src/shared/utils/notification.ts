import { toast } from "react-toastify";

export const notifySuc = (text: string) => toast.success(text);
export const notifyErr = (text: string) => toast.error(text);
export const notifyWarn = (text: string) => toast.warning(text);
export const notifyInfo = (text: string) => toast.info(text);
