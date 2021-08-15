import ServiceHelper from "../helper/serviceHelper";
import JobsMock from "../mockData/jobsMock";
import ProvidersMock from "../mockData/providersMock";

const fetchJobs = async () => {
  if (ServiceHelper.isLocalHost) {
    try {
      return await fetch(`http://localhost:3000/jobs`)
        .then(r => r.json());
    } catch (e) {
      return `${e}`;
    }
  } else {
    return JobsMock
  }
}

const fetchProviders = async () => {
  if (ServiceHelper.isLocalHost) {
    try {
      return await fetch(`http://localhost:3000/providers`)
        .then(r => r.json());
    } catch (e) {
      return `${e}`;
    }
  } else {
    return ProvidersMock
  }
}

const FrontEndService = {fetchJobs, fetchProviders};

export default FrontEndService;
