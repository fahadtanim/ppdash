import axios from "axios";

export default class GitlabProjects {
  constructor() {
    this.authToken = JSON.parse(localStorage.getItem("authToken")).access_token;
  }

  getPrefix = async (searchPrefix) => {
    const url = "https://gitlab.dsinnovators.com/api/v4/groups/9/search?scope=projects&search="+searchPrefix;
    const headers = {
      Authorization: `Bearer ${this.authToken}`,
    };
    try {
      console.log("headers", headers);
      const response = await axios.get(url, { headers: headers });
      const projects = response.data.projects.map(({ id, name, web_url }) => ({
        id,
        name,
        web_url,
      }));
      console.log("projects", projects);
    } catch (error) {
      console.log(error);
    }
  };
}
