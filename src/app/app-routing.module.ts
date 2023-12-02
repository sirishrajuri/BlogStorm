import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { ModesComponent } from './pages/modes/modes.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { BookmarkedComponent } from './pages/bookmarked/bookmarked.component';
import { authGuard } from './guard/auth.guard';
import { ProgressIndicatorComponent } from './pages/progressIndicatorComponent/progress-indicator.component';
import { EnterKeywordComponent } from './components/enter-keyword/enter-keyword.component';
import { ChooseQuestionsComponent } from './components/choose-questions/choose-questions.component';
import { ChooseArticleSettingsComponent } from './components/choose-article-settings/choose-article-settings.component';
import { ChooseContentSettingsComponent } from './components/choose-content-settings/choose-content-settings.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CreditsComponent } from './pages/credits/credits.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'', canActivate:[authGuard], component:HomeComponent},
  {path:'modes',canActivate:[authGuard], component:ModesComponent},
  {path:'modes/paa',canActivate:[authGuard], component:ProgressIndicatorComponent},
  {path:'blogs',canActivate:[authGuard], component:BlogsComponent},
  {path:'bookmarked',canActivate:[authGuard], component:BookmarkedComponent},
  { path: 'modes/paa/enter-keyword', component: EnterKeywordComponent },
  { path: 'modes/paa/choose-questions', component: ChooseQuestionsComponent },
  { path: 'modes/paa/choose-article-settings', component: ChooseArticleSettingsComponent },
  { path: 'modes/paa/choose-content-settings', component: ChooseContentSettingsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'credits', component: CreditsComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
