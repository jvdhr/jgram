import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Cropper from "react-easy-crop";
import getCroppedImg from "../../_helpers/cropImage";
import Slider from "@material-ui/core/Slider";
import useStyles from "../../_styles/ImageDialog";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ImageDialog(props) {
  const { imageSrc, setImageSrc, editing, setAvatar, setCover } = props;
  const classes = useStyles();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [aspect, setAspect] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [open, setOpen] = useState(false);

  function handleClose() {
    setImageSrc(null);
    setZoom(1);
    setCrop({ x: 0, y: 0 });
    setOpen(false);
  }

  const onZoomChange = zoom => {
    setZoom(zoom);
  };

  const onCropChange = crop => {
    setCrop(crop);
  };

  const saveCroppedImage = async () => {
    const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
    editing === "avatar" ? setAvatar(croppedImage) : setCover(croppedImage);

    handleClose();
  };

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={!!imageSrc}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar position="sticky" className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              ویرایش تصویر
            </Typography>
            <Button color="inherit" onClick={saveCroppedImage}>
              ذخیره
            </Button>
          </Toolbar>
        </AppBar>

        <div className={classes.cropContainer}>
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            aspect={editing === "avatar" ? aspect : 16 / 9}
            onCropChange={onCropChange}
            onCropComplete={onCropComplete}
            onZoomChange={onZoomChange}
            cropShape={editing === "avatar" ? "round" : "rect"}
            showGrid={false}
          />
        </div>
        <div className={classes.controls}>
          <Slider
            value={zoom}
            min={1}
            max={3}
            step={0.1}
            aria-labelledby="Zoom"
            onChange={(e, zoom) => onZoomChange(zoom)}
            className={classes.slider}
          />
        </div>
      </Dialog>
    </div>
  );
}
