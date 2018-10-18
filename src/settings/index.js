export default {
  apiUrl: 'http://yoursite.com/api/',
};

const siteConfig = {
  siteName: 'ENGLISH CLASS',
  siteIcon: 'ion-flash',
  footerText: 'English Class ©2017 Created by ENG APP',
};
const themeConfig = {
  topbar: 'themedefault',
  sidebar: 'themedefault',
  layout: 'themedefault',
  theme: 'themedefault',
};

const jwtConfig = {
  host: 'http://127.0.0.1:5000',
  fetchUrl_TM: '/',
  fetchUrl: '/api/',
  secretKey: 'secretKey'
};

const language = 'english';
export {
  siteConfig,
  language,
  themeConfig,
  jwtConfig
};

export const frontPageConfig = {
  baseUrl:'/front'
}