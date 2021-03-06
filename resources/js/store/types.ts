export interface RootState {
    version: string;
}

export interface MessageState {
    success: Message["success"];
    warning: Message["warning"];
    error: Message["error"];
}

export interface Message {
    success: string;
    warning: string;
    error: string;
}

export interface LayoutState {
    loading: Layout["loading"];
    code: Layout["code"];
    halls: Layout["halls"];
    hallLayout: Layout["hallLayout"];
    seats: Layout["seats"];
    seatGroups: Layout["seatGroups"];
    hallId: Layout["hallId"];
    layoutId: Layout["layoutId"];
    editSeats: Layout["editSeats"];
    editSeatGroups: Layout["editSeatGroups"];
    success: Layout["success"];
    warning: Layout["warning"];
    error: Layout["error"];
}
// TODO: set type
export interface Layout {
    loading: boolean;
    code: string;
    halls: any[];
    hallLayout: any[];
    seats: any[];
    seatGroups: any[];
    hallId: number;
    layoutId: number;
    editSeats: any[];
    editSeatGroups: any[];
    success: string;
    warning: string;
    error: string;
}


export interface GroupsState {
  loading: Groups["loading"];
  code: Groups["code"];
  date: Groups["date"];
  groups: Groups["groups"];
  groupId: Groups["groupId"];
  seats: Groups["seats"];
  seatGroups: Groups["seatGroups"];
  success: Groups["success"];
  warning: Groups["warning"];
  error: Groups["error"];
}

export interface Groups {
  loading: boolean;
  code: string;
  date: string;
  groups: any[];
  groupId: number;
  seats: any[];
  seatGroups: any[];
  success: string;
  warning: string;
  error: string;
}
