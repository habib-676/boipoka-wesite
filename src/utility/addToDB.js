const getStoredBook = () => {
  const storedBookSTR = localStorage.getItem("readList");

  if (storedBookSTR) {
    const storedData = JSON.parse(storedBookSTR);
    return storedData;
  } else {
    return [];
  }
};

const addToStoredDB = (id) => {
  const storedBookData = getStoredBook();

  if (storedBookData.includes(id)) {
    alert("This item already exists");
  } else {
    storedBookData.push(id);
    const data = JSON.stringify(storedBookData);
    localStorage.setItem("readList", data);
  }
  console.log(storedBookData);
};

export { addToStoredDB };
