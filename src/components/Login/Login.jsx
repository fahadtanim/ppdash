import {
  Button,
  ButtonGroup,
  Divider,
  Form,
  FormField,
  FormInput,
  Grid,
  GridColumn,
  GridRow,
  Icon,
  Input,
} from "semantic-ui-react";
import "./Login.css";

function Login() {
  const handleGitlabAuth = () => {
    const url =
      "https://gitlab.dsinnovators.com/oauth/authorize?client_id=12769cd034de60192b3a07f6f77cfd32cc84b3970c1edd57c47a88e5010fbaae&redirect_uri=http://localhost:5173/authorization/gitlab&response_type=code&state=STATE&scope=api+read_api+read_user+read_repository+write_repository+read_observability+write_observability+sudo+profile+openid+email+admin_mode";
    window.open(url);
  };

  return (
    <Grid centered id="login-container">
      <GridRow columns={3}>
        <GridColumn className="login-box-container">
          <GridRow>
            <h3 className="logo">PPDash</h3>
          </GridRow>
          <GridRow>
            <Form>
              <FormField
                id="form-input-control-error-email"
                control={Input}
                label="Email"
                placeholder="example@dsinnovators.com"
              />
              <FormInput label="Enter Password" type="password" />
              <ButtonGroup fluid size="tiny">
                <Button color="blue" type="submit">
                  SignIn
                </Button>
                <Button.Or text="Or" />
                <Button> SignUp</Button>
                <Button.Or text="Or" />
                <Button color="orange"> Forgot Password</Button>
              </ButtonGroup>
            </Form>
            <Divider horizontal id="sign-in-with-label">
              Sign in With
            </Divider>
            {/* <p className="sign-in-with-label">Sign in With</p> */}
            <ButtonGroup fluid>
              <Button color="google plus">
                <Icon name="google" /> Gmail
              </Button>
              <Button.Or text="Or" />
              <Button color="vk" onClick={handleGitlabAuth}>
                <Icon name="gitlab" /> Gitlab
              </Button>
            </ButtonGroup>
          </GridRow>
        </GridColumn>
      </GridRow>
    </Grid>
  );
}

export default Login;
