import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { Avatar } from "@material-ui/core";
import { connect } from "react-redux";
import { startEditUser } from "../../../_actions/userActions";
import ImageDialog from "../../composite/ImageDialog";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Image from "react-bootstrap/Image";
import uploadPhoto from "../../../_helpers/uploadPhoto";
import uuid from "uuid";
import useStyles from "../../../_styles/user-styles/settings-styles/Profile";

function Profile(props) {
  const { currentViewer, startEditUser } = props;
  const classes = useStyles();

  const [imageSrc, setImageSrc] = useState(null);
  const [avatar, setAvatar] = useState(currentViewer.avatar);
  const [cover, setCover] = useState(currentViewer.cover);
  const [isEditing, setIsEditing] = useState(null);

  useEffect(() => {
    uploadPhoto(avatar, uuid())
      .then(avatar => {
        return startEditUser(currentViewer.uid, { avatar: avatar }).then(
          () => {}
        );
      })
      .catch(e => {});
  }, [avatar]);

  useEffect(() => {
    uploadPhoto(cover, uuid())
      .then(cover => {
        return startEditUser(currentViewer.uid, { cover: cover }).then(
          () => {}
        );
      })
      .catch(e => {});
  }, [cover]);

  const onFileChange = async e => {
    setIsEditing(e.currentTarget.dataset.edit);
    if (e.target.files && e.target.files.length > 0) {
      const imageDataUrl = await readFile(e.target.files[0]);
      setImageSrc(imageDataUrl);
    }
  };

  function readFile(file) {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.addEventListener("load", () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    });
  }

  return (
    <Card className={classes.card}>
      <div className={classes.label}>
        <h4>پروفایل</h4>
      </div>
      <Divider />
      <div className={classes.container}>
        <h2>تصویر پروفایل</h2>
        <Avatar alt="avatar" src={avatar} className={classes.bigAvatar} />
        <h4>بارگذاری تصویر جدید</h4>
        <input
          accept="image/jpeg, image/png"
          className={classes.uploadImage}
          id="upload-avatar"
          type="file"
          onChange={onFileChange}
          data-edit="avatar"
        />
        <label htmlFor="upload-avatar">
          <Button
            variant="contained"
            component="span"
            className={classes.uploadAvatar}
          >
            انتخاب فایل
          </Button>
        </label>

        <Divider style={{ marginTop: 20 }} />

        <h2>تصویر زمینه</h2>
        <Image
          fluid
          alt="background"
          src={cover}
          className={classes.coverImage}
        />

        <h4>بارگذاری تصویر جدید</h4>
        <input
          accept="image/jpeg, image/png"
          className={classes.uploadImage}
          id="upload-cover"
          type="file"
          onChange={onFileChange}
          data-edit="cover"
        />
        <label htmlFor="upload-cover">
          <Button
            variant="contained"
            component="span"
            className={classes.uploadAvatar}
          >
            انتخاب فایل
          </Button>
        </label>
      </div>

      <ImageDialog
        imageSrc={imageSrc}
        setImageSrc={setImageSrc}
        editing={isEditing}
        setAvatar={setAvatar}
        setCover={setCover}
      />
    </Card>
  );
}

const mapStateToProps = state => ({
  currentViewer: state.authRedux
});

const mapDispatchToProps = dispatch => ({
  startEditUser: (id, updates) => dispatch(startEditUser(id, updates))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
