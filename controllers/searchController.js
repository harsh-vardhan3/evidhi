const User = require('../models/user'); // Assuming your model is named "User"

exports.searchResults = async (req, res) => {
  const keyword = req.query.keyword || '';

  try {
    const results = await User.find({
      $or: [
        { name: { $regex: new RegExp(keyword, 'i') } },
        { speciality: { $regex: new RegExp(keyword, 'i') } },
      ],
    });

    res.render('aftersearch', { results, keyword, userName: req.user });
  } catch (err) {
    console.error('Error during search:', err);
    res.render('error');
  }
};
