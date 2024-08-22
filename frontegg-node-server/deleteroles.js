require('dotenv').config(); // Load environment variables (clientId, secret)
const axios = require('axios');

// Function to get vendor token
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

// Function to fetch roles for a specific tenant
const fetchRolesForTenant = async (vendorToken, tenantId) => {
  try {
    console.log(`Fetching roles for tenant ID: ${tenantId}...`);
    const response = await axios.get(
      'https://api.frontegg.com/identity/resources/roles/v1',
      {
        headers: {
          'Authorization': `Bearer ${vendorToken}`,
          'frontegg-tenant-id': tenantId,
        }
      }
    );

    console.log('Full response:', response.data); // Log the full response

    // Filter roles based on tenantId
    const roles = response.data.filter(role => role.tenantId === tenantId);

    if (!roles || roles.length === 0) {
      console.error('No roles found for the specified tenant ID.');
      return [];
    }

    console.log(`Roles fetched successfully. Total roles found: ${roles.length}`);
    console.log('Roles:', roles.map(role => ({ id: role.id, name: role.name })));
    return roles;
  } catch (error) {
    console.error('Error fetching roles:', error);
    throw error;
  }
};

// Function to delete a role by ID
const deleteRole = async (vendorToken, roleId) => {
  try {
    console.log(`Deleting role with ID: ${roleId}...`);
    await axios.delete(
      `https://api.frontegg.com/identity/resources/roles/v1/${roleId}`,
      {
        headers: {
          'Authorization': `Bearer ${vendorToken}`
        }
      }
    );
    console.log(`Role with ID: ${roleId} deleted successfully.`);
  } catch (error) {
    console.error(`Error deleting role with ID: ${roleId}`, error);
  }
};

// Main function to fetch roles and delete them
const main = async () => {
  try {
    const tenantId = 'delete-rolesandpermissions'; // Tenant ID to be used
    const vendorToken = await getVendorToken(); // Get vendor token

    // Fetch roles for the tenant
    const roles = await fetchRolesForTenant(vendorToken, tenantId);

    // Delete each role one by one
    for (const role of roles) {
      await deleteRole(vendorToken, role.id);
    }

    console.log('All specified roles have been deleted.');
  } catch (error) {
    console.error('Error during role deletion:', error);
  }
};

// Execute the main function
main();