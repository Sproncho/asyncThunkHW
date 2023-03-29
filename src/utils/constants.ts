export const baseUrl = 'https://webaccounting.herokuapp.com/account';
export const createToken = (login: string, password: string) => `Basic ${window.btoa(login+ ':' + password)}`;