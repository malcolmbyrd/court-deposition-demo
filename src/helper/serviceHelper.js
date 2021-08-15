const isLocalHost = window.location.hostname === 'localhost' && !['', '3000'].includes(window.location.port);

function objectToQueryString(obj) {
  return Object.keys(obj).map((key) => `${key}=${obj[key]}`).join('&');
}

const ServiceHelper = { isLocalHost, objectToQueryString };

export default ServiceHelper;
