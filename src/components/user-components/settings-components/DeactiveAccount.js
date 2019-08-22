import React from "react";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import useInputState from "../../../_hooks/useInputState";
import { editUser } from "../../../_actions/userActions";
import useStyles from "../../../_styles/user-styles/settings-styles/DeactivateAccount";

function DeactiveAccount(props) {
  const { currentViewer, editUser, logOut } = props;
  const classes = useStyles();
  const [username, setUsername] = useInputState("");
  const [password, setPassword] = useInputState("");

  const handleFormSubmit = e => {
    e.preventDefault();
    if (
      username === currentViewer.username &&
      password === currentViewer.password
    ) {
      const updates = {
        isActive: false
      };
      editUser(currentViewer.id, updates);
      logOut(currentViewer.id);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Card className={classes.card}>
        <div className={classes.label}>
          <h4>غیرفعالسازی حساب</h4>
        </div>
        <Divider />
        <div className={classes.container}>
          <label htmlFor="username">
            <h1>نام کاربری</h1>
          </label>
          <TextField
            id="username"
            variant="outlined"
            type="text"
            required
            fullWidth
            value={username}
            onChange={setUsername}
            disabled
          />

          <label htmlFor="password">
            <h1>گذرواژه</h1>
          </label>
          <TextField
            id="password"
            variant="outlined"
            type="password"
            required
            fullWidth
            value={password}
            onChange={setPassword}
            disabled
          />

          <label htmlFor="reason">
            <h1>لطفا دلیلتون رو بنویسید</h1>
          </label>
          <TextField
            id="reason"
            variant="outlined"
            type="text"
            multiline
            rows="5"
            maxrows="7"
            fullWidth
            disabled
          />
        </div>
      </Card>

      <Button disabled variant="contained" color="secondary" type="submit">
        غیرفعالسازی حساب
      </Button>
    </form>
  );
}

const mapStateToProps = state => ({
  currentViewer: state.currentViewer,
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  editUser: (id, updates) => dispatch(editUser(id, updates))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeactiveAccount);
