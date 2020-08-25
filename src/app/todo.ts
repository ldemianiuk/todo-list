export class Todo {
    title: string;
    priority: number;
}

export function newTodo(newTitle: string): Todo {
    let p = 0;
    for (; p < newTitle.length && newTitle.charAt(p) == '+'; p++);
    return {title: newTitle.substring(p), priority: p};
}
