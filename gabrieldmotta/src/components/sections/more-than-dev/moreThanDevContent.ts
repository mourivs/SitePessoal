export const moreThanDevContent = {
  title: "MORE THAN DEV",
  description:
    "I have created content for YouTube channels, including animated videos, VFX-driven edits, video cutting and editing, comedic content, and branding videos, focusing on high-quality visuals, engaging storytelling, and strong audience retention.",
  videoLabel: "VIDEO YOUTUBE EDITED BY MOURIVS",
  youtubeUrl: "https://www.youtube.com/watch?v=0DKFQ_YlJ3Y",
};

export function getYoutubeVideoId(url: string) {
  const regExp =
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/;
  const match = url.match(regExp);
  return match?.[1] ?? "";
}

export function getYoutubeThumbnail(url: string) {
  const videoId = getYoutubeVideoId(url);
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}