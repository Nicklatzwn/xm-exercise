export const setStorage = (key: string, value: string, local = false) => {
  local ? localStorage.setItem(key, value) : sessionStorage.setItem(key, value);
};
export const getStorage = (key: string): string => localStorage.getItem(key) || sessionStorage.getItem(key) || '';
export const clearStorage = (key: string): void => {
  localStorage.removeItem(key);
  sessionStorage.removeItem(key);
};
