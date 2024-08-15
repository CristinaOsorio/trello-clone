export interface Task {
  title: string;
  description: string;
}

export interface Board extends Column {
  tasks: Task[];
}

export interface Column {
  id: string;
  title: string;
}
