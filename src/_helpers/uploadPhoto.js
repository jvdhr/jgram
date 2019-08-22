import { storage } from "../firebase/firebase";

const getBlob = url => {
  return fetch(url)
    .then(res => res.blob())
    .then(blob => {
      return blob;
    });
};

export default (photo, name) => {
  return getBlob(photo).then(img => {
    return storage
      .ref(`images/${name}`)
      .put(img)
      .then(res => {
        return storage
          .ref("images")
          .child(name)
          .getDownloadURL()
          .then(url => {
            return url;
          });
      })
      .catch(e => console.log(e));
  });
};
