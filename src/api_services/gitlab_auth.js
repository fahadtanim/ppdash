import axios from "axios";

async function getAuthorizationKey(code) {
  console.log("request with code", code);

  const url =
    "https://gitlab.dsinnovators.com/oauth/token?client_id=12769cd034de60192b3a07f6f77cfd32cc84b3970c1edd57c47a88e5010fbaae&client_secret=88977dde1a1d2f6c041569a5bc5eaa3bbd5950f7198b7c4d815884a53e5cea76&code=" +
    code +
    "&grant_type=authorization_code&redirect_uri=http://localhost:5173/authorization/gitlab";
  const parameters = new URLSearchParams();
  parameters.append(
    "client_id",
    "12769cd034de60192b3a07f6f77cfd32cc84b3970c1edd57c47a88e5010fbaae"
  );
  parameters.append(
    "client_secret",
    "88977dde1a1d2f6c041569a5bc5eaa3bbd5950f7198b7c4d815884a53e5cea76"
  );
  parameters.append("code", code);
  parameters.append("grant_type", "authorization_code");
  parameters.append(
    "redirect_uri",
    "http://localhost:5173/authorization/gitlab"
  );
  parameters.append("code_verifier", "CODE_VERIFIER");
  try {
    const response = await axios.post(url);
    const authToken = response.data;
    localStorage.setItem("authToken", JSON.stringify(authToken));
  } catch (error) {
    console.error(error);
  }
}

export default getAuthorizationKey;
