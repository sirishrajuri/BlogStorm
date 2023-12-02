import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environment/environment';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { TrendingItemComponent } from './components/trending-item/trending-item.component';
import { FilmItemComponent } from './components/film-item/film-item.component';
import { BookmarkedComponent } from './pages/bookmarked/bookmarked.component';
import { HomeSvgComponent } from './components/svg/home-svg/home-svg.component';
import { blogsSvgComponent } from './components/svg/blogs-svg/blogs-svg.component';
import { BookmarkedSvgComponent } from './components/svg/bookmarked-svg/bookmarked-svg.component';
import { ProgressIndicatorComponent } from './pages/progressIndicatorComponent/progress-indicator.component';
import { EnterKeywordComponent } from './components/enter-keyword/enter-keyword.component';
import { ChooseQuestionsComponent } from './components/choose-questions/choose-questions.component';
import { ChooseArticleSettingsComponent } from './components/choose-article-settings/choose-article-settings.component';
import { ChooseContentSettingsComponent } from './components/choose-content-settings/choose-content-settings.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsSvgComponent } from './components/svg/settings-svg/settings-svg.component';
import { CreditsComponent } from './pages/credits/credits.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { ModesComponent } from './pages/modes/modes.component';
import { ModesSvgComponent } from './components/svg/modes-svg/modes-svg.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    HomeComponent,
    TrendingItemComponent,
    FilmItemComponent,
    BookmarkedComponent,
    HomeSvgComponent,
    blogsSvgComponent,
    BookmarkedSvgComponent,
    ProgressIndicatorComponent,
    EnterKeywordComponent,
    ChooseQuestionsComponent,
    ChooseArticleSettingsComponent,
    ChooseContentSettingsComponent,
    ProfileComponent,
    SettingsSvgComponent,
    CreditsComponent,
    SettingsComponent,
    BlogsComponent,
    ModesComponent,
    ModesSvgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
