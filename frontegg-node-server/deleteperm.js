require('dotenv').config();
const axios = require('axios');

const getVendorToken = async () => {
  try {
    const response = await axios.post('https://api.frontegg.com/auth/vendor', {
      clientId: process.env.CLIENT_ID,
      secret: process.env.SECRET
    });
    return response.data.token;
  } catch (error) {
    console.error('Error obtaining vendor token:', error);
    throw error;
  }
};

// Function to fetch and filter permissions that contain 'perm' in the name
const fetchPermissions = async (vendorToken) => {
  try {
    const response = await axios.get('https://api.frontegg.com/identity/resources/permissions/v1', {
      headers: {
        'Authorization': `Bearer ${vendorToken}`,
      }
    });

    const filteredPermissions = response.data.filter(permission =>
      permission.name.toLowerCase().includes('perm')
    );

    return filteredPermissions;

  } catch (error) {
    console.error('Error fetching permissions:', error);
    return [];
  }
};

const deletePermission = async (vendorToken, permissionId) => {
  try {
    await axios.delete(`https://api.frontegg.com/identity/resources/permissions/v1/${permissionId}`, {
      headers: {
        'Authorization': `Bearer ${vendorToken}`,
      }
    });
    console.log(`Permission with ID ${permissionId} deleted.`);
  } catch (error) {
    console.error(`Error deleting permission with ID ${permissionId}:`, error);
  }
};

const main = async () => {
  try {
    const vendorToken = await getVendorToken();
    const permissions = await fetchPermissions(vendorToken);

    if (permissions.length > 0) {
      console.log('Filtered permissions:', permissions);

      for (const permission of permissions) {
        console.log(`Deleting permission with ID: ${permission.id}, Name: ${permission.name}`);
        await deletePermission(vendorToken, permission.id);
      }
    } else {
      console.log('No permissions found containing "perm".');
    }
  } catch (error) {
    console.error('Error during execution:', error);
  }
};

main();