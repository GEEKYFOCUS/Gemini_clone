async function getAddress({ latitude, longitude }) {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
  );
  if (!res.ok) throw Error("Failed getting address");

  const data = await res.json();
  console.log(data);
  return data;
}

function getPosition() {
  //   return new Promise((resolve, reject) => {
  //     navigator.geolocation.getCurrentPosition(resolve, reject);
  //   }
  // );
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export function fetchAddress() {
  //1  firstly get the user Geolocation user Position
  const positionObj = getPosition().then((data) => {
    const res = data.coords;
    const { latitude, longitude } = res;
    console.log(latitude, longitude);
    return { latitude, longitude };
  });
  const position = positionObj;
  console.log(position);

  // return position;

  //2 Then  use the reverse geocoding API to get the description of users Address
  const data = getAddress(position)
    .then((data) => {
      console.log(data);
      const address = `${data?.city}, ${data?.countryName}`;
      console.log(address);
      return address;
    })
    .catch((err) => err.message);
  return data;
  // const obj = addressObj.then((data) => data);
  // console.log(addressObj, obj);
  // const address = `${addressObj?.city}, ${addressObj?.countryName}`;
  // console.log(address);
  // return address;
}
