import JobsMock from "../mockData/jobsMock";
import ProvidersMock from "../mockData/providersMock";

const fetchJobs = async () => {
  return JobsMock
}

const fetchProviders = async () => {
  return ProvidersMock
}

const FrontEndService = {fetchJobs, fetchProviders};

export default FrontEndService;
