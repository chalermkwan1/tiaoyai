import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'tiaoyai';
  order: Observable<number>;

  constructor(public db: AngularFireDatabase) {}

  plus() {
    this.db.list(this.order).valueChanges()
    .subscribe()
  }

}


