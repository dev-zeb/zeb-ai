'use client';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

export default function ShareComponent({ url }: { url: string }) {
  return (
    <div className="flex space-x-2">
      <FacebookShareButton url={url}>
        <button className="bg-blue-600 text-white p-2 rounded">Share on Facebook</button>
      </FacebookShareButton>
      <TwitterShareButton url={url}>
        <button className="bg-blue-400 text-white p-2 rounded">Share on Twitter</button>
      </TwitterShareButton>
      <WhatsappShareButton url={url}>
        <button className="bg-green-500 text-white p-2 rounded">Share on WhatsApp</button>
      </WhatsappShareButton>
    </div>
  );
}
