import { NewEmployeeComponent } from './employee/new-employee/new-employee.component';
import { SpecificationComponent } from './product/specification/specification.component';
import { ProductComponent } from './product/product.component';
import { LoginGaurdService } from './services/login-gaurd.service';
import { UserComponent } from './users/user.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { OverviewComponent } from './product/overview/overview.component';

export const APP_ROUTES: Routes = [
    {
        path: "",
        redirectTo: "/login",
        pathMatch: "full"
    }, {
        path: "login",
        component: LoginComponent
    }, {
        path: "pipe",
        component: PipeDemoComponent
    }, {
        path: "register",
        component: RegisterComponent
    }, {
        path: "observable",
        component: ObservableDemoComponent
    }, {
        path : "product/:id",
        component : ProductComponent,
        children : [{
            path : "overview/:id/:name",
            component : OverviewComponent
        }, {
            path : "spec",
            component : SpecificationComponent
        }]
    },{
        path : "lazy",
        loadChildren : './lazy/lazy.module#LazyModule'
    },{
        path : "employee",
        component : NewEmployeeComponent
    },{
        path: "users",
        component: UserComponent,
        canActivate : [LoginGaurdService]
    },{
        path : "**",
        redirectTo : "/login",
        pathMatch : "full"
    }]