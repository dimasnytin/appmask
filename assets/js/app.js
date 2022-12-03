
// ЗАГРУЗКА ФОТО
const fileInput = document.querySelector('.file-input'),
previewImg = document.querySelector('.preview-img img'),
chooseImgBtn = document.querySelector('.choose-img'),
saveImgBtn = document.querySelector('.save-img');


const loadImage = () => {
  let file = fileInput.files[0];
  if (!file)return;
  previewImg.src = URL.createObjectURL(file);
}


fileInput.addEventListener('change', loadImage);
chooseImgBtn.addEventListener('click', () => fileInput.click());

// 
const saveImage = () => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = previewImg.naturalWidth;
  canvas.height = previewImg.naturalHeight;

  ctx.drawImage(previewImg, 0, 0, canvas.width, canvas.height);
  document.body.appendChild(canvas);

  const link = document.createElement('a');
  link.download = 'image.jpg';
  link.href = canvas.toDataURL();
  link.click();
}


saveImgBtn.addEventListener('click', saveImage);