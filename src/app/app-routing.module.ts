import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { QueueComponent } from './queue/queue.component';
import { ScanComponent } from './scan/scan.component';
import { TotalComponent } from './total/total.component';


const routes: Routes = [
  { path: 'menu' , component: MenuComponent},
  { path: 'queue' , component: QueueComponent},
  { path: 'scan' , component: ScanComponent},
  { path: 'total' , component: TotalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [ MenuComponent , QueueComponent , ScanComponent , TotalComponent ]
