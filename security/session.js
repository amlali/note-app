let Redis = require("../db/connections/redis");
let helper = require('../util/helper')
let REDIS_CLIENT = Redis.getRedisClient();
class Session {
  constructor() {}

  async createSeesion(user) {
    let exist = await REDIS_CLIENT.existsAsync("userID:" + user._id);
    let data = {};
    if (!exist) {
      let sid = helper.getRandom();
      data.session = sid;
      data.user = user;

      await REDIS_CLIENT.lpushAsync("userID:" + user._id, sid);
      await REDIS_CLIENT.expireAsync("userID:" + user._id, 86400);
      await REDIS_CLIENT.HMSETAsync("sid:" + sid,"role",user.role,"usage",0);
      await REDIS_CLIENT.expireAsync("sid:" + sid, 86400);

    } else {
      let usage = await REDIS_CLIENT.lrangeAsync("userID:" + user._id,0,-1);

      if (usage.length >= 3 && !usage.includes()) {

        let firstSession = await REDIS_CLIENT.rpopAsync("userID:" + user._id);

        res = await REDIS_CLIENT.expireAsync("sid:" + firstSession, 1);
      }
      let sid2 = helper.getRandom();
      data.session = sid2;
      data.user = user;
      await REDIS_CLIENT.lpushAsync("userID:" + user._id, sid2);
      await REDIS_CLIENT.HMSETAsync("sid:" + sid2,"role",user.role,"usage",0);
      await REDIS_CLIENT.expireAsync("sid:" + sid2, 86400);
    }
    return data;
  }
  async isValid(sessionID) {
    return await REDIS_CLIENT.hgetallAsync("sid:" + sessionID);
  }
  async validUsage(decode) {
    let res = await REDIS_CLIENT.HGETAsync("sid:" + decode.session,"usage");
    if (res >= Roles.getMaxUse(decode.user.role)) {
      return false;
    } else {
      await REDIS_CLIENT.HINCRBYAsync("sid:" + decode.session,"usage",1);
      return true;
    }
  }
}
module.exports = new Session()