const School = require('../models/schoolModel');
const { validateSchoolData } = require('../utils/validation');

const schoolController = {
  addSchool: async (req, res) => {
    try {
      const schoolData = req.body;
      
      // Validate input
      const validationErrors = validateSchoolData(schoolData);
      if (validationErrors.length > 0) {
        return res.status(400).json({ 
          success: false, 
          errors: validationErrors 
        });
      }
      
      // Add to database
      const schoolId = await School.create(schoolData);
      
      res.status(201).json({ 
        success: true, 
        message: 'School added successfully', 
        schoolId 
      });
    } catch (error) {
      console.error('Error adding school:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Internal server error' 
      });
    }
  },

  listSchools: async (req, res) => {
    try {
      const { latitude, longitude } = req.query;
      
      // Validate coordinates
      if (!latitude || !longitude || 
          isNaN(parseFloat(latitude)) || isNaN(parseFloat(longitude)) ||
          parseFloat(latitude) < -90 || parseFloat(latitude) > 90 ||
          parseFloat(longitude) < -180 || parseFloat(longitude) > 180) {
        return res.status(400).json({ 
          success: false, 
          message: 'Valid latitude and longitude parameters are required' 
        });
      }
      
      const userLat = parseFloat(latitude);
      const userLng = parseFloat(longitude);
      
      const schools = await School.getNearbySchools(userLat, userLng);
      
      res.status(200).json({ 
        success: true, 
        data: schools 
      });
    } catch (error) {
      console.error('Error listing schools:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Internal server error' 
      });
    }
  }
};

module.exports = schoolController;