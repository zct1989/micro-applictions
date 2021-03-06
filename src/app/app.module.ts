import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NZ_I18N } from 'ng-zorro-antd/i18n'
import { zh_CN } from 'ng-zorro-antd/i18n'
import { registerLocaleData } from '@angular/common'
import zh from '@angular/common/locales/zh'
import { LayoutModule } from './layout/layout.module'
import { AppRoutingModule } from './app-routing.module'
import { SharedModule } from './shared/shared.module'
import { CoreModule } from './core/core.module'
import { App01Module } from 'projects/app01/src/app/app.module'

registerLocaleData(zh)

const applictions = [

]

@NgModule({
  declarations: [AppComponent],
  imports: [SharedModule, CoreModule.forRoot(), LayoutModule, AppRoutingModule, App01Module],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule {}
