import axios from "axios"
import "regenerator-runtime/runtime.js";

const httpRequest = async (alpha2Code) => {
  const result = await axios.get(`https://restcountries.com/v2/lang/${alpha2Code}`)
  if (result.status) {
      console.log(`REST API call status: ${result.status}`)
  }
  return result
}

export default httpRequest;