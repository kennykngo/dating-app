import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Axios from "axios";
import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import ProfileDashboard from "./ProfileDashboard";

import "./profile.css";

const style = {
  background: "linear-gradient(45deg, #ED6570 30%, #F0CA77 90%)",
  borderRadius: 3,
  border: 0,
  color: "white",
  height: 48,
  padding: "0 30px",
  // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
};

const style1 = {
  margin: "10px 0px 40px 0px",
};

class Profile extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    mumble_email: this.first_name + "." + this.last_name + "@mumble.com",
    age: "",
    body_type: "",
    diet: "",
    drinks: "",
    drugs: "",
    education: "",
    ethnicity: "",
    height: "",
    income: "",
    job: "",
    location: "",
    offspring: "",
    orientation: "",
    pets: "",
    religion: "",
    sex: "",
    smokes: "",
    status: "",
    profile_image: "",
    counter: 0,
  };

  componentDidMount() {
    const token = localStorage.getItem("auth-token");
    Axios({
      method: "GET",
      url: "/profile/find",
      headers: { "x-auth-token": token },
    }).then((response) => {
      if (!response.data) return;
      let obj = response.data;
      obj.counter = 15;
      this.setState(obj);
    });
  }

  handleLeftCounter = () => {
    var counter = this.state.counter;
    if (counter >= 1) {
      counter--;
      this.setState({ counter: counter });
    }
  };
  handleRightCounter = () => {
    var counter = this.state.counter;
    counter++;
    this.setState({ counter: counter });
  };
  handleChange = (event) => {
    event.preventDefault();
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  render() {
    var result;
    if (this.state.counter === 0) {
      result = (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          m={1}
          p={1}
        >
          <Box alignItems="center" justifyContent="center" m={3}>
            <h1>What is your name?</h1>
            <form>
              <br />
              <br />
              <TextField
                label="First name"
                name="first_name"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
              <br /> <br /> <br />
              <TextField
                label="Last name"
                name="last_name"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </form>
            <br /> <br /> <br />
            <h1>What is your age?</h1>
            <form>
              <br />

              <br />
              <TextField
                label="Age"
                name="age"
                value={this.state.age}
                onChange={this.handleChange}
              />
            </form>
          </Box>
        </Box>
      );
    } else if (this.state.counter === 1) {
      let options = [
        "body_type",
        "What is your body-type?",
        [
          "a little extra",
          "athletic",
          "average",
          "curvy",
          "fit",
          "full figured",
          "jacked",
          "overweight",
          "rather not say",
          "skinny",
          "thin",
          "used up",
        ],
      ];
      let items = [];
      options[2].map((el, i) =>
        items.push(
          <Col key={i} xs={6} md={4}>
            <Button
              key={i}
              variant="contained"
              // color="primary"
              // style={style}
              value={el}
              onClick={(e) => this.handleChange(e)}
              name={options[0]}
              disableElevation
            >
              {el}
            </Button>
            <br />
            <br />
          </Col>
        )
      );
      result = (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          m={1}
          p={1}
        >
          <Box alignItems="center" justifyContent="center" m={3}>
            <h1 style={style1}>{options[1]}</h1>
            <Container fluid="md" className="text-center">
              <Row>
                <Row className="text-center">{items}</Row>
              </Row>
            </Container>
          </Box>
        </Box>
      );
    } else if (this.state.counter === 2) {
      let options = [
        "diet",
        "What is your diet?",
        [
          "strictly halal",
          "strictly kosher",
          "mostly kosher",
          "strictly vegetarian",
          "mostly vegetarian",
          "strictly vegan",
          "mostly vegan",
          "mostly vegetarian",
          "vegan",
          "vegetarian",
        ],
      ];
      let items = [];
      options[2].map((el, i) =>
        items.push(
          <Col key={i} xs={6} md={4}>
            <Button
              key={i}
              variant="contained"
              // color="primary"
              value={el}
              onClick={(e) => this.handleChange(e)}
              name={options[0]}
              disableElevation
            >
              {el}
            </Button>
            <br />
            <br />
          </Col>
        )
      );
      result = (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          m={1}
          p={1}
        >
          <Box alignItems="center" justifyContent="center" m={3}>
            <h1 style={style1}>{options[1]}</h1>
            <Container fluid="md" className="text-center">
              <Row>
                <Row className="text-center">{items}</Row>
              </Row>
            </Container>
          </Box>
        </Box>
      );
    } else if (this.state.counter === 3) {
      result = (
        <Box display="flex" justifyContent="center" m={1} p={1}>
          <Box alignItems="center" justifyContent="center" m={3}>
            <h1 style={style1}>How tall are you? (inches)</h1>
            <TextField
              label="Height"
              placeholder="72"
              name="height"
              value={this.state.height}
              onChange={this.handleChange}
            />

            <br />
            <br />

            <h1 style={style1}>What is your income in $</h1>
            <TextField
              label="Income"
              placeholder="1,000,000"
              name="income"
              value={this.state.income}
              onChange={this.handleChange}
            />

            <br />
            <br />

            <h1 style={style1}>Where do you live?</h1>
            <TextField
              label="Location"
              placeholder="San Francisco, CA"
              name="location"
              value={this.state.location}
              onChange={this.handleChange}
            />
          </Box>
        </Box>
      );
    } else if (this.state.counter === 4) {
      let options = [
        "drinks",
        "How often do you drink?",
        ["often", "rarely", "socially", "very often"],
      ];
      let items = [];
      options[2].map((el, i) =>
        items.push(
          <Col key={i} xs={6} md={4}>
            <Button
              key={i}
              variant="contained"
              // color="primary"
              value={el}
              onClick={(e) => this.handleChange(e)}
              name={options[0]}
              disableElevation
            >
              {el}
            </Button>
            <br />
            <br />
          </Col>
        )
      );
      result = (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          m={1}
          p={1}
        >
          <Box alignItems="center" justifyContent="center" m={3}>
            <h1 style={style1}>{options[1]}</h1>
            <Container fluid="md" className="text-center">
              <Row>
                <Row className="text-center">{items}</Row>
              </Row>
            </Container>
          </Box>
        </Box>
      );
    } else if (this.state.counter === 5) {
      let options = [
        [
          "drugs",
          "How often do you do drugs?",
          ["often", "sometimes", "never"],
        ],
        [
          "smokes",
          "Do you smoke?",
          ["no", "sometimes", "trying to quit", "when drinking", "yes"],
        ],
      ];
      let items = [[], []];
      for (let j = 0; j < 2; j++) {
        options[j][2].map((el, i) =>
          items[j].push(
            <Col key={i} xs={6} md={4}>
              <Button
                key={i}
                variant="contained"
                // color="primary"
                value={el}
                onClick={(e) => this.handleChange(e)}
                name={options[j][0]}
                disableElevation
              >
                {el}
              </Button>
              <br />
              <br />
            </Col>
          )
        );
      }
      result = (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          m={1}
          p={1}
        >
          <Box alignItems="center" justifyContent="center" m={3}>
            <h1 style={style1}>{options[0][1]}</h1>
            <Container fluid="md" className="text-center">
              <Row>
                <Row className="text-center">{items[0]}</Row>
              </Row>
            </Container>
            <h1 style={style1}>{options[1][1]}</h1>
            <Container fluid="md" className="text-center">
              <Row>
                <Row className="text-center">{items[1]}</Row>
              </Row>
            </Container>
          </Box>
        </Box>
      );
    } else if (this.state.counter === 6) {
      let options = [
        "education",
        "What is your highest level of education?",
        [
          "graduated from ph.d program",
          "graduated from masters program",
          "graduated from college/university",
          "working on college/university",
          "graduated from med school",
          "working on ph.d program",
          "working on med school",
          "working on masters program",
        ],
      ];
      let items = [];
      options[2].map((el, i) =>
        items.push(
          <Col key={i} xs={6} md={4}>
            <Button
              key={i}
              variant="contained"
              // color="primary"
              value={el}
              onClick={(e) => this.handleChange(e)}
              name={options[0]}
              disableElevation
              style={{ overflowWrap: "anywhere" }}
            >
              {el}
            </Button>
            <br />
            <br />
          </Col>
        )
      );
      result = (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          m={1}
          p={1}
        >
          <Box alignItems="center" justifyContent="center" m={3}>
            <h1 style={style1}>{options[1]}</h1>
            <Container fluid="md" className="text-center">
              <Row>
                <Row className="text-center">{items}</Row>
              </Row>
            </Container>
          </Box>
        </Box>
      );
    } else if (this.state.counter === 7) {
      let options = [
        "ethnicity",
        "What is your ethnicity?",
        [
          "asian",
          "black",
          "hispanic / latin",
          "indian",
          "middle eastern",
          "native american, white",
          "pacific islander",
          "white",
        ],
      ];
      let items = [];
      options[2].map((el, i) =>
        items.push(
          <Col key={i} xs={6} md={4}>
            <Button
              key={i}
              variant="contained"
              // color="primary"
              value={el}
              onClick={(e) => this.handleChange(e)}
              name={options[0]}
              disableElevation
            >
              {el}
            </Button>
            <br />
            <br />
          </Col>
        )
      );
      result = (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          m={1}
          p={1}
        >
          <Box alignItems="center" justifyContent="center" m={3}>
            <h1 style={style1}>{options[1]}</h1>
            <Container fluid="md" className="text-center">
              <Row>
                <Row className="text-center">{items}</Row>
              </Row>
            </Container>
          </Box>
        </Box>
      );
    } else if (this.state.counter === 8) {
      let options = [
        "job",
        "What is your occupation?",
        [
          "military",
          "retired",
          "student",
          "unemployed",
          "hospitality / travel",
          "executive / management",
          "education / academia",
          "computer / hardware / software",
          "clerical / administrative",
          "artistic / musical / writer",
          "science / tech / engineering",
        ],
      ];
      let items = [];
      options[2].map((el, i) =>
        items.push(
          <Col key={i} xs={6} md={4}>
            <Button
              key={i}
              variant="contained"
              // color="primary"
              value={el}
              onClick={(e) => this.handleChange(e)}
              name={options[0]}
              disableElevation
            >
              {el}
            </Button>
            <br />
            <br />
          </Col>
        )
      );
      result = (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          m={1}
          p={1}
        >
          <Box alignItems="center" justifyContent="center" m={3}>
            <h1 style={style1}>{options[1]}</h1>
            <Container fluid="md" className="text-center">
              <Row>
                <Row className="text-center">{items}</Row>
              </Row>
            </Container>
          </Box>
        </Box>
      );
    } else if (this.state.counter === 9) {
      let options = [
        "offspring",
        "How many kids do you have or want?",
        [
          "doesnt have kids",
          "has kids",
          "has a kid",
          "doesnt have kids, and doesnt want any",
          "has kids, but doesnt want more",
        ],
      ];
      let items = [];
      options[2].map((el, i) =>
        items.push(
          <Col key={i} xs={6} md={4}>
            <Button
              key={i}
              variant="contained"
              // color="primary"
              value={el}
              onClick={(e) => this.handleChange(e)}
              name={options[0]}
              disableElevation
            >
              {el}
            </Button>
            <br />
            <br />
          </Col>
        )
      );
      result = (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          m={1}
          p={1}
        >
          <Box alignItems="center" justifyContent="center" m={3}>
            <h1 style={style1}>{options[1]}</h1>
            <Container fluid="md" className="text-center">
              <Row>
                <Row className="text-center">{items}</Row>
              </Row>
            </Container>
          </Box>
        </Box>
      );
    } else if (this.state.counter === 10) {
      let options = [
        "pets",
        "How many pets do you have or want?",
        [
          "has dogs",
          "has cats",
          "dislikes dogs",
          "dislikes cats",
          "dislikes dogs and dislikes cats",
          "likes dogs",
          "likes cats",
        ],
      ];
      let items = [];
      options[2].map((el, i) =>
        items.push(
          <Col key={i} xs={6} md={4}>
            <Button
              key={i}
              variant="contained"
              // color="primary"
              value={el}
              onClick={(e) => this.handleChange(e)}
              name={options[0]}
              disableElevation
            >
              {el}
            </Button>
            <br />
            <br />
          </Col>
        )
      );
      result = (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          m={1}
          p={1}
        >
          <Box alignItems="center" justifyContent="center" m={3}>
            <h1 style={style1}>{options[1]}</h1>
            <Container fluid="md" className="text-center">
              <Row>
                <Row className="text-center">{items}</Row>
              </Row>
            </Container>
          </Box>
        </Box>
      );
    } else if (this.state.counter === 11) {
      let options = [
        "religion",
        "What are your religious preferences?",
        [
          "buddhism",
          "agnosticism",
          "atheism",
          "catholicism",
          "christianity",
          "hinduism",
          "judaism",
          "islam",
          "other",
        ],
      ];
      let items = [];
      options[2].map((el, i) =>
        items.push(
          <Col key={i} xs={6} md={4}>
            <Button
              key={i}
              variant="contained"
              // color="primary"
              value={el}
              onClick={(e) => this.handleChange(e)}
              name={options[0]}
              disableElevation
            >
              {el}
            </Button>
            <br />
            <br />
          </Col>
        )
      );
      result = (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          m={1}
          p={1}
        >
          <Box alignItems="center" justifyContent="center" m={3}>
            <h1 style={style1}>{options[1]}</h1>
            <Container fluid="md" className="text-center">
              <Row>
                <Row className="text-center">{items}</Row>
              </Row>
            </Container>
          </Box>
        </Box>
      );
    } else if (this.state.counter === 12) {
      let options = [
        ["sex", "What sex do you identify as?", ["men", "women"]],
        [
          "status",
          "What is your relationship status",
          ["available", "married", "seeing someone", "single"],
        ],
      ];
      let items = [[], []];

      for (let j = 0; j < 2; j++) {
        options[j][2].map((el, i) =>
          items[j].push(
            <Col key={i} xs={6} md={4}>
              <Button
                key={i}
                variant="contained"
                // color="primary"
                value={el}
                onClick={(e) => this.handleChange(e)}
                name={options[j][0]}
                disableElevation
              >
                {el}
              </Button>
              <br />
              <br />
            </Col>
          )
        );
      }

      result = (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          m={1}
          p={1}
        >
          <Box alignItems="center" justifyContent="center" m={3}>
            <h1 style={style1}>{options[0][1]}</h1>
            <Container fluid="md" className="text-center">
              <Row>
                <Row className="text-center">{items[0]}</Row>
              </Row>
            </Container>
            <h1 style={style1}>{options[1][1]}</h1>
            <Container fluid="md" className="text-center">
              <Row>
                <Row className="text-center">{items[1]}</Row>
              </Row>
            </Container>
          </Box>
        </Box>
      );
    } else if (this.state.counter === 13) {
      let options = [
        "orientation",
        "What is your sexual orientation?",
        ["bisexual", "gay", "straight"],
      ];
      let items = [];
      options[2].map((el, i) =>
        items.push(
          <Col key={i} xs={6} md={4}>
            <Button
              key={i}
              variant="contained"
              // color="primary"
              value={el}
              onClick={(e) => this.handleChange(e)}
              name={options[0]}
              disableElevation
            >
              {el}
            </Button>
            <br />
            <br />
          </Col>
        )
      );
      result = (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          m={1}
          p={1}
        >
          <Box alignItems="center" justifyContent="center" m={3}>
            <h1 style={style1}>{options[1]}</h1>
            <Container fluid="md" className="text-center">
              <Row>
                <Row className="text-center">{items}</Row>
              </Row>
            </Container>
          </Box>
        </Box>
      );
    } else {
      result = (
        <Box display="flex" justifyContent="center" m={1} p={1}>
          <Box alignItems="center" justifyContent="center" m={3}>
            <h1 style={style1}>Enter an image URL for your profile picture</h1>
            <TextField
              label="URL"
              name="profile_image"
              value={this.state.profile_image}
              onChange={this.handleChange}
            />
          </Box>
        </Box>
      );
    }
    return (
      <div className="profile">
        {this.state.counter === 15 ? (
          <ProfileDashboard
            first_name={this.state.first_name}
            last_name={this.state.last_name}
            mumble_email={this.state.mumble_email}
            age={this.state.age}
            body_type={this.state.body_type}
            diet={this.state.diet}
            drinks={this.state.drinks}
            drugs={this.state.drugs}
            education={this.state.education}
            ethnicity={this.state.ethnicity}
            height={this.state.height}
            income={this.state.income}
            job={this.state.job}
            location={this.state.location}
            offspring={this.state.offspring}
            orientation={this.state.orientation}
            pets={this.state.pets}
            religion={this.state.religion}
            sex={this.state.sex}
            smokes={this.state.smokes}
            status={this.state.status}
            profile_image={this.state.profile_image}
          ></ProfileDashboard>
        ) : (
          <Box>
            {result}
            <Box
              id="navArrows"
              display="flex"
              justifyContent="center"
              alignItems="center"
              mx={5}
              mt={3}
              // p={2}
            >
              {this.state.counter !== 0 ? (
                <NavigateBeforeIcon onClick={this.handleLeftCounter} id="left">
                  Left
                </NavigateBeforeIcon>
              ) : (
                <div></div>
              )}
              <NavigateNextIcon onClick={this.handleRightCounter} id="right">
                Right
              </NavigateNextIcon>
            </Box>
          </Box>
        )}
      </div>
    );
  }
}

export default Profile;
