'use strict';

module.exports = function(Inventory) {
  // Inventory.disableRemoteMethodByName('find');
  Inventory.disableRemoteMethodByName('findById');
  Inventory.disableRemoteMethodByName('replaceById');
  Inventory.disableRemoteMethodByName('count');
  Inventory.disableRemoteMethodByName('findOne');
  Inventory.disableRemoteMethodByName('replaceOrCreate');
  Inventory.disableRemoteMethodByName('exists');
  Inventory.disableRemoteMethodByName('create');
  Inventory.disableRemoteMethodByName('upsert');
  Inventory.disableRemoteMethodByName('updateAll');
  Inventory.disableRemoteMethodByName('deleteById');
  Inventory.disableRemoteMethodByName('confirm');
  Inventory.disableRemoteMethodByName('upsertWithWhere');
  Inventory.disableRemoteMethodByName('createChangeStream');

  Inventory.disableRemoteMethodByName('prototype.updateAttributes');
  Inventory.disableRemoteMethodByName('prototype.__count__accessTokens');
  Inventory.disableRemoteMethodByName('prototype.__create__accessTokens');
  Inventory.disableRemoteMethodByName('prototype.__delete__accessTokens');
  Inventory.disableRemoteMethodByName('prototype.__destroyById__accessTokens');
  Inventory.disableRemoteMethodByName('prototype.__findById__accessTokens');
  Inventory.disableRemoteMethodByName('prototype.__get__accessTokens');
  Inventory.disableRemoteMethodByName('prototype.__updateById__accessTokens');
};
