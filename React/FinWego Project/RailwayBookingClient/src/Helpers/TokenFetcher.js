export default function tokenFetcher() {
  let token = null;
  if (typeof document !== 'undefined') {
    const cookieToken = document.cookie.split(';');
    console.log(cookieToken,'=======')
    const index = cookieToken.findIndex((tokenString) => tokenString.includes('access-token'));
    token = index >= 0 ? cookieToken[index].split('=')[1] : null;
  }
  console.log(token,'========tokennnnnn')
  return token;
}
