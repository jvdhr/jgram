import React, { useState } from "react";
import NewEventDetails from "./NewEventDetails";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import InputAdornment from "@material-ui/core/InputAdornment";
import useInputState from "../../_hooks/useInputState";
import {
  PencilIcon,
  TicketIcon,
  CheckboxIcon,
  ImageIcon,
  ProfileIcon
} from "../../icons/Icons";
import { connect } from "react-redux";
import {
  ValidatorForm,
  TextValidator,
  SelectValidator
} from "react-material-ui-form-validator";
import ImageDialog from "../composite/ImageDialog";
import Image from "react-bootstrap/Image";
import uploadPhoto from "../../_helpers/uploadPhoto";
import uuid from "uuid";
import useStyles from "../../_styles/add-new-event-styles/NewEvent";

function NewEvent(props) {
  const { currentViewer, onSubmitForm, setSnackbarOpen, snackbarOpen } = props;
  const classes = useStyles();

  const [title, setTitle] = useInputState("");
  const [description, setDescription] = useInputState("");
  const [ticketPrice, setTicketPrice] = useInputState("");
  const [hall, setHall] = useInputState("");
  const [seats, setSeats] = useInputState("");
  const [covers, setCover] = useState("");
  const [organizers, setOrganizers] = useState([
    {
      key: currentViewer.uid,
      label: currentViewer.username
    }
  ]);
  const [dateTime, setDateTime] = useState([]);
  const [city, setCity] = useInputState("");
  const [address, setAddress] = useInputState("");
  const [latlng, setLatlng] = useState({
    lat: 35.689198,
    lng: 51.388973
  });
  const [category, setCategory] = useState("");
  const [imageSrc, setImageSrc] = useState(null);

  const onFileChange = async e => {
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

  const handleOrganizerDelete = chipToDelete => () => {
    // setOrganizers(chips => chips.filter(chip => chip.key !== chipToDelete.key));
  };

  const handleDateTimeDelete = chipToDelete => () => {
    setDateTime(chips => chips.filter(chip => chip.key !== chipToDelete.key));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSnackbarOpen(true);
    uploadPhoto(covers, uuid()).then(cover => {
      const event = {
        authorId: currentViewer.uid,
        title,
        description,
        category,
        ticketPrice,
        hall,
        cover,
        seats,
        organizers,
        dateTime,
        location: {
          city,
          address,
          latlng
        }
      };
      onSubmitForm(event);
    });
  };

  return (
    <Container component="main" maxWidth="sm" className={classes.root}>
      <Typography variant="h5" className={classes.title}>
        رویداد جدید
      </Typography>
      <Card className={classes.addNewEvent}>
        <ValidatorForm
          noValidate
          action=""
          className="AddNewEvent-form"
          onSubmit={handleSubmit}
        >
          <Box className={classes.box}>
            <div className={classes.label}>
              <PencilIcon className={classes.iconSize} />
              <h4>عنوان</h4>
            </div>
            <div className={classes.inputContainer}>
              <TextValidator
                id="outlined-with-placeholder"
                placeholder="عنوان رویداد را وارد کنید"
                className={`${classes.customInput} ${classes.addNewEventTitle}`}
                variant="outlined"
                value={title}
                onChange={setTitle}
                required
                disabled={snackbarOpen}
                validators={["required"]}
                errorMessages={["لطفا عنوان رویداد رو کنید!"]}
              />
            </div>
          </Box>

          <Box className={classes.box}>
            <div className={classes.label}>
              <PencilIcon className={classes.iconSize} />
              <h4>توضیحات</h4>
            </div>
            <div className={classes.inputContainer}>
              <TextValidator
                id="outlined-multiline-static"
                multiline
                rows="4"
                rowsMax="4"
                className={`${classes.customInput} ${classes.addNewEventTitle}`}
                placeholder="توضیحاتی درباره رویداد بنویسید"
                variant="outlined"
                value={description}
                onChange={setDescription}
                required
                disabled={snackbarOpen}
                validators={["required"]}
                errorMessages={["لطفا توضیحاتی درباره رویداد وارد کنید!"]}
              />
            </div>
          </Box>
          <Box className={classes.box}>
            <div className={classes.label}>
              <PencilIcon className={classes.iconSize} />
              <h4>دسته‎بندی</h4>
            </div>
            <div className={classes.inputContainer}>
              <FormControl
                fullWidth
                variant="outlined"
                className={`${classes.customInput} ${classes.addNewEventTitle}`}
              >
                <SelectValidator
                  variant="outlined"
                  value={category}
                  onChange={e => setCategory(e.target.value)}
                  disabled={snackbarOpen}
                  validators={["required"]}
                  errorMessages={["لطفا یک دسته‎بندی انتخاب کنید!"]}
                >
                  <MenuItem value="" />
                  <MenuItem value={"music"}>موسیقی</MenuItem>
                  <MenuItem value={"festival"}>جشنواره</MenuItem>
                  <MenuItem value={"art"}>هنر</MenuItem>
                  <MenuItem value={"sports"}>ورزشی</MenuItem>
                  <MenuItem value={"comedy"}>کمدی</MenuItem>
                  <MenuItem value={"concert"}>کنسرت</MenuItem>
                  <MenuItem value={"promotions"}>تبلیغات</MenuItem>
                </SelectValidator>
              </FormControl>
            </div>
          </Box>
          <Box className={classes.box}>
            <div className={classes.label}>
              <TicketIcon
                htmlColor="rgb(233, 5, 71)"
                className={classes.iconSize}
              />
              <h4>قیمت بلیت</h4>
            </div>
            <div className={classes.inputContainer}>
              <Typography variant="subtitle1" color="textSecondary">
                اگه رویداد رایگانه این فیلد رو خالی بذارید.
              </Typography>
              <TextValidator
                id="outlined-with-placeholder"
                placeholder="قیمت بلیت را وارد کنید"
                className={`${classes.customInput} ${classes.addNewEventTitle}`}
                variant="outlined"
                value={ticketPrice}
                onChange={setTicketPrice}
                disabled={snackbarOpen}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">تومان</InputAdornment>
                  )
                }}
              />
            </div>
          </Box>

          <NewEventDetails
            dateTimeChips={dateTime}
            setDateTimeChips={setDateTime}
            handleDateTimeDelete={handleDateTimeDelete}
            city={city}
            setCity={setCity}
            address={address}
            setAddress={setAddress}
            latlng={latlng}
            setLatlng={setLatlng}
            snackbarOpen={snackbarOpen}
          />

          <Box className={classes.box}>
            <div className={classes.label}>
              <CheckboxIcon className={classes.iconSize} />
              <h4>مکان برگزاری</h4>
            </div>
            <div className={classes.inputContainer}>
              <TextValidator
                id="outlined-with-placeholder"
                placeholder="نام سالن برگزاری را بنویسید"
                className={`${classes.customInput} ${classes.addNewEventTitle}`}
                variant="outlined"
                value={hall}
                onChange={setHall}
                disabled={snackbarOpen}
              />
            </div>
            <div className={classes.inputContainer}>
              <TextValidator
                id="outlined-with-placeholder"
                placeholder="تعداد جایگاه‎ها را وارد کنید"
                className={`${classes.customInput} ${classes.addNewEventTitle}`}
                variant="outlined"
                value={seats}
                onChange={setSeats}
                disabled={snackbarOpen}
              />
            </div>
          </Box>

          <Box className={classes.box}>
            <div className={classes.label}>
              <ImageIcon className={classes.iconSize} />
              <h4>تصویر</h4>
            </div>
            <div className={classes.inputContainer}>
              <Image
                fluid
                alt="cover"
                src={covers}
                style={{
                  display: covers === "" ? "none" : "block",
                  maxWidth: "100%",
                  maxHeight: "300px",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  padding: 5
                }}
              />
              <input
                accept="image/jpeg, image/png"
                className={classes.uploadImage}
                id="upload-cover"
                type="file"
                onChange={onFileChange}
                disabled={snackbarOpen}
              />
              <label htmlFor="upload-cover">
                <Button
                  variant="contained"
                  component="span"
                  className={classes.uploadAvatar}
                  disabled={snackbarOpen}
                >
                  انتخاب فایل
                </Button>
              </label>
              <ImageDialog
                imageSrc={imageSrc}
                setImageSrc={setImageSrc}
                editing="cover"
                setCover={setCover}
              />
            </div>
          </Box>

          <Box className={classes.box}>
            <div className={classes.label}>
              <ProfileIcon className={classes.iconSize} />
              <h4>تیم برگزارکننده </h4>
              <Typography color="error" variant="subtitle2">
                (به زودی)
              </Typography>
            </div>
            <div className={classes.inputContainer}>
              <TextValidator
                variant="outlined"
                className={`${classes.customInput} ${classes.addNewEventTitle}`}
                disabled
              />
            </div>
            <Button
              className={classes.addNewEventSubmit}
              variant="contained"
              disabled
            >
              افزودن عضو
            </Button>
            <div className={classes.chipPaper}>
              {organizers.map(data => {
                return (
                  <Chip
                    key={data.key}
                    label={data.label}
                    onDelete={handleOrganizerDelete(data)}
                    className={classes.chip}
                  />
                );
              })}
            </div>
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            className={classes.button}
            disabled={snackbarOpen}
          >
            بارگذاری رویداد
          </Button>
        </ValidatorForm>
      </Card>
    </Container>
  );
}

const mapStateToProps = state => ({
  currentViewer: state.authRedux
});

export default connect(mapStateToProps)(NewEvent);
