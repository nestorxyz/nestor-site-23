interface HeadTagsProps {
  title?: string;
  preview_url?: string;
  pathname?: string;
}

const HeadTags: React.FC<HeadTagsProps> = (props) => {
  const { title, preview_url, pathname } = props;

  return (
    <>
      <meta charSet="utf-8" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <meta name="viewport" content="width=device-width" />

      <meta
        name="title"
        content={title ? `${title} - Nestor Mamani` : 'Nestor Mamani'}
      />
      <meta
        name="description"
        content="hi i'm Nestor, a self-starter who loves shipping products!!"
      />
      <meta name="theme-color" content="#ffc6ff" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://nestormamani.com${pathname}`} />
      <meta
        property="og:title"
        content={title ? `${title} - Nestor Mamani` : 'Nestor Mamani'}
      />
      <meta
        property="og:description"
        content="hi i'm Nestor, a self-starter who loves shipping products!!"
      />
      <meta
        property="og:image"
        content={`https://saku.zone/assets/preview/${preview_url}`}
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content={`https://nestormamani.com${pathname}`}
      />
      <meta
        property="twitter:title"
        content={title ? `${title} - Nestor Mamani` : 'Nestor Mamani'}
      />
      <meta
        property="twitter:description"
        content="hi i'm Nestor, a self-starter who loves shipping products!!"
      />
      <meta
        property="twitter:image"
        content={`https://nestormamani.com/assets/preview/${preview_url}`}
      />

      <title>{title ? `${title} - Nestor Mamani` : 'Nestor Mamani'}</title>
    </>
  );
};

export default HeadTags;
