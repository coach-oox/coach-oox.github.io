const copyText = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    alert('클립보드에 복사되었습니다.');
  } catch (error) {
    alert(error);
  }
};

export default copyText;
