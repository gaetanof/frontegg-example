const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001; // Usa un puerto diferente

const corsOptions = {
  origin: '*', // Permite el acceso desde cualquier origen
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

app.get("/overrides", cors(corsOptions), (req, res) =>
  res.send({
    themeV2: {
      adminPortal: {
        pages: {
          profile: {
            content: {
              '.adminportal-fe-root-fl821x': {
                display: 'none',
              },
            },
          },
        },
      },
    },
    localizations: {
      en: {
        loginBox: {
          forgetPassword: {
            title: 'Forgot your password?',
            description: 'SAMPLE',
            emailInputLabel: 'Email',
            emailInputPlaceholder: 'name@example.com',
            submitButtonText: 'SAMPLE me',
            backToLogin: 'Back to login',
            resetEmailSentTitle: 'custom title',
            resetEmailSentMessage: 'custom message',
          },
          resetPassword: {
            title: 'Reset password',
            description: '',
            newPasswordInputLabel: 'New password',
            newPasswordInputPlaceholder: 'Set password',
            confirmPasswordInputLabel: 'Confirm new password',
            confirmPasswordInputPlaceholder: 'Re-enter password',
            resetPasswordButton: 'Reset password',
          },
        },
      },
    },
  })
);


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
