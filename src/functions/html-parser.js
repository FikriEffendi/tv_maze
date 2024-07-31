export const stripHTML = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "The show doesn't have a synopsis";
};
