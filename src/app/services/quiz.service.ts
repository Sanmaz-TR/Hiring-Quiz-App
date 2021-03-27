import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ASPNET } from '../../data/aspnet';
import { JAVASCRIPT } from '../../data/javascript';
import { CSHARP } from '../../data/csharp';

@Injectable()
export class QuizService {
  constructor(private http: HttpClient) {}

  get(type: string): any {
    let data: any;
    switch (type) {
      case "javascript":
        return JAVASCRIPT;
      case "aspnet":
        return ASPNET;
      case "csharp":
        return CSHARP;
      }
  }

  getAll() {
    return [
      { id: "javascript", name: "JavaScript" },
      { id: "aspnet", name: "Asp.Net" },
      { id: "csharp", name: "C Sharp" },
    ];
  }
}
