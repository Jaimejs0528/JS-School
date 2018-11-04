const getPath = () => {
  let path;
  const fullPath = window.location.pathname.split('/');
  fullPath.pop();
  path = fullPath.join('/');
  path += '/';
  return path;
};
export default getPath;
