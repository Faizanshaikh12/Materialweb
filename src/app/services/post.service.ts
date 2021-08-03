import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Posts} from '../models/posts';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  getPost(): Observable<Posts[]> {
    return this.http.get<Posts[]>(`https://authangular-07-default-rtdb.firebaseio.com/posts.json`).pipe(
      map((data) => {
        const posts: Posts[] = [];
        for (let key in data) {
          posts.push({...data[key], id: key});
        }
        return posts;
      })
    );
  }

  addPost(posts: Posts): Observable<{ name: string }> {
    return this.http.post<{ name: string }>(`https://authangular-07-default-rtdb.firebaseio.com/posts.json`, posts);
  }

  updatePost(posts: Posts): Observable<{ name: string }> {
    const postData = {[posts.id]: {title: posts.title, description: posts.description}};
    return this.http.patch<{ name: string }>(`https://authangular-07-default-rtdb.firebaseio.com/posts.json`, posts);
  }

  deletePost(id: string) {
    return this.http.delete(`https://authangular-07-default-rtdb.firebaseio.com/posts/${id}.json`);
  }

}
