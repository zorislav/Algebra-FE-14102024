import generateName from "sillyname";
import generateColor from "randomcolor";

function getMember() {
  return {
    username: generateName(),
    color: generateColor(),
  };
}

const obj = {
  get: getMember,
};

export default obj;

// export default {
//   get: getMember
// };
