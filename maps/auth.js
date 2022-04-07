// This file is not used right now as oAuth is not done here
const axios= require("axios")

const qs= require("qs")


const getAccessToken = async () => {
  
const API_ID = "";
const encodedToken = Buffer.from(
  process.env.API_ID)
  const  data = qs.stringify({grant _type:"API_ID"});
};
module.export = { getAccessToken };
