export function getRandomPhoto(
  photos: string[],
  storageKey: string
): string {
  const previewPhoto = localStorage.getItem(storageKey);
  let nextPhoto = previewPhoto;

  while(nextPhoto === previewPhoto) {
    nextPhoto = photos[Math.floor(Math.random() * photos.length)];
    //If there is only one photo, break the loop to avoid infinite loop
    if(photos.length === 1) break;
  }

  localStorage.setItem(storageKey, nextPhoto!);
  return nextPhoto!;
}
