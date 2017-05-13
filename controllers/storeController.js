exports.homePage = (req, res) => {
  res.render('index');
}

exports.addStore = (req, res) => {
  res.render('editStore', { title: 'Add Store' });
}

exports.createStore = (req, res) => {
  const {
    name,
    slug
  } = req.store;

  req.flash('success', `Successfully Created ${name}. Care to leave a review?`);
  res.redirect(`/stores/${slug}`);
};

exports.getStores = (req, res) => {
  const {
    stores
  } = req;

  res.render('stores', { title: 'Stores', stores });
}
