export interface TodoInterface {
  id: string;
  title: string;
  state?: string;
}

export interface TodoInterfaceProp {
  args: { todo: { id: string; title: string; state: string; updatedAt: Date } };
  todo: TodoInterface;
  onArchiveTodo: boolean;
  onPinTodo: boolean;
}
