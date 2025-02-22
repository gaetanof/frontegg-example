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
// route to customize in hosted mode
app.get("/overrides", cors(corsOptions), (req, res) =>
  res.send({
    localizations: {
      en: {
        errors: {
          "ER-01034": "Test123123",
        },
      },
    },
  })
);

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