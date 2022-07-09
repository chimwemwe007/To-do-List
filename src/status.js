const completed = (work, i) => {
  work[i].completed = !work[i].completed;
  localStorage.setItem('collection', JSON.stringify(work));
  window.location.reload();
};
export default completed;