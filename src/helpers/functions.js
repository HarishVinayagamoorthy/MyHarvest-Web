import CryptoJS from "crypto-js";

export function store_item(key, data) {
  const salt = process.env.REACT_APP_SALT || "";
  let value = JSON.stringify(data);
  let encryptedKey = window.btoa(key);
  let encryptedValue = encrypt_data(value, salt);
  window.localStorage.setItem(encryptedKey, encryptedValue);
  window.dispatchEvent(new Event(`${key}`));
}

export function retrieve_item(key) {
  const salt = process.env.REACT_APP_SALT || "";
  try {
    let encryptedKey = window.btoa(key);
    let value = window.localStorage.getItem(encryptedKey);
    const decryptedValue = decrypt_data(value, salt);
    return JSON.parse(decryptedValue);
  } catch (e) {
    return null;
  }
}

export function clear_local_storage() {
  try {
    window.localStorage.clear();
  } catch (e) {
    return;
  }
}

export const encrypt_data = (data, salt) =>
  CryptoJS.AES.encrypt(JSON.stringify(data), salt).toString();

export const decrypt_data = (cipher_text, salt) => {
  const bytes = CryptoJS.AES.decrypt(cipher_text, salt);
  try {
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } catch (err) {
    return null;
  }
};

export function get_uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
