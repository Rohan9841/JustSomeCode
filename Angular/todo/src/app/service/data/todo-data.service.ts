import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveAllTodos(username: string){
    return this.http.get<Todo[]>(`http://localhost:8081/users/${username}/todos`)
  }

  deleteTodo(username:string, id:number){
    return this.http.delete<Todo>(`http://localhost:8081/users/${username}/todos/${id}`);
  }

  retrieveTodo(username:string, id: number){
    return this.http.get<Todo>(`http://localhost:8081/users/${username}/todos/${id}`);
  }
  updateTodo(username:string, id:number, todo: Todo){
    return this.http.put(`http://localhost:8081/users/${username}/todos/${id}`,todo);
  }

  addTodo(username:string, todo:Todo){
    return this.http.post(`http://localhost:8081/users/${username}/todos`,todo);
  }
}
