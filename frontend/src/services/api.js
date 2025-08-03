export const fetchUserData = async () => {
  const response = await fetch('http://localhost:5000/api/user');
  const data = await response.json();
  return data;
};
