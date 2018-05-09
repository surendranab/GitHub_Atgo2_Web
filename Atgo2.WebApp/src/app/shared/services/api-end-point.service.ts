export class ApiEndPointService {
  ExceptionLogging = '';
  Login = 'api/user/login';
  GetSiteHeaderMenus = 'api/siteheader/getmenus';
  ResetPasswordLogin = 'api/resetpassword';
  GetVersion = 'api/build/BuildVersion';
  UpdateUserEula = 'api/user';
  GetLeftsideNavItems = 'api/navdata/getLeftsideNavItems';
  GetQuoteFormData = 'api/quote/getQuoteData';
  SystemLogout = 'api/token/logout/System';
  UserLogout = 'api/token/logout/User';
  SessionTimeout = 'api/common/LoginTimeOut';
}