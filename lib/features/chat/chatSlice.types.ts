import { FetchStatus } from "@/lib/enums/fetchStatus.enum";

export interface FetchStatusState {
  status: FetchStatus;
  message?: string;
}
