const copyText = async (text, message) => {
  try {
    await navigator.clipboard.writeText(text);
    alert(message);
  } catch (error) {
    alert(error);
  }
};

export default copyText;
