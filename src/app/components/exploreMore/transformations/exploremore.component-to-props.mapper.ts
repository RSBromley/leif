export const exploreMoreMapper = {
  title: 'entryTitle',
  imageUri: {
    $path: ['primaryImage', 'thumbnailImage'],
    $formatting: (img: any) =>
      img && img.asset && img.asset.sys && img.asset.sys.uri,
    $default: '/image-library/fallback/leif-logo.png',
  },
  imageAlt: {
    $path: 'primaryImage',
    $formatting: (img: any) =>
      (img && img.altText) || img.caption || (img.asset && img.asset.title),
    $default: 'Leif logo',
  },
  uri: {
    $path: 'sys',
    $formatting: (sys: any) => sys.uri,
  },
};
