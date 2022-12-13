import endpoint from "./endpoind";

export default function getData() {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
  
    const reqOption = {
      method: 'GET',
      headers: myHeaders,
    };
    return fetch(`${endpoint}/todos`, reqOption);
  }