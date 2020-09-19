import axios from "axios";

import checkBodyCompatibility from "./checkBodyCompatibility.js";
import checkDietCompatibility from "./checkDietCompatibility.js";
import checkDrinkCompatibility from "./checkDrinkCompatibility.js";
import checkDrugCompatibility from "./checkDrugCompatibility.js";
import checkEduCompatibility from "./checkEduCompatibility.js";
import checkEthnicityCompatibility from "./checkEthnicityCompatibility.js";
import checkHeightCompatibility from "./checkHeightCompatibility.js";
import checkJobCompatibility from "./checkJobCompatibility.js";
import checkOffspringCompatibility from "./checkOffspringCompatibility.js";
import checkPetCompatibility from "./checkPetCompatibility.js";
import checkReligionCompatibility from "./checkReligionCompatibility.js";
import checkSexualPreference from "./checkSexualPreference.js";
import checkSmokesCompatibility from "./checkSmokesCompatibility.js";
import checkStatusCompatibility from "./checkStatusCompatibility.js";

// const getUserProfile = () => {
//   axios.get("http://localhost:3000/users/user_data").then(({ data }) => data);
// };

// const myProfile = {
//   _id: 2243,
//   first_name: "Ella",
//   last_name: "Manning",
//   mumble_email: "ella.manning@mumble.com",
//   age: 22,
//   body_type: "thin",
//   diet: "strictly kosher",
//   drinks: "desperately",
//   drugs: "often",
//   education: "graduated from ph.d program",
//   essay: "",
//   ethnicity: "black",
//   height: 75,
//   income: -1,
//   job: "military",
//   location: "san francisco, california",
//   offspring: "has kids",
//   orientation: "bisexual",
//   pets: "has dogs",
//   religion: "catholicism but not too serious about it",
//   sex: "women",
//   sign: "cancer and it&rsquo;s fun to think about",
//   smokes: "sometimes",
//   speaks: "english (fluently), spanish (poorly)",
//   status: "single",
//   profile_image: "https://randomuser.me/api/portraits/women/60.jpg",
// };

const RecoAlgo = (myProfile) => {
  return new Promise((resolve, reject) => {
    axios
      .get("/profile/discover")
      .then(({ data }) => {
        console.log("n data=", data.length);
        console.log(data);
        let sexualPreference = checkSexualPreference(myProfile);
        return data.filter(
          (Data) =>
            myProfile._id !== Data._id &&
            (sexualPreference[0] === Data.sex ||
              sexualPreference[1] === Data.sex) &&
            (sexualPreference[2] === Data.orientation ||
              sexualPreference[3] === Data.orientation) &&
            Data.age > myProfile.age - 20 &&
            Data.age < myProfile.age + 20
        );
      })
      .then((rightData) => {
        let array = rightData.map((userProfile) => {
          userProfile.loveFactor = 0;
          calculateLoveFactor(myProfile, userProfile);
          return userProfile;
        });
        // return rightData;
        // console.log(array);
        return array;
      })
      .then((recommendedProfiles) => {
        resolve(
          recommendedProfiles
            .sort((a, b) => b.loveFactor - a.loveFactor)
            .slice(0, 10)
        );
      });
  });
};

const calculateLoveFactor = (myProfile, userProfile) => {
  checkDrinkCompatibility(myProfile, userProfile);
  checkDrugCompatibility(myProfile, userProfile);
  checkBodyCompatibility(myProfile, userProfile);
  checkHeightCompatibility(myProfile, userProfile);
  checkSmokesCompatibility(myProfile, userProfile);
  checkStatusCompatibility(myProfile, userProfile);
  checkDietCompatibility(myProfile, userProfile);
  checkEduCompatibility(myProfile, userProfile);
  checkEthnicityCompatibility(myProfile, userProfile);
  checkPetCompatibility(myProfile, userProfile);
  checkReligionCompatibility(myProfile, userProfile);
  checkOffspringCompatibility(myProfile, userProfile);
  checkJobCompatibility(myProfile, userProfile);
};

// RecoAlgo(myProfile).then((res) => console.log(res));

export default RecoAlgo;
