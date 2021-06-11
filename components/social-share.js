import {TwitterShareButton, TwitterIcon} from 'next-share';
import Link from 'next/link';

export const SocialShare = ({post}) => {
  let url = `https://ezecastellanos.com.ar/posts/${encodeURI(post?.slug)}`;
  let title = `Check out this article from @Ezequiel_Caste: ${post.title} 🚀 `;
  return (
    <>
      <div
        title="Share on Twitter"
        className="social rounded-xl bg-gradient-to-r from-green-400 to-green-200 flex flex-col items-center my-8 p-2.5"
      >
        Share this article on Twitter
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </div>
      <Link as={`/posts/`} href="/posts">
        <a className="text-md">Back</a>
      </Link>
    </>
  );
};
