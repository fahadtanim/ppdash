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
  Message,
} from "semantic-ui-react";
import "./Login.css";
function Login() {
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
              <Button color="vk">
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
