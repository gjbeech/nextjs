export interface ResponseFuncs {
  GET?: Function;
  POST?: Function;
  PUT?: Function;
  DELETE?: Function;
  OPTIONS?: Function;
}

export interface ListItem {
  _id?: number;
  item: string;
  completed: boolean;
}

export interface List {
  _id?: number;
  title: string;
  type: string;
  // created: Date;
}

export interface Tag {
  _id?: number;
  name: string;
  colour: string;
}
