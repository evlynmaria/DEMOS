import {NgModule} from "@angular/core";
import {CatYearsPipe} from "./cat-years.pipe";
import {CatDetailComponent} from "./cat-detail.component";
import {FormsModule} from "@angular/forms";
import {CatService} from "./cat.service";
import {CatsComponent} from "./cats.component";
import {CatListComponent} from "./cat-list.component";
import {CatRoutingModule} from "./cat-routing.module";
import {CommonModule} from "@angular/common";
import {CatFormComponent} from "./cat-form.component";
import {HttpModule} from "@angular/http";
@NgModule({
	imports: [CommonModule, FormsModule, HttpModule, CatRoutingModule],
	declarations: [CatDetailComponent, CatYearsPipe, CatsComponent, CatListComponent, CatFormComponent],
	providers: [CatService]
})
export class CatModule {}
