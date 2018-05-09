export const userActions = {
    name: 'User Actions',
    Quote: 'Quote Module'
    
}

export const systemSettings = {
    name: 'General User Settings',
    customers: 'Customers',
    ports: 'Ports'
  };

export const roles = {
    superAdmin: 'Associate',
    systemAdmin: 'Deassociate',
    customerAdmin: 'Customer Admin',
    customerUser: 'Customer User',
    agentAdmin:'Agent Admin',
    agentUser:'Agent User',
    logisticsAdmin:'Logistics Admin',
    logisticsUser:'Logistics User'
}

export const moduleName = {   
    empty: 'loading',
    login: 'login',    
    maincontainer: 'maincontainer',
    dashboard: 'dashboard',
    siteheader: 'siteheader',
    quote: 'quote',
    settings: 'setting'
}

export const moduleForm = {
    formEmpty: 'form-Empty',
    formLogin: 'form-login',
    formDashboard: 'form-dashboard',    
    formQuote: 'form-quote',
}

export const moduleLayout = {
    layoutEmpty: 'loading',
    layoutRoot: 'layout',
    layoutSearch: '',
    layoutLogin: 'login', 
    // layoutDashboard: 'dashboard',    
    // layoutQuote: 'quote-form',
    layoutMaincontainer: 'maincontainer'
}

export const routeUrl = {    
    login: '/' + moduleName.login + '/', // -- '/' + moduleLayout.layoutLogin +
    userDashboard: '/' + moduleName.dashboard + '/',
    quote: '/' + moduleLayout.layoutRoot + '/' + moduleName.quote + '/',
}

export const api = {};