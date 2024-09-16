export default function getTokenBearer() {
    const isSSO = JSON.parse(localStorage.getItem('isSSO'));
    return isSSO ? 'Bearer' : 'Token';
  }
