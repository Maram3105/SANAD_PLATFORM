import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PendingComponent } from './auth/pending/pending.component';
import { RejectedComponent } from './auth/rejected/rejected.component';
import { DashboardComponent } from './auth/dashboard/dashboard.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { AssociationsComponent } from './associations/associations.component';
import { RequestDetailComponent } from './request-detail/request-detail.component';
import { AssociationDetailComponent } from './association-detail/association-detail.component';
import { DonationHistoryComponent } from './dashboard/donation-history.component';
import { UserProfileComponent } from './user/profile/user-profile.component';
import { MyRequestsComponent } from './user/my-requests/my-requests.component';
import { MyDonationsComponent } from './user/my-donations/my-donations.component';
import { NotificationsComponent } from './user/notifications/notifications.component';
import { PublishRequestComponent } from './user/publish-request/publish-request.component';
import { DonateComponent } from './user/donate/donate.component';
import { SavedRequestsComponent } from './user/saved-requests/saved-requests.component';
import { ActivityHistoryComponent } from './user/activity-history/activity-history.component';
import { authGuard } from './auth/auth.guard';
import { roleGuard } from './auth/role.guard';
import { guestGuard } from './auth/guest.guard';

export const routes: Routes = [
	{ path: '', pathMatch: 'full', component: HomeComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'explorer', component: ExplorerComponent },
	{ path: 'request-detail', component: RequestDetailComponent },
	{ path: 'request-detail/:id', component: RequestDetailComponent },
	{ path: 'associations', component: AssociationsComponent },
	{ path: 'free-donations', loadComponent: () => import('./free-donations/free-donations.component').then(m => m.FreeDonationsComponent) },
	{ path: 'association-detail', component: AssociationDetailComponent },
	{ path: 'association-detail/:id', component: AssociationDetailComponent },
	{ 
		path: 'auth/login', 
		component: LoginComponent,
		canActivate: [guestGuard]
	},
	{ 
		path: 'auth/register', 
		component: RegisterComponent,
		canActivate: [guestGuard]
	},
	{ 
		path: 'auth/pending', 
		component: PendingComponent,
		canActivate: [authGuard]
	},
	{ 
		path: 'auth/rejected', 
		component: RejectedComponent,
		canActivate: [authGuard]
	},
	{ 
		path: 'dashboard', 
		component: DashboardComponent,
		canActivate: [authGuard]
	},
	{
		path: 'association/dashboard',
		canActivate: [authGuard, roleGuard],
		data: { roles: ['association'] },
		loadComponent: () =>
			import('./association/association-dashboard/association-dashboard.component').then(
				(m) => m.AssociationDashboardComponent
			)
	},
	{
		path: 'association/explorer',
		canActivate: [authGuard, roleGuard],
		data: { roles: ['association'] },
		loadComponent: () =>
			import('./association/association-explorer/association-explorer.component').then(
				(m) => m.AssociationExplorerComponent
		)
	},
	{
		path: 'association/campaigns',
		canActivate: [authGuard, roleGuard],
		data: { roles: ['association'] },
		loadComponent: () =>
			import('./association/association-campaigns/association-campaigns.component').then(
				(m) => m.AssociationCampaignsComponent
			)
	},
	{
		path: 'association/campaigns/new',
		canActivate: [authGuard, roleGuard],
		data: { roles: ['association'] },
		loadComponent: () =>
			import('./association/association-create-campaign/association-create-campaign.component').then(
				(m) => m.AssociationCreateCampaignComponent
			)
	},
	{
		path: 'association/campaigns/edit/:id',
		canActivate: [authGuard, roleGuard],
		data: { roles: ['association'] },
		loadComponent: () =>
			import('./association/association-create-campaign/association-create-campaign.component').then(
				(m) => m.AssociationCreateCampaignComponent
			)
	},
	{
		path: 'association/donations',
		canActivate: [authGuard, roleGuard],
		data: { roles: ['association'] },
		loadComponent: () =>
			import('./association/association-donations/association-donations.component').then(
				(m) => m.AssociationDonationsComponent
			)
	},
	{
		path: 'association/profile',
		canActivate: [authGuard, roleGuard],
		data: { roles: ['association'] },
		loadComponent: () =>
			import('./association/association-profile/association-profile.component').then(
				(m) => m.AssociationProfileComponent
			)
	},
	{
		path: 'association/request-detail/:id',
		canActivate: [authGuard, roleGuard],
		data: { roles: ['association'] },
		loadComponent: () =>
			import('./association/association-request-detail/association-request-detail.component').then(
				(m) => m.AssociationRequestDetailComponent
			)
	},
	{ 
		path: 'profile', 
		component: UserProfileComponent,
		canActivate: [authGuard]
	},
	{ 
		path: 'my-requests', 
		component: MyRequestsComponent,
		canActivate: [authGuard]
	},
	{ 
		path: 'my-donations', 
		component: MyDonationsComponent,
		canActivate: [authGuard]
	},
	{ 
		path: 'notifications', 
		component: NotificationsComponent,
		canActivate: [authGuard]
	},
	{ 
		path: 'saved', 
		component: SavedRequestsComponent,
		canActivate: [authGuard]
	},
	{ 
		path: 'activity', 
		component: ActivityHistoryComponent,
		canActivate: [authGuard]
	},
	{ 
		path: 'requests/new', 
		component: PublishRequestComponent,
		canActivate: [authGuard]
	},
	{ 
		path: 'donate', 
		component: DonateComponent,
		canActivate: [authGuard]
	},
	{ 
		path: 'dashboard/donations', 
		component: DonationHistoryComponent,
		canActivate: [authGuard]
	},
	{
		path: 'admin-dashboard',
		canActivate: [authGuard, roleGuard],
		data: { roles: ['admin'] },
		loadComponent: () =>
			import('./admin/admin-dashboard/admin-dashboard.component').then(
				(m) => m.AdminDashboardComponent
			)
	},
	{
		path: 'admin/associations',
		canActivate: [authGuard, roleGuard],
		data: { roles: ['admin'] },
		loadComponent: () =>
			import('./admin/admin-associations/admin-associations.component').then(
				(m) => m.AdminAssociationsComponent
			)
	},
	{
		path: 'admin/requests',
		canActivate: [authGuard, roleGuard],
		data: { roles: ['admin'] },
		loadComponent: () =>
			import('./admin/admin-requests/admin-requests.component').then(
				(m) => m.AdminRequestsComponent
			)
	},
	{
		path: 'admin/donations',
		canActivate: [authGuard, roleGuard],
		data: { roles: ['admin'] },
		loadComponent: () =>
			import('./admin/admin-donations/admin-donations.component').then(
				(m) => m.AdminDonationsComponent
			)
	},
	{
		path: 'admin/users',
		canActivate: [authGuard, roleGuard],
		data: { roles: ['admin'] },
		loadComponent: () =>
			import('./admin/admin-users/admin-users.component').then(
				(m) => m.AdminUsersComponent
			)
	},
	{
		path: 'admin/statistics',
		canActivate: [authGuard, roleGuard],
		data: { roles: ['admin'] },
		loadComponent: () =>
			import('./admin/admin-statistics/admin-statistics.component').then(
				(m) => m.AdminStatisticsComponent
			)
	},
	{ path: '**', redirectTo: '' }
];
