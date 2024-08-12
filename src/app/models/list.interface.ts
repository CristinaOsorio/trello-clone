export interface Task {
  title: string;
  description: string;
}

export interface Board {
  id: string;
  title: string;
  tasks: Task[];
}
