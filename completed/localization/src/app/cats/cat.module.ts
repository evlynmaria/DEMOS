import {NgModule} from "@angular/core";
import {CatYearsPipe} from "./cat-years.pipe";
import {CatDetailComponent} from "./cat-detail.component";
import {FormsModule} from "@angular/forms";
import {CatsComponent} from "./cats.component";
import {CatRoutingModule} from "./cat-routing.module";
import {CommonModule} from "@angular/common";
import {CatFormComponent} from "./cat-form.component";
@NgModule({
	imports: [CommonModule, FormsModule, CatRoutingModule],
	declarations: [CatDetailComponent, CatYearsPipe, CatsComponent, CatFormComponent],
})
export class CatModule {}
