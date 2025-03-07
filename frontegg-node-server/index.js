require('dotenv').config(); // take env variables (clientId, secret)

const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3001;

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(express.json());

// route to test if the server is working
app.get('/test', (req, res) => {
  res.send('Server is up and running');
});


app.get("/overrides", cors(corsOptions), (req, res) =>
  res.send({
    localizations: {
      en: {
        loginBox: {
          signup: {
            title: "sample1",
            nameInputLabel: "sample2",
            nameInputPlaceholder: "sample3",
            nameIsRequired: "sample4",
            nameMinLengthIs3: "sample5",
            emailInputLabel: "sample6",
            emailInputPlaceholder: "sample7",
            emailMustBeValid: "sample8",
            emailIsRequired: "sample9",
            passwordInputLabel: "sample10",
            passwordInputPlaceholder: "sample11",
            passwordIsRequired: "sample12",
            phoneInputLabel: "sample13",
            phoneInputPlaceholder: "sample14",
            phoneIsRequired: "sample15",
            phoneIsInvalid: "sample16",
            companyNameInputLabel: "sample17",
            companyNameInputPlaceholder: "sample18",
            companyNameIsRequired: "sample19",
            companyNameMinLengthIs3: "sample20",
            disclaimerText: "sample21",
            disclaimerCheckboxLabel: "sample22",
            disclaimerTextRequired: "sample23",
            termsLinkText: "sample24",
            termsLink: "sample25",
            privacyLinkText: "sample26",
            privacyLink: "sample27",
            termsAndPrivacyConjunctionText: "sample28",
            signUpWithSocialLogin: "sample29",
            loginMessage: "sample30",
            loginLink: "sample31",
            signupButtonText: "sample32",
            failedJoinTenantTitle: "sample33",
            failedJoinTenantBackButton: "sample34",
            successTitle: "sample35",
            successActivateMessage: "sample36",
            backToLoginLink: "sample37",
            successGoToLoginMessage: "sample38",
            successGoToLoginButton: "sample39",
            firstNameInputLabel: "sample40",
            firstNameInputPlaceholder: "sample41",
            firstNameIsRequired: "sample42",
            firstNameMinLengthIs3: "sample43",
            lastNameInputLabel: "sample44",
            lastNameInputPlaceholder: "sample45",
            lastNameIsRequired: "sample46",
            lastNameMinLengthIs3: "sample47",
            genericErrorPageTitle: "sample48",
            splitSignUp: {
              valuesComponent: {
                title: "sample49",
                description: "sample50"
              },
              testimonialComponent: {
                quote: "sample51",
                authorName: "sample52",
                authorTitle: "sample53"
              },
              titleDescriptionComponent: {
                title: "sample54",
                description: "sample55"
              }
            },
            account: {
              title: "sample56",
              nameInputLabel: "sample57",
              nameInputPlaceholder: "sample58",
              nameIsRequired: "sample59",
              nameMinLengthIs3: "sample60",
              emailInputLabel: "sample61",
              emailInputPlaceholder: "sample62",
              emailMustBeValid: "sample63",
              emailIsRequired: "sample64",
              passwordInputLabel: "sample65",
              passwordInputPlaceholder: "sample66",
              passwordIsRequired: "sample67",
              phoneInputLabel: "sample68",
              phoneInputPlaceholder: "sample69",
              phoneIsRequired: "sample70",
              phoneIsInvalid: "sample71",
              companyNameInputLabel: "sample72",
              companyNameInputPlaceholder: "sample73",
              companyNameIsRequired: "sample74",
              companyNameMinLengthIs3: "sample75",
              disclaimerText: "sample76",
              disclaimerCheckboxLabel: "sample77",
              disclaimerTextRequired: "sample78",
              termsLinkText: "sample79",
              termsLink: "sample80",
              privacyLinkText: "sample81",
              privacyLink: "sample82",
              termsAndPrivacyConjunctionText: "sample83",
              signUpWithSocialLogin: "sample84",
              loginMessage: "sample85",
              loginLink: "sample86",
              signupButtonText: "sample87",
              failedJoinTenantTitle: "sample88",
              failedJoinTenantBackButton: "sample89",
              successTitle: "sample90",
              successActivateMessage: "sample91",
              backToLoginLink: "sample92",
              successGoToLoginMessage: "sample93",
              successGoToLoginButton: "sample94",
              firstNameInputLabel: "sample95",
              firstNameInputPlaceholder: "sample96",
              firstNameIsRequired: "sample97",
              firstNameMinLengthIs3: "sample98",
              lastNameInputLabel: "sample99",
              lastNameInputPlaceholder: "sample100",
              lastNameIsRequired: "sample101",
              lastNameMinLengthIs3: "sample102",
              genericErrorPageTitle: "sample103"
            },
            user: {
              title: "sample104",
              nameInputLabel: "sample105",
              nameInputPlaceholder: "sample106",
              nameIsRequired: "sample107",
              nameMinLengthIs3: "sample108",
              emailInputLabel: "sample109",
              emailInputPlaceholder: "sample110",
              emailMustBeValid: "sample111",
              emailIsRequired: "sample112",
              passwordInputLabel: "sample113",
              passwordInputPlaceholder: "sample114",
              passwordIsRequired: "sample115",
              phoneInputLabel: "sample116",
              phoneInputPlaceholder: "sample117",
              phoneIsRequired: "sample118",
              phoneIsInvalid: "sample119",
              companyNameInputLabel: "sample120",
              companyNameInputPlaceholder: "sample121",
              companyNameIsRequired: "sample122",
              companyNameMinLengthIs3: "sample123",
              disclaimerText: "sample124",
              disclaimerCheckboxLabel: "sample125",
              disclaimerTextRequired: "sample126",
              termsLinkText: "sample127",
              termsLink: "sample128",
              privacyLinkText: "sample129",
              privacyLink: "sample130",
              termsAndPrivacyConjunctionText: "sample131",
              signUpWithSocialLogin: "sample132",
              loginMessage: "sample133",
              loginLink: "sample134",
              signupButtonText: "sample135",
              failedJoinTenantTitle: "sample136",
              failedJoinTenantBackButton: "sample137",
              successTitle: "sample138",
              successActivateMessage: "sample139",
              backToLoginLink: "sample140",
              successGoToLoginMessage: "sample141",
              successGoToLoginButton: "sample142",
              firstNameInputLabel: "sample143",
              firstNameInputPlaceholder: "sample144",
              firstNameIsRequired: "sample145",
              firstNameMinLengthIs3: "sample146",
              lastNameInputLabel: "sample147",
              lastNameInputPlaceholder: "sample148",
              lastNameIsRequired: "sample149",
              lastNameMinLengthIs3: "sample150",
              genericErrorPageTitle: "sample151"
            }
          }
        }
      }
    }
  })
);;

// function to get vendor token
const getVendorToken = async () => {
  try {
    const response = await axios.post('https://api.frontegg.com/auth/vendor', {
      clientId: process.env.CLIENT_ID, // value from .env
      secret: process.env.SECRET // value from .env
    });
    return response.data.token; // use token
  } catch (error) {
    console.error('Error obtaining vendor token:', error);
    throw error;
  }
};

app.post('/get-token', async (req, res) => {
  try {
    const token = await getVendorToken();
    console.log('Obtained vendor token:', token);
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error obtaining token:', error);
    res.status(500).json({ error: 'Failed to obtain token' });
  }
});

app.post("/usersignup", cors(corsOptions), async (req, res) => {
  console.log("Received a POST request at /usersignup");
  console.log("Request body:", req.body);

  const newTenantId = "561b315f-8fcc-4a50-bb53-53e16349bd57"; //  Please specify the account ID you want to assign to the new user.
  const userId = req.body.user.id;
  const originalTenantId = req.body.user.tenantId;

  try {
    const vendorToken = await getVendorToken(); // get vendor token

    // add user to the desired tenant
    await axios.post(
      `https://api.frontegg.com/identity/resources/users/v1/${userId}/tenant`,
      {
        tenantId: newTenantId,
        skipInviteEmail: true
      },
      {
        headers: {
          'Authorization': `Bearer ${vendorToken}`
        }
      }
    );
    console.log(`User ${userId} added to tenant ${newTenantId}`);

    // delete new acc created
    setTimeout(async () => {
      await axios.delete(
        `https://api.frontegg.com/tenants/resources/tenants/v1/${originalTenantId}`,
        {
          headers: {
            'Authorization': `Bearer ${vendorToken}`
          }
        }
      );
      console.log(`Tenant ${originalTenantId} deleted`);

      // send "allow"
      res.status(200).json({
        verdict: 'allow',
        error: {
          status: 0,
          message: []
        },
      });
    }, 1000); // = 1 sec
  } catch (error) {
    console.error(`Error processing signup: ${error}`);
    res.status(500).json({
      verdict: 'block',
      error: {
        status: 500,
        message: ['Internal server error']
      }
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});