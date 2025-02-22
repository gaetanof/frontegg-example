const { IdentityClient } = require('@frontegg/client');

// Aquí están tus datos
const clientId = '60ddd8a5-761f-40df-9b6b-aa71fb6c31ef';
const apiKey = 'efb8dec4-56d0-4b07-bdc4-4ebad26f0b9e';
const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjYwZGRkOGE1In0.eyJzdWIiOiJhODkxMmIzZC0xMjljLTQ5ZjEtYjJjZi0wN2RhYmEyZmIxZGEiLCJ0ZW5hbnRJZCI6ImFjNjZiNGMzLTU0YzItNDVhZi05MjFiLTY1ZDJlZDBjMGQzNSIsInJvbGVzIjpbIkFkbWluIl0sInBlcm1pc3Npb25zIjpbImZlLmNvbm5lY3Rpdml0eS4qIiwiZmUuc2VjdXJlLioiLCJjb21wYW55LmNlcm5pdC5mdWxsRWRpdG9yIl0sIm1ldGFkYXRhIjp7fSwiY3JlYXRlZEJ5VXNlcklkIjoiMTc5OTQ3MzUtMmNmYi00ODU5LWI2MzEtMmE0NjBiMjMxZTc2IiwidHlwZSI6InRlbmFudEFwaVRva2VuIiwiYXBwbGljYXRpb25JZCI6Ijk4YjU5YzQzLTBkNGYtNGIyOS1hMTJmLTQ1YWJkODhlMjlmZSIsImF1ZCI6IjYwZGRkOGE1LTc2MWYtNDBkZi05YjZiLWFhNzFmYjZjMzFlZiIsImlzcyI6Imh0dHBzOi8vc2Vjb25kYXBwc3NvLmZyb250ZWdnLmNvbSIsImlhdCI6MTcyNzE0MTAyMSwiZXhwIjoxNzI3MjI3MDIxfQ.M1qibOfWR_QwjuyIQiTTBkmdwMf73QoUvPyYrpRwOOBFh1YQc43aKoThGXRotakYoG8n3Zx_4Vaw_kideR2_KuGax1xX01eBR5Gozx-k1AvN_mB7j45Rt--h7o0S8VgV3sPby5Xz1eeJjEnHJlQplc2jtsefSTsXMNsHeOiWM6ols1WdS8cwFvXagEnMJ7Ggy0GZZ57qUFqreeDsrGKhypgd725hUBpFuniT70ennywyN53J3Kt9r7uXGwOv567R4uSfHRNDk665m7mTIgef8NAGnfNN-3k_SdAYhXZvhzhQlRjfCT-vpN1ZeCaqqDpgaAu9OuSIHVHmTUpxPGNXzg';

async function validateToken() {
  try {
    // Inicializamos el cliente de Frontegg
    const identityClient = new IdentityClient({
      clientId: clientId,
      apiKey: apiKey,
    });

    // Validamos el token
    const decodedToken = await identityClient.validateToken(token, { withRolesAndPermissions: true });

    console.log('Token validado exitosamente:', decodedToken);
  } catch (error) {
    console.error('Error durante la validación del token:', error);
  }
}

validateToken();