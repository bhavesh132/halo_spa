import haloClient from "../axios/haloClient";
import { authorizeHalo } from "../axios/haloClient";

const getAgentStatus = async () => {
  const response = await authorizeHalo.then((res) => res.data);
  return await haloClient(response)
    .get("/OnlineStatus")
    .then((res) => res.data);
};

export default getAgentStatus;
