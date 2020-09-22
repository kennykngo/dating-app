import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HeightOutlinedIcon from "@material-ui/icons/HeightOutlined";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import LocalBarOutlinedIcon from "@material-ui/icons/LocalBarOutlined";
import SmokingRoomsOutlinedIcon from "@material-ui/icons/SmokingRoomsOutlined";
import avatar1 from "../BottomNavigation/mumble-logo.png";

const style = {
  color: "#ec646f",
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 345,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "15px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  image: {
    width: "100%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const Discover = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = (e) => {
    console.log(e);
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            aria-label={props.children.counter}
            className={classes.avatar}
            src={avatar1}
          ></Avatar>
        }
        title={props.children.first_name}
        subheader={props.children.age}
      />
      <CardMedia
        className={classes.media}
        image={props.children.profile_image}
        title="Profile image"
      />

      <CardActions disableSpacing>
        <List className={classes.root}>
          <ListItem>
            <ListItemText />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <h5 style={style}>Love Factor:&nbsp; </h5>
            </ListItemIcon>
            <ListItemText primary={props.children.loveFactor} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HeightOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={props.children.height + " inches"} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <WorkOutlineOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={props.children.job} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <LocationOnOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={props.children.location} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <LocalBarOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={props.children.drinks} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SmokingRoomsOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={props.children.smokes} />
          </ListItem>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </List>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>SEX : {props.children.sex}</Typography>
          <Typography paragraph>STATUS : {props.children.status}</Typography>
          <Typography paragraph>
            BODY TYPE : {props.children.body_type}
          </Typography>
          <Typography paragraph>DIET : {props.children.diet}</Typography>
          <Typography paragraph>DRUGS : {props.children.drugs}</Typography>
          <Typography paragraph>
            ETHNICITY : {props.children.ethnicity}
          </Typography>
          <Typography paragraph>
            EDUCATION : {props.children.education}
          </Typography>
          <Typography paragraph>INCOME : {props.children.income}</Typography>
          <Typography paragraph>
            OFFSPRING : {props.children.offspring}
          </Typography>
          <Typography paragraph>
            ORIENTATION : {props.children.orientation}
          </Typography>
          <Typography paragraph>PETS : {props.children.pets}</Typography>
          <Typography paragraph>
            RELIGION : {props.children.religion}
          </Typography>
          <Typography paragraph>SIGN : {props.children.sign}</Typography>
          <Typography paragraph>SPEAKS : {props.children.speaks}</Typography>
          <Typography paragraph>BIO : {props.children.essay}</Typography>
          <Typography paragraph>
            MUMBLE_EMAIL : {props.children.mumble_email}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Discover;
