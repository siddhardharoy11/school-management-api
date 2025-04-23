const validateSchoolData = (schoolData) => {
    const errors = [];
    
    if (!schoolData.name || typeof schoolData.name !== 'string' || schoolData.name.trim().length === 0) {
      errors.push('Name is required and must be a non-empty string');
    }
    
    if (!schoolData.address || typeof schoolData.address !== 'string' || schoolData.address.trim().length === 0) {
      errors.push('Address is required and must be a non-empty string');
    }
    
    if (typeof schoolData.latitude !== 'number' || schoolData.latitude < -90 || schoolData.latitude > 90) {
      errors.push('Latitude must be a valid number between -90 and 90');
    }
    
    if (typeof schoolData.longitude !== 'number' || schoolData.longitude < -180 || schoolData.longitude > 180) {
      errors.push('Longitude must be a valid number between -180 and 180');
    }
    
    return errors;
  };
  
  module.exports = {
    validateSchoolData
  };