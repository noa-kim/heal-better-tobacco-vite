export const getIframeHeight = () => {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight
  );
};
