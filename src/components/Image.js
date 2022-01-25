const getResolution = (index) => {
  if (index === 0) {
    return "";
  }
  return `@${index + 1}x`;
};

const convertToSrcSet = (src, extension) =>
  new Array(3)
    .fill("")
    .map(
      (_, index) =>
        `${src.replace(
          /\.[a-z0-9]{3}/,
          `${getResolution(index)}${extension}`
        )} ${index + 1}x`
    )
    .join(",");

export function Image({ src, alt, ...imageProps }) {
  const avifSrcSet = convertToSrcSet(src, ".avif");
  const jpgSrcSet = convertToSrcSet(src, ".jpg");

  return (
    <picture>
      <source type="image/avif" srcSet={avifSrcSet} />
      <source type="image/jpeg" srcSet={jpgSrcSet} />
      <img {...imageProps} alt={alt} src={src} />
    </picture>
  );
}
