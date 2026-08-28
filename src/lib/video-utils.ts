export function getYouTubeEmbedUrl(url: string): string {
  if (!url) return "";

  // Si ya es un enlace embed
  if (url.includes("youtube.com/embed/")) {
    return url;
  }

  // Extraer ID de youtube.com/watch?v=ID o youtu.be/ID
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);

  if (match && match[2].length === 11) {
    return `https://www.youtube-nocookie.com/embed/${match[2]}?autoplay=1&rel=0`;
  }

  return url;
}
