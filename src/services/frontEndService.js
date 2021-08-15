import JobsMock from "../mockData/jobsMock";
import ProvidersMock from "../mockData/providersMock";

const fetchJobs = async () => {
  return JobsMock.getJobsMock
}

const fetchProviders = async () => {
  return ProvidersMock.getProvidersMock
}

const FrontEndService = {fetchJobs, fetchProviders};

export default FrontEndService;
