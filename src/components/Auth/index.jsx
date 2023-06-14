import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Header, Label } from "semantic-ui-react";
import getAuthorizationKey from "../../api_services/gitlab_auth";
export default function Auth() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const code = queryParams.get("code");

  useEffect(() => {
    async function fetchData() {
      console.log("code", code);
      // Do something with the code value if needed
      let authCode = await getAuthorizationKey(code);
      console.log("Auth Code", authCode);
    }
    fetchData();
  }, [code]);

  return (
    <Container>
      <Header dividing>Authorizing</Header>
      <Label>CODE</Label> {code}
    </Container>
  );
}
