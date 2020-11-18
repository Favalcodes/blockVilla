const RegisterUsers = artifacts.require("RegisterUsers");

module.exports = function (deployer) {
  deployer.deploy(RegisterUsers);
};
